import React, { useState } from "react";
import { Edit, CrossSvg } from "../img";
import ClipLoader from "react-spinners/ClipLoader";
const FormSkill = ({ id, isLoading, onClick }) => {
  const [isRmb, setIsRmb] = useState(false);
  const [input, setInput] = useState("Testing");
  const [inputError, setInputError] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [userType, setUserType] = useState("");
  const [userTypeError, setUserTypeError] = useState(false);
  const [rating, setRating] = useState("5");
  const [ratingError, setRatingError] = useState(false);
  const [isLock, setIsLock] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const [option, setOption] = useState("");
  const [optionError, setOptionError] = useState(false);
  const [desc, setDesc] = useState("");

  function submitForm() {
    let req = {
      name: input,
      rememberMe: isRmb,
      userType,
      rating,
      project: option,
      desc,
    };
    onClick(req);
    // onSumbit(req);
  }
  function checkValidInput() {
    let isError = false;
    if (input == "") {
      setInputError(true);
      isError = true;
    }
    if (userType == "") {
      setUserTypeError(true);
      isError = true;
    }
    if (rating == "") {
      setRatingError(true);
      isError = true;
    }
    if (option == "") {
      setOptionError(true);
      isError = true;
    }
    if (isError) {
      return;
    }
    const modal = document.getElementById("my-modal");
    modal.checked = true;

    submitForm();
  }
  function resetForm() {
    const select = document.getElementById("select" + `_${id}`);

    select.selectedIndex = 0;
    const member = document.getElementById("member" + `_${id}`);

    member.checked = false;
    const guest = document.getElementById("guest" + `_${id}`);

    guest.checked = false;
    const rating5 = document.getElementById("5" + `_${id}`);

    rating5.checked = true;
    setIsRmb(false);
    setInput("");
    setInputError("");
    setIsAgree("");
    setUserType("");
    setUserTypeError(false);
    setRating("5");
    setRatingError("");
    setIsLock(true);
    setIsSubmit(false);
    setOption("");
    setOptionError(false);
    setDesc("");
  }
  return (
    <div data-theme="light" className="w-full px-8 mt-5 form-control md:px-4">
      <label className="label">
        <span className="label-text">Name</span>
        <span
          className="flex items-center cursor-pointer label-text-alt"
          onClick={() => {
            setIsLock(!isLock);
          }}
        >
          <div className="h-[12px] w-[12px]">
            <Edit />
          </div>
          <div className="ml-2 font-bold">Edit</div>
        </span>
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder="Your Name"
          value={input}
          disabled={isLock}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="w-full border-gray-400 input input-ghost "
        />
        {input != "" && !isLock && (
          <div
            onClick={() => {
              setInput("");
            }}
            className="absolute right-2 top-2 btnText"
          >
            <CrossSvg />
          </div>
        )}
      </div>
      {inputError && (
        <p className="text-xs italic text-red-500">Please input your name.</p>
      )}
      <label className="cursor-pointer label">
        <span className="label-text">Remember me</span>
        <input
          type="checkbox"
          checked={isRmb}
          className="checkbox"
          onClick={() => {
            setIsRmb(!isRmb);
          }}
        />
      </label>
      <div
        className="flex justify-between"
        onChange={(e) => {
          setUserType(e.target.id);
          setUserTypeError(false);
        }}
      >
        <label className="cursor-pointer label">
          <span className="label-text">Member</span>
          <input
            type="radio"
            name="radio-1"
            id={"member" + `_${id}`}
            className="ml-2 radio"
          ></input>
        </label>
        <label className="cursor-pointer label">
          <span className="label-text">Guest</span>
          <input
            type="radio"
            name="radio-1"
            id={"guest" + `_${id}`}
            className="ml-2 radio"
          ></input>
        </label>
      </div>
      {userTypeError && (
        <p className="text-xs italic text-red-500">
          Please select your user type.
        </p>
      )}
      <label className="flex justify-between cursor-pointer label">
        <div className="label-text">Rating</div>
        <div
          onChange={(e) => {
            setRating(e.target.id);
            setRatingError(false);
          }}
          className="rating rating-sm"
        >
          <input type="radio" name="rating-9" className="hidden rating-hidden" />
          <input
            type="radio"
            name="rating-9"
            id={"1" + `_${id}`}
            className="mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-9"
            id={"2" + `_${id}`}
            className="mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-9"
            id={"3" + `_${id}`}
            className="mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-9"
            id={"4" + `_${id}`}
            className="mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-9"
            id={"5" + `_${id}`}
            className="mask mask-star-2"
          />
        </div>
      </label>
      {ratingError && (
        <p className="text-xs italic text-red-500">Please give me a rating.</p>
      )}
      <select
        id={"select" + `_${id}`}
        onChange={(e) => {
          setOption(e.target.value);

          setOptionError(false);
        }}
        className="w-full border-gray-400 select select-ghost focus:outline-none"
      >
        <option disabled selected>
          Pick one Project
        </option>
        <option>NFT Marketplace</option>
        <option>IG Clone</option>
      </select>
      {optionError && (
        <p className="text-xs italic text-red-500">
          Please one of the options.
        </p>
      )}
      <textarea
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        className="mt-5 border-gray-400 textarea textarea-ghost"
        placeholder="Description"
      ></textarea>
      <label className="cursor-pointer label">
        <span className="label-text">Agree the terms</span>
        <input
          type="checkbox"
          className="toggle"
          checked={isAgree}
          onClick={() => {
            setIsAgree(!isAgree);
          }}
        />
      </label>
      {isSubmit && !isAgree && (
        <p className="text-xs italic text-red-500">Please agree the terms.</p>
      )}
      <div
        onClick={() => {
          setIsSubmit(true);
          checkValidInput();
        }}
        className="mt-2 btn "
      >
        <ClipLoader name="circle " loading={isLoading} size={24} />
        <div className={isLoading ? "ml-2" : ""}>Submit</div>
      </div>

      <input
        onClick={() => {
          resetForm();
        }}
        type="reset"
        value="Reset"
        className="mt-2 btn"
      />
    </div>
  );
};

export default FormSkill;
