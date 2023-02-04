# Week 4 – Side-Quest #1 Project

This project demonstrates Hardhat project structure with a contract that has a
state variable and a function to modify it. It includes a a quick test to 
make sure the function modifies the state variable as expected.

```shell
# After cloning the repo, setup with:
npm i

# Run test with:
npx hardhat test
```

## Deployment

Setup env file for deployment by first creating the config file:

```shell
# Setup env config file
npx configure env.ts
```

This will create a `.env.json` file. Edit this file and add the needed config
options. Once done, deploy using:

```shell
npx hardhat run scripts/deploy.ts
```

This will deploy a new smart contract to the Goerli network.

_This contract has been deployed to Goerli already at [0xB7d7D64AF29164A5b1Aeb882EAD0Ba585f829627](https://goerli.etherscan.io/address/0xb7d7d64af29164a5b1aeb882ead0ba585f829627)_
