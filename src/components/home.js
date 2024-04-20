import React, {useState} from "react";
import "./home.css";


function Home(){

    const selectElement = document.getElementById("mySelect");
    console.log(selectElement)

    const [fromC, setfromC] = useState("");
    const [toC, settoC] = useState("");
  
    const toCurrency = () => {
      const ans = parseInt(fromC) * 83.37;
      settoC(ans);
    };

    const clearValues = () => {
      setfromC("");
      settoC("");
    };


return(
        <div className="text-white">

            <div className="flex flex-col h-svh justify-center items-center">
                <p className="font-mono text-5xl font-semibold">Currency Converter</p>
               
                <form className="border-2 bg-grey-400 px-24 py-10 m-6 white-black">

                    <div className="">
                        <select name="currency" id="currencyFrom">
                            {/* <option value="USD">USD</option> */}
                            <option value="INR">INR</option>
                            {/* <option value="CAD">CAD</option>  */}
                        </select>
                        <input id="userdata" className="border-2 white-black m-3 p-1 text-center" value={fromC} onChange={(e) => setfromC(e.target.value)}></input>                        

                    </div>

                    <div className="">
                        <select name="currency" id="currencyTo">
                            <option value="USD">USD</option>
                            {/* <option value="INR">INR</option> */}
                            {/* <option value="CAD">CAD</option> */}
                        </select>
                        <input className="border-2 border-white m-3 p-1 text-center" value={toC}></input>                        

                    </div>
 
                </form>

                <div className="m-4">
                    <button onClick={toCurrency} className="text-white font-bold  white-black mx-1 bg-blue-500 p-1 px-3 rounded-md">Convert</button>
                    <button onClick={clearValues} className="text-white font-bold wite-black mx-1 bg-red-500 p-1 px-3 rounded-md">Clear</button>
                </div>

            </div>

        </div>
    )
}

export default Home;