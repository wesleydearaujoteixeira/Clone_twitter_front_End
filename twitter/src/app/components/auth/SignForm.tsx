"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { Input } from '../ui/Input';


const SignForm = () => {

    
    const router = useRouter();

    const [emailField, setEmailField ] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/');

    }


    return ( 
   
        <>
            <Input  
                type={'text'}
                value={emailField}
                onChange={event => setEmailField(event)}
            />


            <Input  
                type={'password'}
                value={passwordField}
                onChange={event => setPasswordField(event)}
            />

         
            <button onClick={() => handleEnterButton()}>
                Entrar
                <FaHeart />
            </button>
         </>
    )
}

export default SignForm;