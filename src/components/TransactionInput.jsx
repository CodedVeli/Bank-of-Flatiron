import { useState } from "react";

const TransactionInput = () => {
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [transactions, setTransactions] = useState([]);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = { date, description, category, amount };

        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(transaction)
        });

        const data = await response.json();
        console.log(data);
        setTransactions([...transactions, data]);
    };

    return (
        <div>
            <section className="bottom-2 bg-slate-200 p-9 mx-7 mt-7 rounded-lg">
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-row items-center justify-evenly">
                            <div className="flex flex-row space-x-8">
                                <div className="space-x-4">
                                    <label htmlFor="date">Date:</label>
                                    <input
                                        className="border-2 p-1 rounded-lg"
                                        type="date"
                                        value={date}
                                        onChange={handleDateChange}
                                        id="date"
                                    />
                                </div>
                                <div className="space-x-4">
                                    <label htmlFor="description">Description:</label>
                                    <input
                                        className="border-2 p-1 rounded-lg"
                                        type="text"
                                        value={description}
                                        onChange={handleDescriptionChange}
                                        id="description"
                                    />
                                </div>
                                <div className="space-x-4">
                                    <label htmlFor="category">Category:</label>
                                    <input
                                        className="border-2 p-1 rounded-lg"
                                        type="text"
                                        value={category}
                                        onChange={handleCategoryChange}
                                        id="category"
                                    />
                                </div>
                                <div className="space-x-4">
                                    <label htmlFor="amount">Amount:</label>
                                    <input
                                        className="border-2 p-1 rounded-lg"
                                        type="text"
                                        value={amount}
                                        onChange={handleAmountChange}
                                        id="amount"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-5">
                            <button className="bg-blue-700 border p-1 text-white rounded-lg" type="submit">Add Transaction</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default TransactionInput;
