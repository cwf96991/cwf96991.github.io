import { DropDownWrapper, Avatar, IconBtn, LoadingSpin } from "./index";
import { truncateNumber } from "../utils/format";
import { useState } from "react";
import { metamaskDeepLink } from "../utils/constant";
import Blockies from "react-blockies";

const truncateAddress = (address) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

const ConnectWallet = ({
  address,
  onLogout,
  onConnect,
  chainBalance,
  chainTokenSymbol,
  isLoading,
  haveWallet,
}) => {
  const [isCopy, SetIsCopy] = useState(false);
  const cwfateDemoLink = "https://cwfate-cwf96991.vercel.app/";
  const launchUrl = () => {
    if (!location.href.includes("/myNFT")) {
      location.href = cwfateDemoLink + "/dashboard";
    }
  };
  const launchMintUrl = () => {
    const goupstairDemoLink = "https://go-up-stair.vercel.app/";

    location.href = goupstairDemoLink + "/preSale";
  };

  const functionList = [
    {
      text: "My NFT",
      type: "btn",
      action: launchUrl,
      textColor: "themeColor",
    },
    {
      text: "Mint",
      type: "btn",
      action: launchMintUrl,
      textColor: "themeColor",
    },
    { text: "Logout", type: "btn", action: onLogout, textColor: "red" },
  ];
  const DefaultAvatar = () => {
    return (
      <div className="bg-black rounded-full">
        <Blockies className="rounded-full " seed={address} size={8} scale={4} />
      </div>
    );
  };

  return (
    <div className=" justify-evenly flex flex-col items-start md:items-center md:flex-row md:w-[380px] px-4 py-2  border-2 rounded-lg border-themeColor">
      {isLoading ? (
        haveWallet && <div></div>
      ) : (
        <div className="flex flex-col items-start ">
          {address && (
            <div className="text-themeWhite text-sm">
              {truncateNumber(chainBalance)} {chainTokenSymbol}
            </div>
          )}
        </div>
      )}
      <div className="flex justify-around md:justify-none">
        <div className="mr-2 btn btn-ghost border-0 btn-sm w-[180px] h-[30px] px-4 rounded-full flex justify-between items-center bg-gradient-to-r from-[#355C7D] via-[#6C5B7B] to-[#C06C84]">
          {isLoading ? (
            <div className="mx-auto translate-x-[10px]">
              <LoadingSpin />
            </div>
          ) : (
            <div className="flex items-center">
              <div
                className={`text-white ${!address ? "cursor-pointer" : ""}`}
                onClick={async () => {
                  if (!haveWallet) {
                    window.open(metamaskDeepLink);
                  } else if (!address) {
                    await onConnect();
                  } else {
                    navigator.clipboard.writeText(address);
                    SetIsCopy(true);
                    setTimeout(() => {
                      SetIsCopy(false);
                    }, 1500);
                  }
                }}
              >
                {!haveWallet
                  ? "Install Metamask"
                  : address
                  ? isCopy
                    ? "Copied"
                    : truncateAddress(address)
                  : "Connect Wallet"}
              </div>
              {address && (
                <div className="text-themeWhite ml-2">
                  <IconBtn
                    src={`/assets/btn/copy.svg`}
                    onClick={() => {
                      navigator.clipboard.writeText(address);
                      SetIsCopy(true);
                      setTimeout(() => {
                        SetIsCopy(false);
                      }, 1500);
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {address ? (
          <DropDownWrapper
            isHover={true}
            items={functionList.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className="text-themeBlue font-bold hover:text-blue-700 hover:shadow-md active:bg-slate-100"
                    onClick={() => {
                      if (item.action != null) {
                        item.action();
                      }

                      document.activeElement.blur();
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
            children={<DefaultAvatar />}
          />
        ) : (
          <DefaultAvatar />
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;
