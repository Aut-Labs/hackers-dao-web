import { useForm } from "react-hook-form";
import Text from "../Text";
import NewsletterFormWrapper from "./NewsletterForm.style";
import Button from "../Button";
import { ethers } from "ethers";
import { abi } from "../../../abis/dao.abi";
const mumbaiAddress = "0x8eA20de15Db87Be1a8B20Da5ebD785a4a9BE9690";
const goerliAddress = "0x09e930B4FEB47cA86236c8961B8B1e23e514ec3F";
import EthIcon from "common/assets/image/ethereum.svg";
import NextImage from "common/components/NextImage";
import MumbaiICon from "common/assets/image/mumbai.svg";
import { useState } from "react";

const NewsletterForm = () => {
  const [signed, setSigned] = useState(false);

  const joinMumbai = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: {
              chainId: "0x13881",
              chainName: "Mumbai",
              nativeCurrency: 'MATIC',
              rpcUrls: ['https://matic-mumbai.chainstacklabs.com/'],
              blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com/"],
            },
          });
        } catch (addError) {
          throw new Error(addError);
        }
      } else {
        throw new Error(switchError);
      }
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(mumbaiAddress, abi, signer);

    const tx = await contract.join();
    const events = await tx.wait();

    const joinedEventEmitted = events.events.find(
      (event) => event.event == "Joined"
    );

    setSigned(joinedEventEmitted !== undefined);
  };

  const joinGoerli = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x5" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: {
              chainId: "0x5",
              chainName: "Goerli",
              nativeCurrency: 'ETH',
              rpcUrls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
              blockExplorerUrls: ["https://goerli.etherscan.io/"],
            },
          });
        } catch (addError) {
          throw new Error(addError);
        }
      } else {
        throw new Error(switchError);
      }
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(goerliAddress, abi, signer);

    const tx = await contract.join();
    const events = await tx.wait();

    const joinedEventEmitted = events.events.find(
      (event) => event.event == "Joined"
    );
    setSigned(joinedEventEmitted !== undefined);
  };

  return (
    <>
      {!signed ? (
        <>
          <NewsletterFormWrapper
            autoComplete="off"
            className="d-flex newsletter-input-fields"
          >
            <div className="submit-btn">
              <Button
                className="light"
                icon={<NextImage height="30px" width="30px" src={EthIcon} />}
                iconPosition="right"
                title="Görli"
                onClick={joinGoerli}
              />
              <Button
                className="light"
                icon={
                  <NextImage
                    marginLeft="10px"
                    height="30px"
                    width="30px"
                    src={MumbaiICon}
                  />
                }
                iconPosition="right"
                title="Mumbai"
                onClick={joinMumbai}
              />
            </div>
          </NewsletterFormWrapper>
          <div
            className="newsletter-form-info"
            style={{
              padding: "20px 0",
            }}
          ></div>
        </>
      ) : (
        <Text
          className="manifesto-title"
          content="**You successfully joined HackerDAO**"
        />
      )}
    </>
  );
};

export default NewsletterForm;
