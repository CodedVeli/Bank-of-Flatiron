
const TransactionInput = () => {
    return (
        <div>
           <section className=" bottom-2 bg-slate-200 p-8 mx-7 mt-7 rounded-lg" >
            <div className=" flex flex-row items-center justify-evenly">
                <form className=" flex flex-row space-x-8">
                    <div className=" space-x-4">
                        <label htmlFor="date">Date:</label>
                        <input className=" border-2 p-1 rounded-lg" type="date" id="date" />
                    </div>
                     <div className=" space-x-4">
                          <label htmlFor="description">Description:</label>
                          <input className=" border-2 p-1 rounded-lg" type="text" id="description" />
                     </div>
                     <div className=" space-x-4">
                          <label htmlFor="category">Category:</label>
                          <input className=" border-2 p-1 rounded-lg" type="text" id="category" />
                     </div>
                     <div className=" space-x-4">
                          <label htmlFor="amount">Amount:</label>
                          <input className=" border-2 p-1 rounded-lg" type="text" id="amount" />
                     </div>
                    
                </form>
                </div>
                <div className=" flex items-center justify-center mt-5">
                          <button className=" bg-blue-700 border p-1 text-white rounded-lg" type="submit">Add Transaction</button>
                     </div>
           </section>
        </div>
    );
};

export default TransactionInput;