import React, { useEffect, useState } from "react";
import {
  GithubSvg,
  IndeedSvg,
  TuringSvg,
  LinkedInSvg,
} from "@/components/img";
import {
  githubLink,
  indeedLink,
  turingLink,
  linkedinLink,
} from "@/utils/constant";
import WalletBtn from "@/components/walletBtn";
import useWeb3 from "@/hook/useWeb3";
import Link from 'next/link'
import { FullLogo } from "./logo";
const selectedNav =
  "block py-2 pr-4 pl-3  xl:bg-transparent xl:text-blue-700 xl:p-0 btnText";
const unSelectedNav =
  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 btnText xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0";
const NavItem = ({ text, link }) => {
  const [isSelect, setIsSelected] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let baseurl = location.origin;
      baseurl = baseurl + "/";
      let isResume = text == "Resume" && location.href.includes("resume");
      let isMyWork = text == "My Work" && location.href.includes("myWork");
      if ((text = "Home" && baseurl == location.href)) {
        setIsSelected("Home");
      } else if (isResume) {
        setIsSelected("Resume");
      } else if (isMyWork) {
        setIsSelected("My Work");
      }
    }
  }, []);
  return (
    <li>
      <div
        onClick={() => {
          location.href = link;
        }}
        className={isSelect == text ? selectedNav : unSelectedNav}
      >
        {text}
      </div>
    </li>
  );
};
const checkNavBar = () => {
  var navMenuDiv = document.getElementById("nav-content");
  var navMenu = document.getElementById("nav-toggle");

  document.onclick = check;
  function check(e) {
    var target = (e && e.target) || (event && event.srcElement);
    //Nav Menu
    if (!checkParent(target, navMenuDiv)) {
      // click NOT on the menu
      if (checkParent(target, navMenu)) {
        // click on the link
        if (navMenuDiv.classList.contains("hidden")) {
          navMenuDiv.classList.remove("hidden");
        } else {
          navMenuDiv.classList.add("hidden");
        }
      } else {
        // click both outside link and outside menu, hide menu
        navMenuDiv.classList.add("hidden");
      }
    }
  }
  function checkParent(t, elm) {
    while (t.parentNode) {
      if (t == elm) {
        return true;
      }
      t = t.parentNode;
    }
    return false;
  }
};
const MenuBtn = () => {
  return (
    <div className="block xl:hidden ">
      {/* menu button */}
      <button
        id="nav-toggle"
        onClick={() => {
          checkNavBar();
        }}
        className="flex items-center p-1 text-purpleTextLight hover:text-gray-600 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        <svg
          className="fill-current h-6 w-6 "
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="#B880F3"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
};
const socialMediaList = [
  {
    icon: <LinkedInSvg />,
    link: linkedinLink,
    text: "LinkedIn",
  },
  // {
  //   icon: <TuringSvg />,
  //   link: turingLink,
  //   text: "Turing",
  // },
  {
    icon: <IndeedSvg />,
    link: indeedLink,
    text: "Indeed",
  },
  {
    icon: <GithubSvg style={"hover:fill-blue-700"} />,
    link: githubLink,
    text: "Github",
  },
];
const WalletNavBar = () => {
  const {
    provider,
    account,
    balance,
    isLoading,
    disconnectWallet,
    connectWallet,
    haveWallet,
    currentChainId,
  } = useWeb3();
  useEffect(() => {
    checkNavBar();
  }, []);
  return (
    <nav className="bg-white  py-2.5 rounded shadow-lg opacity-85 backdrop-filter backdrop-blur-sm sticky">
      <div className="mx-4 xl:mx-16 flex flex-wrap justify-between items-center ">
        <Link  legacyBehavior href="/">
          <a className="hover:border-0">
            <FullLogo />
          </a>
        </Link>
        <div className="flex items-center xl:order-2">
          <div className="flex items-center">
            {haveWallet && (
              <div className="mr-2 hidden md:flex">
                <WalletBtn
                  chainBalance={balance}
                  handleClickConnect={connectWallet}
                  handleClickAddress={disconnectWallet}
                  isConnect={provider != undefined}
                  isLoading={isLoading}
                  walletAddress={account}
                  currentChainId={currentChainId}
                  haveWallet={haveWallet}
                  isCorrect={true}
                />
              </div>
            )}
            {socialMediaList.map((item, index) => {
              const { icon, link, text } = item;
              return (
                <button
                  key={index}
                  data-tip={text}
                  onClick={() => {
                    window.open(link);
                  }}
                  className="tooltip tooltip-bottom tooltip-hover w-6 h-6 mr-2"
                >
                  {icon}
                </button>
              );
            })}
          </div>
          <MenuBtn />
        </div>
        {haveWallet && (
          <div className="flex md:hidden justify-end w-full ">
            <div className="mt-2">
              <WalletBtn
                chainBalance={balance}
                handleClickConnect={connectWallet}
                handleClickAddress={disconnectWallet}
                isConnect={provider != undefined}
                isLoading={isLoading}
                walletAddress={account}
                currentChainId={currentChainId}
                haveWallet={haveWallet}
                isCorrect={true}
              />
            </div>
          </div>
        )}

        <div
          className="hidden justify-between items-center w-full xl:flex xl:w-auto xl:order-1"
          id="nav-content"
        >
          <ul className="flex flex-col mt-4 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium md:translate-x-[40%]">
            <NavItem text={"Home"} link={"/"} />
            <NavItem text={"Resume"} link={"/resume"} />
            <NavItem text={"Contact"} link={"/resume#contact"} />
            <NavItem text={"My Work"} link={"/myWork"} />
            <NavItem text={"Chat Room"} link={"/chatRoom"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default WalletNavBar;
