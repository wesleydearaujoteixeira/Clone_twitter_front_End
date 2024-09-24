import { ReactNode } from "react";


type Props = {
    children: ReactNode;
}


export const Layout = ({children}: Props) => {


    return (
        <main className="min-h-screen flex justify-center mx-auto max-w-7xl ">
            <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-b-gray-900">  
                Esquerda
            </section>
            <section className="flex-1 max-w-lg"> {children} </section>
            <aside className="hidden lg:flex gap-6 flex-col sticky top-0 h-fit w-96 px-8 py-6 border-1-2 border-gray-900"> 
                direita
            </aside>
        </main>
    )
}