import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";

import WalletLink from "walletlink";

import Web3 from "web3";
import { AppConfig } from "../utils/AppConfig";
import { minABI } from "../utils/constant";
import { numberFromWei } from "../utils/format";

const providerOptions = {
  "custom-coinbase": {
    display: {
      logo: "/assets/img/coinbase.svg",
      name: "Coinbase",
      description: "Scan with WalletLink to connect",
    },
    options: {
      appName: "Go Up Stair", // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },

  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: process.env.INFURA_KEY,
    },
  },
  "custom-binancechainwallet": {
    display: {
      logo: "/assets/img/binance-logo.svg",
      name: "Binance Chain Wallet",
      description: "Connect to your Binance Chain Wallet",
    },
    package: true,
    connector: async () => {
      let provider = null;
      if (typeof window.BinanceChain !== "undefined") {
        provider = window.BinanceChain;
        try {
          await provider.request({ method: "eth_requestAccounts" });
        } catch (error) {
          throw new Error("User Rejected");
        }
      } else {
        throw new Error("No Binance Chain Wallet found");
      }
      return provider;
    },
  },
};

const web3Modal = new Web3Modal({
  network: "any",
  cacheProvider: true,
  providerOptions,
});

const useWeb3 = (network) => {
  const [provider, setProvider] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  const [error, setError] = useState(null);
  const [haveWallet, setHaveWallet] = useState(false);
  const [currentChainId, setCurrentChainId] = useState(undefined);
  const [isConnect, setIsConnect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrectChain, setIsCorrect] = useState(true);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState();
  async function connectContract(networks, abi) {
    if (isCorrectChain) {
      const networkId = await web3.eth.net.getId();

      const address = networks[networkId].address;
      const contract = new web3.eth.Contract(abi, address);
      return contract;
    }
    return;
  }
  // useEffect(() => {
    
  // }, []);
  useEffect(() => {
    if (window.ethereum) {
      connectWallet();
      window.ethereum.on("chainChanged", connectWallet);
      window.ethereum.on("accountsChanged", connectWallet);
      window.ethereum.on("disconnect", handleDisConnect);
      return () => {
        if (window.ethereum) {
          window.ethereum.removeListener("chainChanged", connectWallet);
          window.ethereum.removeListener("accountsChanged", connectWallet);
          window.ethereum.removeListener("disconnect", handleDisConnect);
        }
      };
    }
  }, [provider]);

  const handleDisConnect = () => {
    setIsConnect(false);
  };
  function disconnectWallet() {
    web3Modal.clearCachedProvider();
    setIsConnect(false);
    setProvider(undefined);
  }
  function handleEthereum() {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
      connectWallet();
      // Access the decentralized web!
    }
  }
  async function connectWallet() {
    try {
      if (window.ethereum) {
        setHaveWallet(true);
        setIsLoading(true);
        let walletprovider = provider;
        if (walletprovider == null) {
        }
        const externalProvider = await web3Modal.connect();

        const ethersProvider = new ethers.providers.Web3Provider(
          externalProvider
        );
        const web3 = new Web3(externalProvider);

        let signer = ethersProvider.getSigner();
        let chain = await ethersProvider.getNetwork();

        setCurrentChainId(chain.chainId);

        let balance = await signer.getBalance();
        let account = await web3.eth.getAccounts();

        setAccount(account[0]);
        setWeb3(web3);
        setBalance(numberFromWei(balance));
        setProvider(ethersProvider);

        setIsLoading(false);
      } else {
        window.addEventListener("ethereum#initialized", handleEthereum, {
          once: true,
        });

        setTimeout(handleEthereum, 3000); // 3 seconds
      }
    } catch (e) {
      setError("NO_WALLET_CONNECTED");
      setIsConnect(false);
      setIsLoading(false);
      console.log("NO_WALLET_CONNECTED", e);
    }
  }

  return {
    provider,
    isCorrectChain,
    account,
    balance,
    error,
    isLoading,
    haveWallet,
    currentChainId,
    isConnect,
    disconnectWallet,
    connectWallet,
    tokenBalance,
    connectContract,
    web3,
  };
};

export default useWeb3;
