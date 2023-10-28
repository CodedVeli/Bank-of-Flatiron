/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term); // Pass the 'term' to the onSearchSubmit function
    };

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="border-2 w-10/12 flex items-center justify-between text-center mt-6 mx-auto">
                    <input
                        className=""
                        placeholder="Enter Search"
                        value={term}
                        onChange={handleChange}
                    />
                    <button
                        className="text-slate-100 bg-blue-600 hover:bg-blue-700 p-2 rounded-sm"
                        type="submit"
                    >
                        <AiOutlineSearch />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
