import { BigNumberish } from "ethers";
import {ethers} from "hardhat";



export async function readSmartContractStorage(contract_address: string, slot: BigNumberish) {
    return ethers.provider.getStorage(contract_address, slot);
}