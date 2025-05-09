
const TokenA = artifacts.require("TokenA");
const TokenB = artifacts.require("TokenB");
const LPToken = artifacts.require("LPToken");
const Dex = artifacts.require("Dex");

module.exports = async function (deployer) {
  const initialSupply = 1000000;
  await deployer.deploy(LPToken);
  const lpToken = await LPToken.deployed();
  await deployer.deploy(TokenA, initialSupply);
  const tokenA = await TokenA.deployed();
  await deployer.deploy(TokenB, initialSupply);
  const tokenB = await TokenB.deployed();
  await deployer.deploy(Dex, tokenA.address, tokenB.address, lpToken.address);
  const dex = await Dex.deployed();
  await lpToken.setAdmin(dex.address);
};
