import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import FormSkill from "./form";
import NewlineText from "../newlineText";
import { useState, useRef } from "react";
import { Header, SkillContainer, MobileDeskTopSection } from "./widget";
const FormWidget = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [tempResult, setTempResult] = useState("");
  const resultRef = useRef(null);
  const modalRef = useRef(null);
  function onSubmit(input) {
    setInput(input);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    setTimeout(() => {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }
  const FormResult = () => {
    return (
      <div
        ref={resultRef}
        className="mockup-code w-[85%] md:w-[90%] mx-auto  my-5 md:mt-5"
      >
        <pre data-prefix="$">
          <code>submit form result</code>
        </pre>
        {input != "" && (
          <pre data-prefix=">" className="text-warning">
            <code>submit...</code>
          </pre>
        )}
        <div>
          {isLoading ? (
            <div className="border border-black shadow rounded-md p-4 max-w-sm w-full ml-5">
              <div className="animate-pulse flex space-x-4">
                <div className="animate-pulse flex flex-col">
                  <code>{`{`}</code>
                  <div className=" bg-slate-200 w-[80px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div className=" bg-slate-200 w-[120px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div className=" bg-slate-200 w-[200px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div className=" bg-slate-200 w-[80px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div className=" bg-slate-200 w-[120px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <div className=" bg-slate-200 w-[80px] h-[24px] ml-5 rounded-lg mb-2"></div>
                  <code>{`}`}</code>
                </div>
              </div>
            </div>
          ) : (
            input != "" && (
              <pre className="text-success ml-5">
                <code className="-ml-5">{`{`}</code>
                <code>
                  <NewlineText
                    text={JSON.stringify(input)
                      .replace("{", "")
                      .replace("}", "")}
                    split={","}
                  />
                </code>
                <code>{`}`}</code>
              </pre>
            )
          )}
        </div>
      </div>
    );
  };
  const ConfirmModal = () => {
    return (
      <div
        data-theme="light"
        ref={modalRef}
        onClick={(event) => {
          const element = event.target;

          if (!element.classList.contains("modal")) {
            return;
          }
          const modal = document.getElementById("my-modal");
          modal.checked = false;
          enableBodyScroll(modalRef.current);
        }}
        className="modal "
      >
        <div className="modal-box fixed rounded-lg w-[80%] top-[30vh]">
          <h3 className="font-bold text-lg">
            Are you sure you want to continue?
          </h3>
          <p className="py-4">You can see the result after submit</p>
          <div className="modal-action">
            <label
              onClick={() => {
                enableBodyScroll(modalRef.current);
              }}
              htmlFor="my-modal"
              className="btn btn-error"
            >
              Cancel!
            </label>
            <label
              onClick={() => {
                enableBodyScroll(modalRef.current);
                onSubmit(tempResult);
              }}
              htmlFor="my-modal"
              className="btn"
            >
              Submit!
            </label>
          </div>
        </div>
      </div>
    );
  };
  const FormSkillWidget = ({ id }) => {
    return (
      <FormSkill
        id={id}
        isLoading={isLoading}
        onSumbit={(input) => {
          onSubmit(input);
        }}
        onClick={() => {
          setTempResult(input);
          disableBodyScroll(modalRef.current);
        }}
      />
    );
  };
  return (
    <div>
      <Header
        title="Form | my work"
        header="Form With Validation"
        skill="form"
      />
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <ConfirmModal />
      </div>

      <SkillContainer
        phone={<FormSkillWidget id={"mobile"} />}
        window={<FormSkillWidget id={"pc"} />}
      />
      <FormResult />
      <MobileDeskTopSection>
        <FormSkillWidget id={"pc"} />
      </MobileDeskTopSection>
    </div>
  );
};

export default FormWidget;
