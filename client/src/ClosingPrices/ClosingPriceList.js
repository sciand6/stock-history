import React from "react";
import "./ClosingPriceList.css";

function ClosingPriceList({ symbols, stocks }) {
  return (
    <div>
      {stocks.map((stockArray, index) => {
        return (
          <div className="Row">
            <h2>{symbols[index]}</h2>
            {stockArray.map((stock) => {
              return (
                <div className="RowItem">
                  <div className="Closing" key={stock.date}>
                    <div className="Column">
                      {stock.date.substring(0, stock.date.indexOf("T"))}
                    </div>
                    <div className="Column">
                      <strong className="Column">Close</strong>
                      <span className="Column">{stock.close}</span>
                    </div>
                    <div className="Column">
                      <strong className="Column">High</strong>
                      <span className="Column">{stock.high}</span>
                    </div>
                    <div className="Column">
                      <strong className="Column">Low</strong>
                      <span className="Column">{stock.low}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ClosingPriceList;
