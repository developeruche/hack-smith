import { ethers } from 'hardhat';

const providerUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY';

const mnemonic = 'YOUR_MNEMONIC';

const wallet = new ethers.Wallet(mnemonic);

const signer = ethers.Wallet.fromPhrase(mnemonic, ethers.provider);

const recipientAddress = 'RECIPIENT_ADDRESS';
const amountInEth = 'AMOUNT_IN_ETH'; 

const executeTransfer = async () => {
    try {
        // Send ETH
        const transaction = await wallet.sendTransaction({
            to: recipientAddress,
            value: amountInEth,
        });

        console.log('Transaction hash:', transaction.hash);

        await transaction.wait();

        console.log('Transaction has been confirmed!');
    } catch (error) {
        console.error('Error executing transfer:', error);
    }
};

executeTransfer();
