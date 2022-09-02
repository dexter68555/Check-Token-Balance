const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/b8362868f4464226b4f84c38c9ae8752'));

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

const tokenContract = "0x6b175474e89094c44da98b954eedeac495271d0f";
const walletAddress = ["0xf326e4de8f66a0bdc0970b79e0924e33c79f1915"];

const contract = new web3.eth.Contract(balanceOfABI, tokenContract)



async function getTokenBalance() {
	
	for(var i = 0; i < walletAddress.length;i++){
		let result = await contract.methods.balanceOf(walletAddress[i]).call();

		console.log(result)
	
	}
}

getTokenBalance();

