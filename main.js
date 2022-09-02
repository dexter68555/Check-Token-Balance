const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/<YOUR_PROJECT_ID>'));

const balanceOfABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
];

//this is DAI token contract
//Please change it to the preferred token address
const tokenContract = "0x6b175474e89094c44da98b954eedeac495271d0f";

//This is wallet address
//Please change to the preferred wallet address
const walletAddress = ["0xf326e4de8f66a0bdc0970b79e0924e33c79f1915"];

const contract = new web3.eth.Contract(balanceOfABI, tokenContract)

//This is the getTokenBalance function that will get the token balance of a wallet
async function getTokenBalance() {
	
	for(var i = 0; i < walletAddress.length;i++){
		let result = await contract.methods.balanceOf(walletAddress[i]).call();

		console.log(result)
	
	}
}

getTokenBalance();

