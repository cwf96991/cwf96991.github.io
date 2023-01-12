import { Header, SkillContainer, MobileDeskTopSection } from "./widget";
import useMobile from "../../hook/useMobile";
import { TwitterSvg, FBSvg, LinkinSvg, PinterestSvg, RedditSvg } from "../img";
const SocialMediaSkill = () => {
  const isMobile = useMobile();
  const msg = encodeURIComponent(
    "Check out this website!\nCWF is a great Flutter & React Developer"
  );
  const hashTag = "flutter,react";
  const website = encodeURIComponent("https://cwf96991.github.io/");
  const mediaUrl = encodeURIComponent("https://cwf96991.github.io/icon.ico");
  const twitterUser = "ChowWaiFung3";
  function basicPopup(url) {
    window.open(
      url,
      "popUpWindow",
      "height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
    );
  }
  const SocialMediaBtn = ({ item }) => {
    const { url, color, icon, text } = item;
    let bg = "";
    let textColor = "";
    if (color == "#1D9BF0") {
      bg = "bg-[#1D9BF0]";
      textColor = "group-hover:text-[#1D9BF0]";
    } else if (color == "#2374E1") {
      bg = "bg-[#2374E1]";
      textColor = "group-hover:text-[#2374E1]";
    } else if (color == "#0A66C2") {
      bg = "bg-[#0A66C2]";
      textColor = "group-hover:text-[#0A66C2]";
    } else if (color == "#e60023") {
      bg = "bg-[#e60023]";
      textColor = "group-hover:text-[#e60023]";
    } else if (color == "#ff4500") {
      bg = "bg-[#ff4500]";
      textColor = "group-hover:text-[#ff4500]";
    }
    return (
      <div
        onClick={(e) => {
          e.preventDefault();

          if (isMobile) {
            window.open(url);
          } else {
            basicPopup(url);
          }
        }}
        className={`btn ${bg} border-0 normal-case group mb-2`}
      >
        <div className="flex items-center text-white hover:border-0 ">
          {icon}
          <div className={`ml-2 ${textColor}`}>{text}</div>
        </div>
      </div>
    );
  };
  const socialMediaList = [
    {
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${website}&source=${website}`,
      color: "#0A66C2",
      icon: <LinkinSvg />,
      text: "Share on LinkedIn",
    },
    {
      url: `https://twitter.com/intent/tweet/?text=${msg}&url=${website}&via=${twitterUser}&hashtags=${hashTag}`,
      color: "#1D9BF0",
      icon: <TwitterSvg />,
      text: "Share on Twitter",
    },
    {
      url: `https://www.facebook.com/sharer/sharer.php?u=${website}`,
      color: "#2374E1",
      icon: <FBSvg />,
      text: "Share on Facebook",
    },
    {
      url: `https://www.pinterest.com/pin/create/button/?url=${website}&media=${mediaUrl}&description=${msg}&hashtags=${hashTag}`,
      color: "#e60023",
      icon: <PinterestSvg />,
      text: "Share on Pinterest",
    },
    {
      url: `http://www.reddit.com/submit/?url=${website}`,
      color: "#ff4500",
      icon: <RedditSvg />,
      text: "Share on Reddit",
    },
  ];
  const Widget = () => {
    return (
      <div className="flex flex-col items-center mx-auto my-auto h-[350px] ">
        {socialMediaList.map((item, index) => {
          return <SocialMediaBtn item={item} key={index} />;
        })}
      </div>
    );
  };

  return (
    <div className="">
      <Header
        title="Share on Social Media | my work"
        header="Share on Social Media"
        skill="socialMedia"
      />

      <SkillContainer phone={<Widget />} window={<Widget />} />

      <MobileDeskTopSection>
        <Widget />
      </MobileDeskTopSection>
    </div>
  );
};

export default SocialMediaSkill;
