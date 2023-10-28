/* eslint-disable react/prop-types */

const TransactionList = ({transactions, searchResult}) => {

    const renderedSearch= searchResult.forEach(element => {

        return (
            <div key={element.id}>
                
                
               <table className=" flex flex-row  items-center justify-between gap-6 mx-9 border-x-2 p-2 border-y-2">                
               <td>{element.date}</td>
                <td>{element.description}</td>
                <td >{element.category}</td>
                <td>{element.amount}</td>
               </table>
            </div>
        )
        
    });
   
    const renderedList =   transactions.map((transaction) => {
        return (
            <div key={transaction.id}>
                
                
               <table className=" flex flex-row  items-center justify-between gap-6 mx-9 border-x-2 p-2 border-y-2">                
               <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td >{transaction.category}</td>
                <td>{transaction.amount}</td>
               </table>
            </div>
        )
    })
    return (
        <div className=" mt-7">
            <table className=" flex flex-row  items-center justify-between gap-6 mx-9 text-2xl font-bold mb-4 ">
                    <td>Date</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Amount</td>
                </table>
            {    renderedList || renderedSearch }
           
        </div>
    );
};

export default TransactionList;