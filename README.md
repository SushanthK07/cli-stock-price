# CLI Stock Price

A command-line interface (CLI) tool to get live stock prices of valid company symbols listed on major exchanges across the world.

## Installation

To use this tool, you need to have Node.js installed on your system. You can install the CLI Stock Price tool globally using npm:

```bash
npm install -g cli-stock-price
```

## Usage

Once installed, to get RELIANCE stock price for example:

```bash
stocklive RELIANCE.BSE
```

## Features

- Get live stock prices of companies listed on all major exchanges across the world.
- Simple and easy-to-use CLI interface.
- No need to visit a website or use a separate application to check stock prices.

## Note

- Make sure to provide a **valid company symbol** to make this command work.
- The symbol can be case insensitive, so it doesn't matter if you enter it in uppercase or lowercase.
- This tool uses the `AlphaVantage API` to fetch live stock prices.
