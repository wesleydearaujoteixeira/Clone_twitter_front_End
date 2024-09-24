
import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';


const SignForm = () => {

    

    const [emailField, setEmailField ] = useState('');
    const [passwordField, setPasswordField] = useState('');
    //const [showPassword, //setShowPassword] = useState(false);

   


    const Submit = () => {
        alert('Entrou');

    }


    return ( 
   
        <>
            <Input  
                type={'text'}
                value={emailField}
                onChange={event => setEmailField(event)}
                placeholder='Digite seu email'
                showEyes={false}
            />


            <Input  
                type={`${'text'}`}
                value={passwordField}
                onChange={event => setPasswordField(event)}
                placeholder='Digite sua senha'
                send={true}

            />


          <div className='flex flex-col gap-4 justify-center'>    
                <Button
                    label='Entrar'
                    size={1}
                    onClick={Submit}
                />            
          </div>
         </>
    )
}

export default SignForm;