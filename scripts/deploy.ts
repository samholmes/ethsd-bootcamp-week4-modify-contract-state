import hre, { ethers } from 'hardhat';
import env from '../env'

const { goerliUrl, privateKey } = env

async function main() {

  let artifacts = await hre.artifacts.readArtifact("ModifyVariable");

  const provider = new ethers.providers.JsonRpcProvider(goerliUrl);

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a ModifyVariable Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let modifyVairable = await factory.deploy(10, "Ron Burgundy");

  console.log("ModifyVariable address:", modifyVairable.address);

  await modifyVairable.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })