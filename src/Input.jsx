import React from "react";

function Input({
  label,
  amount,
  currencyoptions,
  onamountchange,
  oncurrencychange,
  selectcurrency,
 myreference,
}) {
  return (
    <div className="flex justify-center items-center mb-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <label className="text-2xl font-bold" htmlFor="form">
            {label}
          </label>
          <input
          ref={myreference}
            className="border solid border-black h-14 w-[400px] rounded-full p-3"
            type="number"
            placeholder="     Amount"
            value={amount}

            onChange={(e) =>
              onamountchange && onamountchange(Number(e.target.value))
            }
          />
        </div>
        <div className="ml-10">
          <p className="text-2xl font-bold mb-3">Currency-Type</p>
          <select
            className="ml-7"
            name=""
            id="from"
            value={selectcurrency}
            onChange={(e) =>
              oncurrencychange && oncurrencychange(e.target.value)
            }
          >
            {currencyoptions.map((currency) => (
              <option value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Input;
