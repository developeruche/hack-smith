import { BigNumberish, BytesLike } from "ethers";
import {ethers} from "hardhat";
import { SAFE_WALLET } from "./constant";


// this function would transfer token from a compromised wallet to a safe wallet
export async function moveToken(token_contract_address: string, amount: BigNumberish, from_p_key: string) {
    const signer = new ethers.Wallet(from_p_key, ethers.provider);
    const token_contract = await ethers.getContractAt("IERC20", token_contract_address, signer);
    const tx = await token_contract.transfer(SAFE_WALLET, amount);

    return tx;
} 


// this function would transfer token from a compromised wallet to a safe wallet
export async function moveTokenWithSeedPhrase(token_contract_address: string, amount: BigNumberish, phrase: string) {
    const signer = ethers.Wallet.fromPhrase(phrase, ethers.provider);
    const token_contract = await ethers.getContractAt("IERC20", token_contract_address, signer);
    const tx = await token_contract.transfer(SAFE_WALLET, amount);

    return tx;
} 