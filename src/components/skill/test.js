import { SkillContainer, MobileDeskTopSection } from "./widget";
const TestSkill = () => {
  const Widget = () => {
    return <div className=""></div>;
  };

  return (
    <div className=" ">
      {/* <Header
        title="Share on Social Media | my work"
        header="Share on Social Media"
        skill="socialMedia"
      /> */}

      <SkillContainer phone={<Widget />} window={<Widget />} />

      <MobileDeskTopSection>
        <Widget />
      </MobileDeskTopSection>
    </div>
  );
};

export default TestSkill;
