import { ethers } from "hardhat";

async function main() {
  const selfDestruct = await ethers.deployContract("Destroy");
  await selfDestruct.waitForDeployment();


  console.log(
    `Self Destruct Contract has been deployed to ${selfDestruct.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
