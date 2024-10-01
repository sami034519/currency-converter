import { useEffect, useState } from "react";

function useFetchdata(currency) {
  const [finaldata, setfinaldata] = useState();

  useEffect(() => {
    const response = async () => {
      const fresponse = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
      );
      const data = await fresponse.json();
      setfinaldata(data[currency]);
    };
    response();
  }, [currency]);

  return finaldata;
}

export default useFetchdata;
