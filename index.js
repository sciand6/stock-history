const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const yahooFinance = require("yahoo-finance2").default;

app.use(express.json());
app.use(express.static(__dirname + "/views/"));

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

// const queryOptions = { period1: "2021-02-01", period2: "2021-02-10" };
app.post("/historical", (req, res) => {
  let { symbols } = req.body;
  symbols = symbols.split(",");
  const { period1, period2 } = req.body;
  const queryOptions = {
    period1,
    period2,
  };

  const data = Promise.all(
    symbols.map((symbol) => yahooFinance.historical(symbol, queryOptions))
  );

  data
    .then((stocks) => {
      return res.status(200).json({ stocks });
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ msg: "Couldn't get the historical data for those stocks." });
    });
});

app.get("*", function (req, res) {
  res.status(404).send("<h1>404 Not Found.</h1>");
});

app.listen(port, () => console.log("Server started on port " + port));
