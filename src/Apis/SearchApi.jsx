const SearchTerm = async (term, setSearchResult) => {
    try {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(`http://localhost:3000/transactions?q=${term}`, requestOptions);
        const result = await response.json(); 
        console.log("result", result); 

        setSearchResult(result.transactions || []);

        return result.transactions || [];
    } catch (error) {
        console.error("Error in API call: ", error);
        return [];
    }
};

export default SearchTerm;
