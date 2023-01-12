import ProgressBar from "./progressBarWidget";
const titleStyle =
  "text-2xl md:text-4xl font-extrabold text-center md:text-left";
const skillList = [
  {
    text: "Flutter",
    percent: 98,
  },
  {
    text: "React + React Native",
    percent: 90,
  },
  {
    text: "Firebase",
    percent: 95,
  },
  {
    text: "MongoDb",
    percent: 85,
  },
  {
    text: "AWS",
    percent: 90,
  },
  {
    text: "GraphQL",
    percent: 85,
  },
  {
    text: "Solidity + Web3",
    percent: 95,
  },
  {
    text: "Web3Auth Profile",
    percent: 100,
  },
  {
    text: "Crypto <-> Fiat and Trade in DEX",
    percent: 100,
  },
  {
    text: "Cross Chain Asset & NFT management",
    percent: 90,
  },
  {
    text: "NFT Marketplace",
    percent: 95,
  },
  {
    text: "UI/UX + SEO (NextJs)",
    percent: 90,
  },
  {
    text: "Jenkins - Test Automation",
    percent: 100,
  },
  {
    text: "Cucumber - BDD Tool",
    percent: 100,
  },
  {
    text: "Github + Jira - Project Management",
    percent: 95,
  },
  {
    text: "Vercel, App Store & Play Store deployments",
    percent: 100,
  },
];
const BarWidget = ({ text, percent }) => {
  return (
    <div className="w-full pr-8 mb-4 md:w-1/2 md:pr-4">
      <ProgressBar text={text} percent={percent} />
    </div>
  );
};
const SkillSection = () => {
  return (
    <div className="flex flex-col mb-4">
      <div className={`${titleStyle} `}>Skill</div>
      <div className="flex flex-row flex-wrap">
        {skillList.map((skill, index) => {
          const { text, percent } = skill;
          return <BarWidget key={index} text={text} percent={percent} />;
        })}
      </div>
    </div>
  );
};
export default SkillSection;
