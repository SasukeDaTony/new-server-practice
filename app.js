const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello New Server Practice!");
});

app.get("/name", (req, res) => {
  res.send("Anthony Mccoy Taylor Chavez");
});

app.get("/add/:num1/:num2", (req, res) => {
  // determine the sum of num1 + num1
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.get("/repeat-name/:name/:times", (req, res) => {
  // return repeated name n times
  const name = req.params.name;
  const times = parseInt(req.params.times);
  const repeatedNames = name.repeat(times);

  //   let repeatedNames = "";
  //   for (let i = 0; i < times; i++) {
  //     repeatedNames += name;
  //   }
  res.send(` ${repeatedNames}`);
});

app.get("/is-divisible-by-3/:num", (req, res) => {
  // return boolean
  const num = parseInt(req.params.num);
  const isDivisibleBy3 = num % 3 === 0;
  res.send(
    `The number ${num} ${isDivisibleBy3 ? `is` : "is not"} divisible by 3!`
  );
});

app.get("/find-largest-remainder/:num1/:num2", (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  function remainder(a, b) {
    return a > b ? a % b : b % a;
  }

  const result = remainder(num1, num2);

  res.send(
    `The remainder of ${num1 > num2 ? num1 : num2} divided by ${
      num1 > num2 ? num2 : num1
    } is ${result}.`
  );
});

app.get("/halving-sum-algorithm/:num", (req, res) => {
  const num = parseInt(req.params.num);

  function halvingSum(n) {
    let sum = 0;
    while (n > 0) {
      sum += n;
      n = Math.floor(n / 2);
    }
    return sum;
  }

  const result = halvingSum(num);

  res.send(
    `The result of taking the sum of exponential halves for the number ${num} is ${result} using the halvingSum algorithm.`
  );
});

module.exports = app;
