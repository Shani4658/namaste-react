const Contact = () =>{
    return(
        <div className="mx-10">
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input className="border border-black p-2 m-2" placeholder="Name" />
                <input className="border border-black p-2 m-2" placeholder="Address" />
                <button className="bg-black text-white hover:bg-slate-400 hover:text-black p-2 m-2 rounded-lg">
                Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;