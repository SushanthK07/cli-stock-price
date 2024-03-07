#!/usr/bin/env node

const { program } = require("commander");
const axios = require("axios");

const API_KEY = "A7MPKFQY8QL7QGVP";

program
  .version("1.0.0")
  .description("CLI tool to get live stock prices from exchanges")
  .option("-d, --debug", "console log everything for debugging")
  .arguments("<company>")
  .action((company) => {
    getStockPrice(company.toUpperCase());
  });

program.parse(process.argv);

const options = program.opts();
const args = program.args;

if (options.debug) {
  console.log({ options, args });
}

if (args.length === 0) {
  program.help();
}

async function getStockPrice(company) {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?${new URLSearchParams([
        ["function", "TIME_SERIES_DAILY"],
        ["symbol", company],
        ["outputsize", "compact"],
        ["apikey", API_KEY],
      ])}`
    );

    const data = response.data;
    const date = data["Meta Data"]["3. Last Refreshed"];
    const stockPrice = data["Time Series (Daily)"][date]["4. close"];

    console.log(`Live stock price of ${company}: ${stockPrice}`);
  } catch (error) {
    console.error("Error fetching stock price:", error.message);
  }
}
