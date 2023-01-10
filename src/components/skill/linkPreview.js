
import { Header, SkillContainer, MobileDeskTopSection } from "./widget";
import React, { useState, useEffect } from "react";
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";

const Widget = () => {
    const [input, setInput] = useState("https://cwf96991.github.io/");
    useEffect(() => {
        getLinkPreview(
            input
        ).then((data) => console.log(data));
    }, [input])
    return <div className="mx-auto flex items-center justify-center h-[350px] md:h-auto w-4/5">
        <input
            type="text"
            placeholder="Url"
            value={input}

            onChange={(e) => {
                setInput(e.target.value);
            }}
            className="input input-ghost border-gray-400 w-full "
        />
    </div>;
}


const LinkPreviewWidget = () => {
    return <div className="">
        <Header
            title="Link Preview Card | my work"
            header="Link Preview Card"
            skill="LinkPreview"
        />

        <SkillContainer phone={<Widget />} window={<Widget />} />

        <MobileDeskTopSection>
            <Widget />
        </MobileDeskTopSection>
    </div>


}

export default LinkPreviewWidget;
