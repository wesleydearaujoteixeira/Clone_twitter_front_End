import { ReactNode } from "react";
import { Logo } from "../ui/Logo";
import Item_menu from "../nav/Item-menu";
import ItemLow from "../nav/ItemLow";
import { user }from "../../auth/data/data.ts";
import { NavProfile } from "../NavProfile/NavProfile";
import SearchInput from "../ui/SearchInput.tsx";
import TrendingArea from "../ui/trendingArea.tsx";
import WhoFollow from "../ui/WhoFollow.tsx";

type Props = {
    childre: ReactNode;
}


export const Layout = ({children}: Props) => {



    return (
        <main className="min-h-screen flex justify-center mx-auto max-w-7xl ">
            <section className="flex lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-b-gray-900">                  
                <div className="flex-1 mt-6 ">
                    <Logo/>
                    <nav className="mt-11">
                        <Item_menu
                            label="home"
                            href="/home"
                            iconHome={true}
                        />

                        <Item_menu
                            label="perfil"
                            href="/perfil"
                            iconPerfil={true}
                        />
                    </nav>
                </div>

                <div className="mb-4">
                    <ItemLow/>
                    
                    <NavProfile 

                        img={`${user.avatar}`}
                        username={`${user.name}`}
                        slug={`${user.slug}`}
                        size={20}

                    />

                </div>

            </section>
            <section className="flex-1 max-w-lg"> {children} </section>
            <aside className="hidden lg:flex gap-6 flex-col sticky top-0 h-fit w-96 px-8 py-6 border-1-2 border-gray-900"> 
                <SearchInput/>
                <TrendingArea/>
                <WhoFollow/>
            </aside>
        </main>
    )
}