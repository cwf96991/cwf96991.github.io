import { EmailSvg, GithubSvg } from "./img";

const contactItemList = [
  {
    text: "cwfflutter@gmail.com",
    icon: <EmailSvg />,
    link: "mailto:cwfflutter@gmail.com",
  },
  {
    text: "@cwf96991",
    icon: <GithubSvg />,
    link: "https://github.com/cwf96991",
  },
];
const SectionHeader = ({ text }) => {
  return (
    <div className="text-white text-2xl border border-white  py-1 text-center mt-4">
      {text}
    </div>
  );
};
const TitleDescTime = ({ title, desc, time }) => {
  return (
    <div className="flex flex-col  my-5 text-white">
      <div className="text-gray-500">{time}</div>
      <div className=" text-extrabold ">{title}</div>
      <div className="text-sm">{desc}</div>
    </div>
  );
};
const SkillCol = ({ title, content }) => {
  return (
    <div
      tabindex="0"
      class="collapse collapse-arrow border text-white border-white bg-transparent mt-2"
    >
      <div class="collapse-title font-medium">{title}</div>
      <div class="collapse-content">{content}</div>
    </div>
  );
};
const ProgressBar = ({ value }) => {
  return <progress class="progress w-full" value={value} max="100"></progress>;
};
const ContactItem = ({ item }) => {
  const { text, icon, link } = item;
  return (
    <div
      onClick={() => {
        window.open(link);
      }}
      className="flex items-center my-2 cursor-pointer"
    >
      <div className="bg-white rounded-full p-1">{icon}</div>
      <div className="text-white ml-2">{text}</div>
    </div>
  );
};
const ResumePanel = () => {
  return (
    <div className="bg-blue-700 w-1/5 hidden md:flex md:flex-col p-5 min-w-[300px]">
      <SectionHeader text={"CONTACTS"} />

      {contactItemList.map((item, index) => {
        return <ContactItem item={item} key={index} />;
      })}
      <SectionHeader text={"EDUCATION"} />
      <TitleDescTime
        time="2018 - 2022"
        title="Bachelor of Engineer (CS)"
        desc="The University Of Hong Kong"
      />
      <SectionHeader text={"SOFTWARE"} />
      <SkillCol
        title="Frontend"
        content={
          <div className="flex flex-col">
            <div>Flutter</div>
            <ProgressBar value={"98"} />
            <div>React Native</div>
            <ProgressBar value={"90"} />
            <div>NextJs</div>
            <ProgressBar value={"95"} />
            <div>ReactJs</div>
            <ProgressBar value={"90"} />
            <div>HTML&CSS</div>
            <ProgressBar value={"92"} />
            <div>SEO</div>
            <ProgressBar value={"98"} />
          </div>
        }
      />
      <SkillCol
        title="Backend"
        content={
          <div className="flex flex-col">
            <div>NodeJs</div>
            <ProgressBar value={"80"} />
            <div>Firebase</div>
            <ProgressBar value={"90"} />
            <div>AWS</div>
            <ProgressBar value={"88"} />
            <div>Google Cloud Platform</div>
            <ProgressBar value={"80"} />
            <div>MongoDB</div>
            <ProgressBar value={"90"} />
            <div>MySQL</div>
            <ProgressBar value={"88"} />
            <div>GraphQL</div>
            <ProgressBar value={"88"} />
            <div>PHP</div>
            <ProgressBar value={"80"} />
          </div>
        }
      />
      <SkillCol
        title="Crypto"
        content={
          <div className="flex flex-col">
            <div>Solidity</div>
            <ProgressBar value={"90"} />
            <div>Web3 & Web3Auth Profile</div>
            <ProgressBar value={"100"} />
            <div>NFT Marketplace</div>
            <ProgressBar value={"90"} />
            <div>NFT Launch Pad</div>
            <ProgressBar value={"100"} />
            <div>{`Crypto <-> Fiat & DEX`}</div>
            <ProgressBar value={"100"} />
            <div>{`Cross Chain Asset & NFT management`}</div>
            <ProgressBar value={"100"} />
          </div>
        }
      />
      <SkillCol
        title="Testing"
        content={
          <div className="flex flex-col">
            <div>Jenkins - Test Automation</div>
            <ProgressBar value={"100"} />
            <div>Unit Testing</div>
            <ProgressBar value={"98"} />
            <div>Jest</div>
            <ProgressBar value={"98"} />
            <div>Playwright</div>
            <ProgressBar value={"100"} />
            <div>Crypress</div>
            <ProgressBar value={"98"} />
            <div>Cucumber- BDD Tool</div>
            <ProgressBar value={"98"} />
          </div>
        }
      />
      <SkillCol
        title="Deployment"
        content={
          <div className="flex flex-col">
            <div>AWS Amplify</div>
            <ProgressBar value={"100"} />
            <div>Vercel</div>
            <ProgressBar value={"100"} />
            <div>
              App Store &<br /> Play Store Deployments
            </div>
            <ProgressBar value={"100"} />
          </div>
        }
      />
    </div>
  );
};

export default ResumePanel;
