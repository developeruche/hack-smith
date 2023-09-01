import { ethers } from 'ethers';

const providerUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY';
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

const mnemonic = 'YOUR_MNEMONIC';

// You can derive a wallet from a specific index from the mnemonic. The default is index 0.
const walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic).connect(provider);

// Contract details
const contractAddress = 'CONTRACT_ADDRESS';
const abi = [];

// Create a contract instance
const myContract = new ethers.Contract(contractAddress, abi, provider).connect(walletMnemonic);

const executeTransfer = async () => {
    try {
        const tx = await myContract.YOUR_METHOD_NAME(/* Parameters if any */, {
            value: ethers.utils.parseEther('AMOUNT_IN_ETH'),
            gasLimit: 200000 // This is just an example. Ideally, you'd estimate the gas.
        });

        console.log('Transaction hash:', tx.hash);

        await tx.wait();

        console.log('Transaction has been confirmed!');
    } catch (error) {
        console.error('Error executing transfer:', error);
    }
};

executeTransfer();
