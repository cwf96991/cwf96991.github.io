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
    <div data-theme="light" class="form-control mt-5 w-full px-8 md:px-4">
      <label class="label">
        <span class="label-text">Name</span>
        <span
          class="label-text-alt flex items-center cursor-pointer"
          onClick={() => {
            setIsLock(!isLock);
          }}
        >
          <div className="h-[12px] w-[12px]">
            <Edit />
          </div>
          <div className="font-bold ml-2">Edit</div>
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
          class="input input-ghost border-gray-400 w-full "
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
        <p class="text-red-500 text-xs italic">Please input your name.</p>
      )}
      <label class="cursor-pointer label">
        <span class="label-text">Remember me</span>
        <input
          type="checkbox"
          checked={isRmb}
          class="checkbox"
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
        <label class="cursor-pointer label">
          <span class="label-text">Member</span>
          <input
            type="radio"
            name="radio-1"
            id={"member" + `_${id}`}
            class="radio ml-2"
          ></input>
        </label>
        <label class="cursor-pointer label">
          <span class="label-text">Guest</span>
          <input
            type="radio"
            name="radio-1"
            id={"guest" + `_${id}`}
            class="radio ml-2"
          ></input>
        </label>
      </div>
      {userTypeError && (
        <p class="text-red-500 text-xs italic">Please select your user type.</p>
      )}
      <label class="cursor-pointer label flex justify-between">
        <div className="label-text">Rating</div>
        <div
          onChange={(e) => {
            setRating(e.target.id);
            setRatingError(false);
          }}
          class="rating rating-sm"
        >
          <input type="radio" name="rating-9" class="rating-hidden" />
          <input
            type="radio"
            name="rating-9"
            id={"1" + `_${id}`}
            class="mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-9"
            id={"2" + `_${id}`}
            class="mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-9"
            id={"3" + `_${id}`}
            class="mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-9"
            id={"4" + `_${id}`}
            class="mask mask-star-2"
          />
          <input
            type="radio"
            name="rating-9"
            id={"5" + `_${id}`}
            class="mask mask-star-2"
          />
        </div>
      </label>
      {ratingError && (
        <p class="text-red-500 text-xs italic">Please give me a rating.</p>
      )}
      <select
        id={"select" + `_${id}`}
        onChange={(e) => {
          setOption(e.target.value);

          setOptionError(false);
        }}
        class="select w-full select-ghost border-gray-400 focus:outline-none"
      >
        <option disabled selected>
          Pick one Project
        </option>
        <option>NFT Marketplace</option>
        <option>IG Clone</option>
      </select>
      {optionError && (
        <p class="text-red-500 text-xs italic">Please one of the options.</p>
      )}
      <textarea
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        class="textarea mt-5 textarea-ghost border-gray-400"
        placeholder="Description"
      ></textarea>
      <label class="cursor-pointer label">
        <span class="label-text">Agree the terms</span>
        <input
          type="checkbox"
          class="toggle"
          checked={isAgree}
          onClick={() => {
            setIsAgree(!isAgree);
          }}
        />
      </label>
      {isSubmit && !isAgree && (
        <p class="text-red-500 text-xs italic">Please agree the terms.</p>
      )}
      <div
        onClick={() => {
          setIsSubmit(true);
          checkValidInput();
        }}
        class="btn mt-2 "
      >
        <ClipLoader name="circle " loading={isLoading} size={24} />
        <div class={isLoading ? "ml-2" : ""}>Submit</div>
      </div>

      <input
        onClick={() => {
          resetForm();
        }}
        type="reset"
        value="Reset"
        class="btn mt-2"
      />
    </div>
  );
};

export default FormSkill;
