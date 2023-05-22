import Text from "../Text";
import NewsletterFormWrapper from "./NewsletterForm.style";
import Button from "../Button";
import { LinkButton } from "../Button";
import { ethers } from "ethers";
import { abi } from "../../../abis/like.abi";
const mumbaiAddress = "0x42bD213D1de0A93Dda6F3782f65bac04d140917D";
import NextImage from "common/components/NextImage";
import HeartIcon from "common/assets/image/red-heart-icon.svg";
import { useState } from "react";
import { openModal } from "@redq/reuse-modal";
import "@redq/reuse-modal/lib/index.css";
import animationData from "common/assets/aut-load.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect } from "react";
import { ic_content_copy_outline } from "react-icons-kit/md/ic_content_copy_outline";
import { Icon } from "react-icons-kit";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const trimAddress = (address) => {
  if (!address) {
    return "";
  }
  const middle = Math.ceil(address.length / 2);
  const left = address.slice(0, middle).substring(0, 6);
  let right = address.slice(middle);
  right = right.substr(right.length - 4);
  return `${left}...${right}`.toUpperCase();
};

const SuccessMessage = ({ explorerUrl, address }) => (
  <>
    <Text color="white" fontSize="32px" content="Congrats" />

    <Text
      color="white"
      fontSize="18px"
      content={<>You've submitted a like on the Mumbai chain</>}
    />
    {/* 
    <div
      style={{
        flex: 1,
      }}
    >
      <CopyToClipboard text={address}>
        <div
          style={{
            color: "#000",
            height: "40px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginTop: "10px",
          }}
        >
          {trimAddress(address)}

          <div
            style={{
              position: "absolute",
              right: "15px",
              cursor: "pointer",
            }}
          >
            <Icon size={18} icon={ic_content_copy_outline} />
          </div>
        </div>
      </CopyToClipboard>
    </div>

    <Text
      color="white"
      fontSize="18px"
      content={
        <>
          You're all set. Click on the button below to expand your community 😎
        </>
      }
    />

    <LinkButton
      className="playground-btn light"
      href="https://playground.aut.id/"
      target="_blank"
      title="Playground"
    /> */}
  </>
);

const Loading = () => (
  <Player
    autoplay
    loop
    src={animationData}
    style={{ height: "300px", width: "300px" }}
  />
);

const CongratsPopup = ({ getProps }) => {
  const [loading, setLoading] = useState(false);
  const [props, setProps] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    getProps((state) => {
      setLoading(state.loading);
      setError(state.error);
      setProps(state || {});
    });
  }, []);
  return (
    <div
      style={{
        height: "calc(100% - 20px)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        background: "#000",
        borderStyle: "solid",
        borderImage:
          "linear-gradient(45deg, #009fe3 0%, #0399de 8%, #0e8bd3 19%, #2072bf 30%, #3a50a4 41%, #5a2583 53%, #453f94 71%, #38519f 88%, #3458a4 100%) 1",
        borderWidth: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          flex: 1,
          padding: "30px",
          ...((loading || error) && {
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }),
        }}
      >
        {error ? (
          <Text fontSize="20px" color="red" content={error} />
        ) : loading ? (
          <Loading />
        ) : (
          <SuccessMessage {...props} />
        )}
      </div>
    </div>
  );
};

const NewsletterForm = () => {
  const openPopup = (componentProps, modalComponent) => {
    openModal({
      config: {
        className: "customModal",
        style: {
          border: 0,
        },
        disableDragging: false,
        enableResizing: {
          bottom: true,
          bottomLeft: true,
          bottomRight: true,
          left: true,
          right: true,
          top: true,
          topLeft: true,
          topRight: true,
        },
        width: 480,
        height: 440,
        animationFrom: { transform: "scale(0.2)" }, // react-spring <Spring from={}> props value
        animationTo: { transform: "scale(1)" }, //  react-spring <Spring to={}> props value
      },
      withRnd: false,
      overlayClassName: "customeOverlayClass",
      closeOnClickOutside: false,
      component: modalComponent,
      componentProps,
    });
  };

  const join = async (switchNetwork, contractAddress, explorerUrl) => {
    let setProps;
    openPopup(
      {
        getProps: (callback) => {
          setProps = callback;
          setProps({
            error: "",
            loading: true,
          });
        },
      },
      CongratsPopup
    );

    await switchNetwork();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      const tx = await contract.like();
      const events = await tx.wait();

      const likedEventEmitted = events.events.find(
        (event) => event.event == "Liked"
      );
      setProps({
        loading: false,
        error: "",
        explorerUrl,
        address: contractAddress,
      });
    } catch (error) {
      setProps({
        loading: false,
        error: error?.message,
      });
    }
  };

  const joinMumbai = async () => {
    const explorer = "https://explorer-mumbai.maticvigil.com/";

    const switchNetwork = async () => {
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
                nativeCurrency: "MATIC",
                rpcUrls: ["https://matic-mumbai.chainstacklabs.com/"],
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
    };

    await join(switchNetwork, mumbaiAddress, explorer);
  };

  return (
    <>
      <NewsletterFormWrapper
        autoComplete="off"
        className="d-flex newsletter-input-fields"
      >
        <div className="submit-btn">
          <Button
            className="light"
            icon={<NextImage height="30px" width="30px" src={HeartIcon} />}
            iconPosition="right"
            title="Like"
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
  );
};

export default NewsletterForm;
