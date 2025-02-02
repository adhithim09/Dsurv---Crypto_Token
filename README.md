# Dsurv-Crypto_Token
DSurv is a decentralized finance (DeFi) platform inspired by Curve Finance, designed for efficient token exchanges. The project includes an initial setup of React that interacts with a blockchain backend using Motoko, leveraging the power of the Internet Computer (IC) for secure and scalable smart contract execution.

## Tech Stack
- Frontend: React, JavaScript, Tailwind CSS
- Backend: Motoko (Smart Contracts on Internet Computer)
- Blockchain Integration:  DFINITY SDK, Web3.js, Ethers.js

## Installation & Setup
### Prerequisites
Ensure you have the following installed on your system:

- WSL: Windows Subsystem for Linux (Ubuntu) to run Linux commands.
- Tools: VSCode with Motoko & Remote WSL extensions, Homebrew for package management.
- Node.js & npm 
- DFX SDK (for deploying Motoko smart contracts) 
- Internet Identity (for authentication on IC)

### Steps to Run Locally
1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/DSurv.git
   cd DSurv

2. **Install dependencies**  
   ```bash
   npm install

2. **Start the Internet Computer Local Replica**  
   ```bash
   dfx start --background

2. **Deploy the smart contracts (Motoko backend)**  
   ```bash
   dfx deploy    
2. **Start the React frontend**  
   ```bash
   npm start

2. **Open in Browser**  
   Visit localhost in your browser.

2. **Connect Wallet**  
   VUse Internet Identity .

 <br>    
