
const FetchTransactions = async () => {

    const response = await fetch('http://localhost:3000/transactions');

    return await response.json();
};

export default FetchTransactions;