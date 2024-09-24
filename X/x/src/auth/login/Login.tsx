
//import { Logo } from "@/app/components/ui/logo";
//import Link from "next/link";

import { Link } from 'react-router-dom';
import SignForm from '../../components/(auth)/SignForm';
import { Logo } from '../../components/ui/Logo';

const Login = () => {
    return (
        <main className="max-w-lg mx-auto mt-12 px-6">
            <Logo size={'20'}/>
            <h1 className="mt-10 text-2xl"> Entre na sua conta </h1>

            <section className="mt-10 mb-14 flex flex-col gap-6">
                <SignForm/>

            </section>

            <section className="flex flex-col justify-center items-center gap-1 md:flex-row gap-5">
                <div className="text-gray-200">
                    Ainda não tem uma conta?
                </div>
                <Link to="/register" className="hover:underline"> Cadastre-se </Link>
            </section>



        </main>
    )
}

export default Login;