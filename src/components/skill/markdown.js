import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Header, SkillContainer, MobileDeskTopSection } from "./widget";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtmlPuri from "draftjs-to-html";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Preview, print } from 'react-html2pdf';

const Widget = () => {
    return <div className="mx-2 mt-2">

        <EditorWidget />
    </div>;
}


const EditorWidget = () => {
    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty());

    const CopyBtn = () => {
        const [isCopied,setIsCopied] = useState(false)
        const copyFunc = () => {
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 1500);
        }
        return <CopyToClipboard text={draftToHtmlPuri(
            convertToRaw(editorState.getCurrentContent())
        )}
            onCopy={() => copyFunc()}>
            <div key="CopyBtn" className="rdw-option-wrapper rdw-remove-wrapper" >{isCopied?"Copied":"Copy Html"}</div>
        </CopyToClipboard>

    }
    const ExportBtn = () => {
        const exportFunc = () => {
            console.log("Export")
            print('pdf', 'html-template')
        }
        return <div key="ExportBtn" className="rdw-option-wrapper rdw-remove-wrapper" onClick={() => exportFunc()}>Export as PDF</div>
    }

    return <div>

        <Editor
            editorState={editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            hashtag={{
                separator: ' ',
                trigger: '#',
            }}
            toolbarCustomButtons={[<ExportBtn />, <CopyBtn />]}
            onEditorStateChange={onEditorStateChange}
        />
        <textarea
            className="my-5 w-full textarea-bordered h-24 bg-gray-100 border-black text-gray-700"
            disabled value={"Html Result:\n" + draftToHtmlPuri(
                convertToRaw(editorState.getCurrentContent())
            )} />
            <div className="hidden">
            <Preview id={'html-template'} html={draftToHtmlPuri(
                convertToRaw(editorState.getCurrentContent())
            )} />
            </div>
       
        
    </div>
}
const PhoneWidget = () => {

    return <div className="mx-2">
        <EditorWidget />
    </div>;
}
const MarkDownWidget = () => {
    return <div className="">
        <Header
            title="Markdown Editor | my work"
            header="Markdown Editor"
            skill="MarkdownEditor"
        />

        <SkillContainer phone={<PhoneWidget />} window={<Widget />} />

        <MobileDeskTopSection>
            <PhoneWidget />
        </MobileDeskTopSection>
    </div>


}

export default MarkDownWidget;
