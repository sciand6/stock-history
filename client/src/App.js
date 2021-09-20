import { useState } from "react";
import ClosingPriceList from "./ClosingPrices/ClosingPriceList";
import "./App.css";

function App() {
  const [symbols, setsymbols] = useState("");
  const [currentsymbols, setcurrentsymbols] = useState("");
  const [period1, setperiod1] = useState(
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
  );
  const [period2, setperiod2] = useState(new Date());
  const [stocks, setstocks] = useState([]);
  const [error, seterror] = useState("");

  function getHistoricalData() {
    if (!symbols) {
      seterror("ERROR: Please enter the ticker symbol(s).");
      return;
    }
    if (new Date(period1).getTime() > new Date(period2).getTime()) {
      seterror("ERROR: Please enter a valid time range.");
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        symbols,
        period1,
        period2,
      }),
    };
    fetch(`/historical`, requestOptions).then((res) => {
      if (res.status !== 400) {
        res.json().then((data) => {
          setstocks(data.stocks);
          setcurrentsymbols(symbols);
          seterror("");
        });
      } else {
        seterror("ERROR: Please enter a valid ticker list.");
      }
    });
  }

  return (
    <div className="App">
      <h1>Historical Stock Data</h1>
      {error ? <div className="Error">{error}</div> : ""}

      <label htmlFor="ticker">Tickers</label>
      <input
        className="TextInput"
        onChange={(e) => setsymbols(e.target.value)}
        type="text"
        id="ticker"
      ></input>
      <p>Examples of valid input: AAPL or AAPL,GOOGL,AMZN</p>
      <div className="Dates">
        <label htmlFor="period1">From</label>
        <br />
        <input
          className="DateInput"
          onChange={(e) => setperiod1(e.target.value)}
          type="date"
          id="period1"
        ></input>
        <br />
        <label htmlFor="period2">To</label>
        <br />
        <input
          className="DateInput"
          onChange={(e) => setperiod2(e.target.value)}
          type="date"
          id="period2"
        ></input>
      </div>
      <input
        onClick={() => getHistoricalData()}
        type="button"
        value="SUBMIT"
        className="Submit"
      ></input>
      <ClosingPriceList symbols={currentsymbols.split(",")} stocks={stocks} />
    </div>
  );
}

export default App;
