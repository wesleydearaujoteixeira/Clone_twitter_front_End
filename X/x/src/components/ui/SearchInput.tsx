import { useState } from "react"
import { Input } from "./Input"
import { useNavigate } from "react-router-dom";

type PropsType = {
    defaultValue?: string;
}

function SearchInput({defaultValue}: PropsType ) {


    const [searchInput, setSetSearchInput] = useState(defaultValue ? defaultValue : "");
    const navigation = useNavigate();


    const handleSearchEnter = () => {
        
        if(searchInput) {
            navigation(`/search?query=${searchInput}`);
            setSetSearchInput("");
        }

    }

  return (
    
    <Input
       type="search"
       placeholder="Buscar"
       showEyes={false}
       send={true}
       value={searchInput}
       onChange={t => setSetSearchInput(t)}
       onEnter={handleSearchEnter}
    />

  )
}

export default SearchInput