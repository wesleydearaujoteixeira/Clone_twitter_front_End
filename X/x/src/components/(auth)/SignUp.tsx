
import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';


const SignUp = () => {

    const [emailField, setEmailField ] = useState('');
    const [name, setName] = useState('');
    const [passwordField, setPasswordField] = useState('');
   // const [showPassword, setShowPassword] = useState(false);

   


    const Submit = () => {
        alert('Entrou');

    }


    return ( 
   
        <>

            <Input  
                type={'text'}
                value={name}
                onChange={event => setName(event)}
                placeholder='Crie seu nome'
                showEyes={false}
            />

            <Input  
                type={'text'}
                value={emailField}
                onChange={event => setEmailField(event)}
                placeholder='Crie seu email'
                showEyes={false}
            />


            <Input  
                type={`${'text'}`}
                value={passwordField}
                onChange={event => setPasswordField(event)}
                placeholder='Crie sua senha'
                send={true}

            />

          <div className='flex flex-col gap-4 justify-center'>    

                <Button
                    label='Registre-se'
                    size={1}
                    onClick={Submit}
                />


            
          </div>
         </>
    )
}

export default SignUp;