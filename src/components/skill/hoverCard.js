import { Header, SkillContainer, MobileDeskTopSection } from "./widget";
import Tilt from "react-parallax-tilt";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
const fileTypes = ["PNG","SVG"];

const HoverCardWidget = () => {
  const HoverCard = () => {
    const [base64,setBase64] = useState("/icon-200x200.png")
    const handleChange = (file) => {
        
       
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          // Make a fileInfo Object
          let baseURL = reader.result;
          setBase64(baseURL)
          
        };
        
    };
    return (
     
      <div className="mx-auto flex items-center justify-center h-[350px] md:h-auto  cursor-pointer">
         <FileUploader  classes="" handleChange={handleChange} name="file" types={fileTypes} >
            <Tilt
          className="tilt cursor-pointer"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.2}
          gyroscope={true}
        >
          <div className="mt-4 flex flex-col items-center border border-black rounded-lg p-2 opacity-85 backdrop-filter backdrop-blur-sm">
            <img src={base64} className="mb-2" />
            <h1>3D Hover Effect 👀</h1>
            <h2>Click Me or drop thhe file right here</h2>
          </div>
        </Tilt>
            </FileUploader>
      </div>
    );
  };
  return (
    <div className="">
      <Header
        title="3D Hover Effect | my work"
        header="3D Hover Effect"
        skill="3DHoverEffect"
      />

      <SkillContainer phone={<HoverCard />} window={<HoverCard />} />

      <MobileDeskTopSection>
        <HoverCard />
      </MobileDeskTopSection>
    </div>
  );
};

export default HoverCardWidget;
