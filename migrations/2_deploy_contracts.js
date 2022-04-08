const Token = artifacts.require("Token");
const Swap = artifacts.require("Swap");

module.exports = async function (deployer) {
  // Deploy Token Cayden
  await deployer.deploy(Token);
  const token = await Token.deployed()

  // Deploy EthSwap
  await deployer.deploy(Swap, token.address);
  const swap = await Swap.deployed()

  // Transfer all tokens to EthSwap (1 million)
  await token.transfer(swap.address, '100000000000000')
};
