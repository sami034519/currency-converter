import './script';

import { useRef, useState } from "react";
import useFetchdata from "./Currencyinfo";
import Input from "./Input";
function App() {
 
  const [amount, setamount] = useState();
  const [from, setfrom] = useState("usd");
const refrence=useRef();
  const [to, setto] = useState("pkr");
  const [convertedvalue, setconvertedvalue] = useState();
  const currencyinfo = useFetchdata(from);
  const options = currencyinfo ? Object.keys(currencyinfo) : [];
  function finalanswer() {
    const toconvert = currencyinfo[to];
    const converted = toconvert * amount;
    setconvertedvalue(converted);
  }
  function swap() {
    setconvertedvalue(amount);
    setamount(convertedvalue);
    setto(from);
    setfrom(to);
  }
  function copy(){
    window.navigator.clipboard.writeText(convertedvalue);
    refrence.current?.select();
  }
  return (
    <div className="flex justify-center h-screen items-center">
      <div className=" bg-orange-600 w-[60%] p-10 rounded-3xl">
        <Input
          label="From"
          currencyoptions={options}
          onamountchange={setamount}
          oncurrencychange={setfrom}
          selectcurrency={from}
          amount={amount}
        />
        <div className="flex justify-center ">
          <button
            className="bg-orange-700 p-5 px-10 absolute  left-[32%] bottom-[32%] rounded-full text-xl font-medium border-solid border-2 border-white text-white"
            onClick={() => {swap()}}
            
          >
            Swap
          </button>
          <button
            className="bg-orange-700 p-5 px-10 absolute  right-[32%] bottom-[32%] rounded-full text-xl font-medium border-solid border-2 border-white text-white"
            onClick={() => copy()}
          >
            Copy
          </button>
        </div>
        <Input
          label="To"
          oncurrencychange={setto}
          selectcurrency={to}
          currencyoptions={options}
          amount={convertedvalue}
          myreference={refrence}
        />
        <div className="flex  justify-center">
          <button
            className="bg-orange-700 text-white p-5 px-16 rounded-full text-xl font-medium border-solid border-2 border-white"
            onClick={() => finalanswer()}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          
        </div>
         
      </div>
       <div className='absolute top-[70%] bg-green-900 text-white px-32 py-3 rounded-3xl hidden'><p id="message" >message slected</p></div>
    </div>
  );
}

export default App;
