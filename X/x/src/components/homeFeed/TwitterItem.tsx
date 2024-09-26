import { Link } from "react-router-dom";
import { twitter } from "../../auth/types/twitter";
import { FaCommentAlt, FaRetweet, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale"; // Localização em português do Brasil

type Props = {
  twitter?: twitter;
};

const TwitterItem = ({ twitter }: Props) => {
  const [faHeart, setFaHeart] = useState(false);

  const faHeartLiked = () => {
    setFaHeart(!faHeart);
  };

  // Formatação da data para exibir o tempo decorrido
  const formattedDate = twitter?.dataPost
    ? formatDistanceToNow(twitter.dataPost, {
        addSuffix: true,
        locale: ptBR, // Define o local como Português do Brasil
      })
    : "Data inválida"; // Texto de fallback caso a data não exista ou seja inválida

  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div>
        <Link to={`${twitter?.user.slug}`}>
          <img
            src={twitter?.user.avatar}
            alt="logo"
            className="size-10 rounded-full"
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3 ">
          <div className="font-bold text-lg ">
            <Link to={`${twitter?.user.slug}`}>{twitter?.user.name}</Link>
          </div>

          <div className="text-xs text-gray-500">
            {twitter?.user.slug} - {formattedDate}
          </div>
        </div>

        <div className="py-4 text-lg">{twitter?.body}</div>
        {twitter?.image && (
          <div className="w-full">
            <img src={twitter.image} className="w-full rounded-2xl" alt="" />
          </div>
        )}

        <div className="flex mt-6 text-gray-500">
          <div className="flex-1">
            <Link to={`${twitter?.id}`}>
              <div className="inline-flex items-center gap-2 cursor-pointer">
                <FaCommentAlt size={20} />
                <span className="text-lg">{twitter?.commentCount}</span>
              </div>
            </Link>
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <FaRetweet size={20} />
              <span className="text-lg">{twitter?.retweetCount}</span>
            </div>
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-2 cursor-pointer">
              <FaHeart
                onClick={faHeartLiked}
                size={20}
                className={`${faHeart ? "text-red-700" : ""}`}
              />
              <span className={`${faHeart ? "text-red-700" : ""}`}>
                {twitter?.likeCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterItem;
