import { AppConfig } from "./AppConfig";
const titleList = [
  "Flutter Developer",
  2000,
  "Software Engineer",
  2000,
  "Blockchain Developer",
  2000,
  "Freelancer",
  2000,
];
const cwfateDemoLink = "https://cwfate-cwf96991.vercel.app/";
const goupstairDemoLink = "https://go-up-stair.vercel.app/";
const workList = [
  {
    image: "/assets/goupstair.svg",
    title: "Go Up Stair - NFT Project",
    labels: ["NFT", "Web3", "Mint", "Solidity", "NextJS"],
    desc: "Minting your first NFT in Go Up Stair. Integrating buy and sell flow with OpenSea.\nSupport features:\n- Blind Box\n- Mint NFT with other ERC20 token e.g.USDT\n- Minting exclusive (whitelisting)\n- Support multiple wallet gateways and multiple chain \ne.g.Metamask, WalletConnect, BSC, Eth and Solana",
    previewLink: goupstairDemoLink,
  },
  {
    image: "/icon.svg",
    title: "CWFate - All in One",
    labels: [
      "Web3",
      "Cross Chain",
      "Crypto <-> Fiat",
      "Solidity",
      "NFT",
      "NextJS",
    ],
    desc: "Integrate Web3 with database and profile service like opensea. A simple dashboard for web3. Easily track and visualize all your DeFi assets and liabilities in one simple interface.Buying crypto with credit card and trade in DEX",
    previewLink: cwfateDemoLink,
  },
  {
    image: "/assets/cwfgram.jpg",
    title: "CWFgram - IG Clone",
    labels: ["ReactJS", "NextJS", "Responsive", "HTML&CSS","HTML5"],
    desc: "This is a Instagram Clone",
    previewLink: "https://cwfgram.vercel.app/",
    githubLink: "https://github.com/cwf96991/IGClone",
  },
  
  {
    image: "/assets/icon.svg",
    title: "Skill Set Showcases",
    labels: ["ReactJS", "NextJS", "Responsive", "HTML&CSS","HTML5","Social Media","Markdown"],
    desc: "-Markdown editor with html converter and export to PDF file\n-3D Hover Effect\n-Share on Social Media\n-Login with Social Media\n-Form with Validation",
    previewLink: "/myWork",
   
  },
];
const desc = AppConfig.description;
const resumeDesc =
  "I started my journey as a programmer 3 years ago  when I enrolled in a WWW Course in University. During the following years I developed my skills in web app development.";
const contactDesc =
  "Let me know if you are interested in my services or coliaboration.\nI will reply as soon as possible.";

const linkedinLink = "https://www.linkedin.com/in/cwf96991";
const turingLink = "https://bit.ly/turingCWF";
const indeedLink = "https://indeedhi.re/3rIKkoM";
const githubLink = "https://github.com/cwf96991";
export const metamaskDeepLink =
  "https://metamask.app.link/dapp/cwf96991.github.io/";
export const networkConfigs = {
  "0x1": {
    currencySymbol: "ETH",
    blockExplorerUrl: "https://etherscan.io/",
    wrapped: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  },
  "0x3": {
    currencySymbol: "ETH",
    blockExplorerUrl: "https://ropsten.etherscan.io/",
  },
  "0x4": {
    currencySymbol: "ETH",
    blockExplorerUrl: "https://kovan.etherscan.io/",
  },
  "0x2a": {
    currencySymbol: "ETH",
    blockExplorerUrl: "https://rinkeby.etherscan.io/",
  },
  "0x5": {
    currencySymbol: "ETH",
    blockExplorerUrl: "https://goerli.etherscan.io/",
  },
  "0x539": {
    chainName: "Local Chain",
    currencyName: "ETH",
    currencySymbol: "ETH",
    rpcUrl: "http://127.0.0.1:7545",
  },
  "0xa86a": {
    chainId: 43114,
    chainName: "Avalanche Mainnet",
    currencyName: "AVAX",
    currencySymbol: "AVAX",
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    blockExplorerUrl: "https://cchain.explorer.avax.network/",
  },
  "0x38": {
    chainId: 56,
    chainName: "Smart Chain",
    currencyName: "BNB",
    currencySymbol: "BNB",
    rpcUrl: "https://bsc-dataseed.binance.org/",
    blockExplorerUrl: "https://bscscan.com/",
    wrapped: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  },
  "0x61": {
    chainId: 97,
    chainName: "Smart Chain - Testnet",
    currencyName: "BNB",
    currencySymbol: "BNB",
    rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    blockExplorerUrl: "https://testnet.bscscan.com/",
  },
  "0x89": {
    chainId: 137,
    chainName: "Polygon Mainnet",
    currencyName: "MATIC",
    currencySymbol: "MATIC",
    rpcUrl: "https://rpc-mainnet.maticvigil.com/",
    blockExplorerUrl: "https://explorer-mainnet.maticvigil.com/",
    wrapped: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  },
  "0x13881": {
    chainId: 80001,
    chainName: "Mumbai",
    currencyName: "MATIC",
    currencySymbol: "MATIC",
    rpcUrl: "https://rpc-mumbai.matic.today/",
    blockExplorerUrl: "https://mumbai.polygonscan.com/",
  },
};
export {
  cwfateDemoLink,
  githubLink,
  indeedLink,
  turingLink,
  linkedinLink,
  contactDesc,
  resumeDesc,
  workList,
  titleList,
  desc,
};
