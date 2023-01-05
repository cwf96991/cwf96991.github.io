import dynamic from "next/dynamic";
import { AppConfig } from "../utils/AppConfig";
import { networkConfigs } from "../utils/constant";
const ConnectWallet = dynamic(() => import("./ConnectWallet"), {
  ssr: false,
});

const WalletBtn = ({
  tokenBalance,
  chainBalance,
  handleClickConnect,
  handleClickAddress,
  isConnect,
  walletAddress,
  currentChainId,
  tokenAddress,
  isCorrect,
  isLoading,
  haveWallet,
}) => {
  return (
    <ConnectWallet
      address={isConnect ? walletAddress : ""}
      onLogout={() => {
        handleClickAddress();
      }}
      onConnect={() => {
        handleClickConnect();
      }}
      haveWallet={haveWallet}
      isLoading={isLoading}
      chainBalance={isConnect ? chainBalance : "0"}
      tokenBalance={isConnect ? tokenBalance : "0"}
      chainTokenSymbol={
        currentChainId != "" && currentChainId != undefined
          ? networkConfigs[`0x${Number(currentChainId).toString(16)}`][
              "currencySymbol"
            ]
          : ""
      }
      tokenSymbol={AppConfig.tokenSymbol}
      showTokenBalance={tokenAddress != null && isCorrect}
    />
  );
};

export default WalletBtn;
