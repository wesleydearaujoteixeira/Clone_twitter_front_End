import { Link, useSearchParams } from 'react-router-dom';
import { General_Header } from '../ui/General_Header';
import { user } from '../../auth/data/data';
import { Button } from '../ui/Button';
import { FaLink } from "react-icons/fa6";
import { HomeFeed } from '../homeFeed/HomeFeed';


export const Slug = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || '';


  return (
        <div>

        <General_Header href='/layout'>
                <div className='font-bold text-lg '> {query} </div>
        </General_Header>

            <section className='border-b-2 border-gray-900'>
                <div className='bg-gray-500  bg-no-repeat bg-cover bg-center h-96'
                style={{backgroundImage: `url(${user?.cover})`}}
                > </div>

                <div className=' flex justify-between items-end -mt-12'>
                    <img 
                        src={user.avatar} 
                        alt={user.name}
                        className='w-32 rounded-full ' 
                    />
                    <div className='w-32 mb-4'>
                        <Link to={`/edit`}>
                            <Button
                                size={2}
                                label='Editar Perfil'
                            />
                        </Link>

                    </div>
                </div>

                <div className='px-6 mt-4 '>

                    <div className='text-xl font-bold'> {user.name} </div>
                    <div className='text-gray-500'> {user.slug} </div>
                    <div className='py-5 text-lg text-gray-500'> {user.bio} </div>


                    {user.link && (
                        <div className='flex gap-2 items-center'>
                            <FaLink size={20} />
                            <Link to={user.link} target='_blank' className='text-blue-300'> {user.link} </Link>
                        </div>
                    )}

                    <div className='my-5 flex gap-6 '>
                        <div className='text-xl text-gray-500'> <span className='text-white'> 1023 </span> seguidores </div>
                        <div className='text-xl text-gray-500'> <span className='text-white'> 100 </span> seguindo </div>
                    </div>

                </div>
            </section>
            <HomeFeed/>
        </div>    

     
  );
};