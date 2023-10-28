import { useState } from "react";

const SearchBar = () => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>

            <div>
                <input placeholder=" Enter Search" />
                </div>          
             
          </form>
        </div>
    );
};

export default SearchBar;