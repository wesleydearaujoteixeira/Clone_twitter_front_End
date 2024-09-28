import { HomeFeed } from "../homeFeed/HomeFeed"
import { useSearchParams } from "react-router-dom";
import { Input } from "../ui/Input";
import { General_Header } from "../ui/General_Header";



const Search = () => {

    const [searchParams] = useSearchParams();

    const nome = searchParams.get('query') || '';

  return (
    <main>
        <div>
            <General_Header
            href="/layout"
            >
                <div> Voltar </div>
            </General_Header>
        </div>   
       
        <div>
            <Input
                type="search"
                placeholder="Buscar"
                showEyes={false}
                send={true}
                value={nome}
            />
        </div>
        <div className="border-t-2 border-gray-900">
            <HomeFeed/>
        </div>
    </main>
  )
}

export default Search