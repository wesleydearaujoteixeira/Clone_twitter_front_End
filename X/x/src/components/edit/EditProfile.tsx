import { General_Header } from '../ui/General_Header';
import { user } from '../../auth/data/data';
import { FaCamera } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import TextArea from '../ui/TextArea';
import { useState } from 'react';




export const EditProfile = () => {


    const [textBio, setTextBio] = useState(user.bio);
    const [name, setName] = useState(user.name);
    const [link, setLink] = useState(user.link);




  return (
        <div>

        <General_Header href='/layout'>
                <div className='font-bold text-lg '> Editar Perfil </div>
        </General_Header>

            <section className='border-b-2 border-gray-900'>
                <div className= 'bg-gray-500 py-4 flex justify-center items-center gap-4 bg-no-repeat bg-cover bg-center h-96'
                style={{backgroundImage: `url(${user?.cover})`}}
                > 
                
                    <div className='cursor-pointer ml-4 bg-black/80 flex justify-center items-center size-12 rounded-full'>
                        <FaCamera size={32} className='text-white text-4xl'/>
                    </div>

                    <div className='cursor-pointer ml-4 bg-black/80 flex justify-center items-center size-12 rounded-full'>
                        <FaXmark size={32} className='text-white text-4xl'/>
                    </div>


                </div>

                <div className=' -mt-12 px-6'>
                    <img 
                        src={user.avatar} 
                        alt={user.name}
                        className='w-32 rounded-full ' 
                    />

                    <div className='size-24 -mt-24 flex justify-center items-center  '>
                        <div className='cursor-pointer ml-4 bg-black/80 flex justify-center items-center size-12 rounded-full'>
                            <FaCamera size={32} className='text-white text-4xl'/>
                        </div>
                    </div>
               
                </div>
            </section>

            <section className='p-6 flex flex-col gap-4 '>

                <label>
                    <p className='text-lg text-gray-500 mb-2'> Nome </p>
                </label>

                <Input
                   type="text"
                   placeholder='Digite seu nome'
                   value={name}
                   onChange={e => setName(e)}
                   
                />

                <label>
                    <p className='text-lg text-gray-500 mb-2'> Link </p>
                </label>

                <Input
                   type="text"
                   placeholder='Digite sua bio'
                   value={link}
                   onChange={e => setLink(e)}

                   
                />

                <TextArea
                    placeholder='Descreva você mesmo'
                    value={textBio}
                    rows={3}
                    cols={4}
                    onChange={t => setTextBio(t)}
                
                />


                <Button
                    label='Salvar Alterações'
                    size={1}
                />

            </section>
        </div>    

     
  );
};