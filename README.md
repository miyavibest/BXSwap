# BXSwap

This project constructs a decentralized exchange (DEX) by leveraging React, Solidity, Truffle, and Ganache. It showcases the process of developing a straightforward DEX on the Ethereum blockchain, where the frontend is driven by React.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Interacting with the DEX](#interacting-with-the-dex)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Introduction

This endeavor presents a straightforward decentralized exchange (DEX) enabling users to exchange between two tokens, contribute liquidity, and withdraw it. Constructed on the Ethereum blockchain, the DEX utilizes Solidity for crafting smart contracts and relies on React for its frontend development.
## Features

- **Token Swap**: Users can swap between two ERC-20 tokens.
- **Add Liquidity**: Users can provide liquidity to the pool and receive LP tokens.
- **Remove Liquidity**: Users can remove liquidity and redeem their LP tokens.
- **Responsive UI**: A user-friendly interface built with React.

## Project Structure

```plaintext
├── client               # React frontend
│   ├── public           # Public files
│   └── src              # React source code
│       ├── pages        # frontend pages
│       ├── App.js       # Main app component
│       └── index.js     # React entry point
├── contracts            # Solidity smart contracts
├── migrations           # Truffle migrations
├── test                 # Truffle tests
├── truffle-config.js    # Truffle configuration
└── README.md            # Project documentation
```

## Installation

### Prerequisites

- Node.js and npm
- Truffle
- Ganache
- MetaMask (or any Ethereum wallet browser extension)

### Steps

1. **Clone the repository**:

2. **Install dependencies**:

```
npm install
```

3. **Start Ganache**:

```
ganache
```

- Start Ganache and make sure it runs on the default port `8545`.

4. **Compile and deploy the smart contracts then init it**:

```
truffle compile
truffle migrate --reset
truffle exec ./scripts/init_dex.js
```

5. **Copy the buid\contracts TokenA and B and Dex Contract JSON file to src/contracts then copy the addressA and B and Dex to the pages/home inside**
6. **Start the React frontend**:

```
npm start
```

The app will be available at `http://localhost:3000`.

## Running the Project

1. **Ensure Ganache is running** and connected to the correct network.

2. **Run Truffle migrations then init it** to deploy the contracts to your local blockchain:

```
truffle migrate --reset
truffle exec ./scripts/init_dex.js
```

3. **Copy the buid\contracts TokenA and B and Dex Contract JSON file to src/contracts then copy the addressA and B and Dex to the pages/home inside**
4. **Start the React development server**:

```
npm start
```

Open `http://localhost:3000` in your browser to view the app.

## Interacting with the DEX

- **Connect MetaMask**: Ensure MetaMask is connected to the same network as Ganache.
- **Add Liquidity**: Use the interface to add liquidity to the pool.
- **Swap Tokens**: Swap between the available tokens.
- **Remove Liquidity**: Redeem your LP tokens and withdraw your liquidity.

## Troubleshooting

- **Contracts not deploying**: Ensure Ganache is running and Truffle is connected to the correct network.
- **MetaMask issues**: Make sure MetaMask is connected to the Ganache network and the correct account is selected.
- **Frontend not updating**: Check the browser console for errors, and ensure the React app is properly connected to the blockchain.

## License

**This project is licensed under the MIT License - see the LICENSE file for details.**
