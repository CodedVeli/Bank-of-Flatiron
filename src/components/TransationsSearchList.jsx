
const TransactionSearchList = ({searchResult}) => {

    const renderedSearch= searchResult.map((transaction) => {
        return (
            <div key={transaction.id}>
                <h3>{transaction.description}</h3>
                <p>{transaction.category}</p>
                <p>{transaction.amount}</p>
            </div>
        )
    })
    return (
        <div>
{renderedSearch}        </div>
    );
};

export default TransactionSearchList;