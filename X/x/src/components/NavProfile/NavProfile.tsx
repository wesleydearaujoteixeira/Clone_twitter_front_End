import { useNavigate } from "react-router-dom";

interface ProfileTypes {
  img: string;
  username: string;
  slug: string;
  size?: number;
}

export const NavProfile = ({ img, username, slug, size = 10 }: ProfileTypes) => {
  const navigate = useNavigate();

  // Function to handle profile navigation
  const handleProfile = (name: string) => {
    navigate(`/slug?query=${encodeURIComponent(name)}`); // Encodes name to make URL safe
  };

  return (
    <div className="flex items-center gap-6 mt-5">
      <div>
        {/* Set image size dynamically, fallback to a default size if needed */}
        <img src={img} alt={username} className={`w-${size} h-${size} rounded-full`} />
      </div>

      <div className="flex flex-col overflow-hidden">
        {/* Username as clickable text */}
        <div
          className="block truncate cursor-pointer"
          onClick={() => handleProfile(username)}
        >
          {username}

        </div>
        <p className="text-gray-400 text-sm truncate">{slug}</p>
      </div>
    </div>
  );
};
