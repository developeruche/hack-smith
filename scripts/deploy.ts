import { ethers } from "hardhat";

async function main() {
  const CONTRACT_NAME = "Lock";
  const PARAMS: any[] = [];
  const OVER_RIDES = {};


  const lock = await ethers.deployContract(CONTRACT_NAME, PARAMS, OVER_RIDES);
  await lock.waitForDeployment();


  console.log(
    `Contract has been deployed to ${lock.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
