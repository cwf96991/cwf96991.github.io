import { FavSvg, UnFavSvg } from "./img";
import { useEffect, useState } from "react";
const FavBtn = ({ skill }) => {
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let skills = localStorage.getItem("skills");
      if (skills !== null) {
        if (skills.includes(skill)) {
          setIsFav(true);
        }
      }
    }
  }, [skill]);
  function toggle() {
    if (typeof window !== "undefined") {
      let skills = JSON.parse(localStorage.getItem("skills"));

      if (skills !== null) {
        if (skills.includes(skill)) {
          const index = skills.indexOf(skill);
          if (index > -1) {
            skills.splice(index, 1);
          }
        } else {
          skills.push(skill);
        }
        localStorage.setItem("skills", JSON.stringify(skills));
      } else {
        console.log("this case");
        let skillList = [skill];
        localStorage.setItem("skills", JSON.stringify(skillList));
      }
    }

    setIsFav(!isFav);
  }
  return (
    <div
      onClick={() => {
        toggle();
      }}
      className="ml-2 svgBgBtn"
    >
      {isFav ? <FavSvg size="20" /> : <UnFavSvg size="20" />}
    </div>
  );
};

export default FavBtn;
