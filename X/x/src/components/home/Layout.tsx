import { Logo } from "../ui/Logo";
import Item_menu from "../nav/Item-menu";
import ItemLow from "../nav/ItemLow";
import { user }from "../../auth/data/data.ts";
import { NavProfile } from "../NavProfile/NavProfile";
import TrendingArea from "../ui/TrendingArea.tsx"
import WhoFollow from "../ui/WhoFollow.tsx";
import { Home } from "./Home.tsx";

export const Layout = () => {

    return (
        <main className="min-h-screen flex justify-center mx-auto max-w-7xl ">
            <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-b-gray-900">                  
                <div className="flex-1 mt-6 ">
                    <Logo/>
                    <nav className="mt-11">
                        <Item_menu
                            label="home"
                            href="/layout"
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
            <section className="flex-1 max-w-lg"> 
                <Home/>    
            </section>
            <aside className="hidden lg:flex gap-6 flex-col sticky top-0 h-fit w-96 px-8 py-6 border-1-2 border-gray-900"> 
                <TrendingArea/>
                <WhoFollow/>
            </aside>
        </main>
    )
}