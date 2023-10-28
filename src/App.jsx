import { useState, useCallback, useEffect } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import FetchTransactions from "./Apis/FetchTransactions"
import SearchTerm from "./Apis/SearchApi"
import TransactionInput from "./components/TransactionInput"
import TransactionList from "./components/TransactionList"

function App() {

  const [transactions, setTransactions] = useState([])
  const [searchResult, setSearchResult] = useState([])
  
  const fetchTransactions = useCallback(async () => {
    const response = await FetchTransactions()
    setTransactions(response)
    console.log(response)
  }, []);

  useEffect(() => {
    fetchTransactions()
  }
  , [fetchTransactions])

  const onSearchSubmit = async (term) => {
    const response = await SearchTerm(term, setSearchResult)
    console.log("search",response)
  }



  return (
    <>
      <Header />      
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <TransactionInput />
      <TransactionList  searchResult={searchResult}  transactions={transactions} />
    </>
  )
}

export default App
