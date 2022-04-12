import { useState, useEffect } from "react";

const useWallet = () => {
  const [isWallet, setIsWallet] = useState(false);
  function handleEthereum() {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
      setIsWallet(true);
    } else {
      console.log("Please install MetaMask!");
    }
  }
  useEffect(() => {
    if (window.ethereum) {
      setIsWallet(true);
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });

      setTimeout(handleEthereum, 3000); // 3 seconds
    }
  }, []);
  return isWallet;
};
export default useWallet;
