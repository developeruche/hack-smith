import { parseEther } from 'ethers';
import { ethers } from 'hardhat';

const contractAddress = 'CONTRACT_ADDRESS';
const abi = [
    "function withdraw(uint256 _amount) public",
];

const toAddress = "0xcafebabe00000000";
const amount = "100";


const signerFromPK = new ethers.Wallet("PivateKey", ethers.provider);
const signerFromPhrase = ethers.Wallet.fromPhrase("seed_phrase", ethers.provider);


const contract = new ethers.Contract(contractAddress, abi);

const executeTransfer = async () => {
    try {
        const transaction = await contract.transfer(toAddress, parseEther(amount));

        console.log('Transaction hash:', transaction.hash);

        await transaction.wait();

        console.log('Transaction has been confirmed!');
    } catch (error) {
        console.error('Error executing transfer:', error);
    }
};

executeTransfer();
