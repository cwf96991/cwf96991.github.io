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
const goupstairDemoLink = "https://go-up-stair.vercel.app/"
const workList = [
  {
    image: "/assets/goupstair.svg",
    title: "Go Up Stair - NFT Project",
    labels: ["NFT", "Web3","Mint", "Solidity", "NextJS"],
    desc: "Minting your first NFT in Go Up Stair. Integrating buy and sell flow with OpenSea.\nSupport features:\n- Blind Box\n- Mint NFT with other ERC20 token e.g.USDT\n- Minting exclusive (whitelisting)\n- Support multiple wallet gateways",
    previewLink: goupstairDemoLink,
  },
  {
    image: "/icon.svg",
    title: "CWFate - NFT Marketplace",
    labels: ["NFT", "ReactJS", "NextJS", "Solidity", "HTML&CSS"],
    desc: "Integrate Web3 with database and profile service like opensea. A simple dashboard for web3. Easily track and visualize all your DeFi assets and liabilities in one simple interface.Buying crypto with credit card and trade in DEX",
    previewLink: cwfateDemoLink,
  },
  {
    image: "/assets/cwfgram.jpg",
    title: "CWFgram - IG Clone",
    labels: ["ReactJS", "NextJS", "Responsive", "HTML&CSS"],
    desc: "This is a Instagram Clone",
    previewLink: "https://cwfgram.vercel.app/",
    githubLink: "https://github.com/cwf96991/IGClone",
  },
  {
    image: "/assets/qdapp.png",
    title: "QuantDART",
    bgColor: "bg-[#011833]",
    labels: ["Flutter", "AWS", "Crypto", "Trading Platform"],
    desc: "QuantDART is a simple yet powerful digital asset investment and management app, fully capable to trade with most popular Digital Asset-to-Digital Asset and Fiat-to-Digital-Asset. We offer QuantDART as an all-in-one platform for cryptocurrency.Provide service to manage and trade easily in real-time.",
    previewLink: "https://www.quantdart.com/",
  },
];
const desc = AppConfig.description;
const resumeDesc =
  "I started my journey as a programmer 3 years ago  when I enrolled in a WWW Course in University. During the following years I developed my skills in web app development.";
const contactDesc =
  "Let me know if you are interested in my services or coliaboration.\nI will reply as soon as possible.";

const linkedinLink = "https://bit.ly/linkedinCWF";
const turingLink = "https://bit.ly/turingCWF";
const indeedLink = "https://indeedhi.re/3rIKkoM";
const githubLink = "https://github.com/cwf96991";

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
