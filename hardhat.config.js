/* global ethers task */
require('@nomiclabs/hardhat-waffle')
/* hardhat-foundry */
require("@nomicfoundation/hardhat-foundry");
require("@nomicfoundation/hardhat-ignition");
require("hardhat-diamond-abi");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.26',
  diamondAbi: {
    // (required) The name of your Diamond ABI
    name: "HostITDiamond",
    include: ["Facet"],
    strict: false,
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
}
