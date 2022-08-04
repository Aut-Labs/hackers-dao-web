import Input from "../Input";
import { Controller, useForm } from "react-hook-form";
import Text from "../Text";
import NewsletterFormWrapper from "./NewsletterForm.style";
import Button from "../Button";
import { ethers } from "ethers";
import { abi } from "../../../abis/dao.abi";
const address = '0x04738ff6605bb59b7b0985614279d4fF54E619c7';

const NewsletterForm = ({ status, message, onValidated }) => {
  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const values = watch();

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
              nativeCurrency,
              rpcUrls: environment.rpcUrls?.split(","),
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

    const contract = new ethers.Contract(address, abi, signer);

    const tx = await contract.join();
    const events = await tx.wait();
    console.log(events);
    
    prompt(window.ethereum.selectedAddress);
  };

  const joinGoerli = () => {
    prompt("goerli join");
  };

  return (
    <>
      {status !== "success" ? (
        <>
          <NewsletterFormWrapper
            autoComplete="off"
            className="d-flex newsletter-input-fields"
          >
            <div className="submit-btn">
              <Button
                className="light"
                title="Join on Mumbai"
                onClick={joinMumbai}
              />
              <Button
                className="light"
                title="Join on Görli"
                onClick={joinGoerli}
              />
            </div>
          </NewsletterFormWrapper>
          <div
            className="newsletter-form-info"
            style={{
              padding: "20px 0",
            }}
          >
            {status === "error" ? (
              <Text
                style={{
                  position: "absolute",
                  color: "red",
                }}
                className="newsletter-form-error"
                dangerouslySetInnerHTML={{ __html: getMessage(message) }}
              />
            ) : null}
          </div>
        </>
      ) : (
        <Text
          className="manifesto-title"
          content="**Your subscription was successful**"
        />
      )}
    </>
  );
};

export default NewsletterForm;
