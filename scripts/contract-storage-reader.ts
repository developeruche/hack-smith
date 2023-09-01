import { Address } from "cluster";
import { AddressLike, BigNumberish } from "ethers";
import {ethers} from "hardhat";



export async function readSmartContractStorage(contract_address: string | AddressLike, slot: BigNumberish) {
    return ethers.provider.getStorage(contract_address, slot);
}