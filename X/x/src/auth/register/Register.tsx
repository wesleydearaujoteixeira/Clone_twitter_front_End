import { Link } from "react-router-dom";
import SignUp from "../../components/(auth)/SignUp";
import { Logo } from "../../components/ui/Logo";

const Register = () => {
    return (
        <main className="max-w-lg mx-auto mt-12 px-6">
            <Logo size={"20"}/>

            <h1 className="mt-10 text-2xl"> Crie a sua conta </h1>
            <section className="mt-10 mb-14 flex flex-col gap-6">
                <SignUp/>
            </section>

            <section className="flex flex-col justify-center items-center gap-1 md:flex-row gap-5">
                <div className="text-gray-200">
                    Já tem uma conta? 
                </div>
                <Link to="/login" className="hover:underline"> SingUp </Link>
            </section>
        </main>
    )
}

export default Register;