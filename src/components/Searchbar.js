import React, {useState} from "react";

const SearchBar = () => {
    const [search, setSearch] = useState("ditto") 

    const onChabgeHandler = (e) => {
        search = e.target.value
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChabgeHandler}/>
                {search}
            </div>
        </div>
    )
}


export default SearchBar ;