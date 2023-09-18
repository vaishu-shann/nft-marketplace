import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { Modal } from "antd";
import copy from "copy-to-clipboard";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { MdContentCopy } from "react-icons/md";
//
import "./navbar.css";
import useWindowSize from "../../utils/windowSize";
import { IconContext } from "react-icons";
import { web3GlobalContext } from "../../context/global-context";
import { getEllipsisTxt } from "../../utils/formatter";
import Metamask from "../../assets/images/metamask.png";
import TrustWallet from "../../assets/images/trustwallet.png";
import getLinker from "../../utils/deepLink";
import mobileCheck from "../../utils/mobileCheck";
import "../../styles/globalStyle.css";
import { switchBlockchain } from "../../utils/web3-utils";
import { createWeb3Object } from "../../services/web3-services";
import config from "../../config";
import Logo from "../../assets/images/LogoImage.png";
import { userLogin, verifyUser } from "../../services/APIManager";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
let walletType;

function Navbar(props) {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [showWalletAddress, setShowWalletAddress] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const {
    walletAddress,
    setWalletAddress,
    setChainGlobal,
    web3Obj,
    setWeb3Obj,
    setProvider,
    isAccChange,
    setIsAccChange,
    isAccDisconnect,
    userName,
    setAuthToken,
    setExistingUser,
    setUserId,
    setUserName,
  } = useContext(web3GlobalContext);
  
  const [authorizationToken, setAuthorizationToken] = useState(
    localStorage.getItem("auth_token")
  );
  const [web3Modal, setWeb3Modal] = useState(null);
  walletType = localStorage.getItem("wallet_type");

  useEffect(() => {
    if (walletAddress) {
      if (!isAccDisconnect) {
        setShowWalletAddress(true);
      } else {
        setShowWalletAddress(false);
      }
    }
  }, [walletAddress, web3Obj]);

  useEffect(() => {
    if (isAccDisconnect) {
      diconnectWallet();
    }
  }, [walletAddress, isAccDisconnect]);

  useEffect(() => {
    if (walletAddress && isAccChange) {
      navigate("/");
      setIsAccChange(false);
    }
  }, [walletAddress]);

  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          appName: "GODL gold",
          rpc: {
            137: "https://polygon-mainnet.infura.io/v3/d5fe74da0f8643f4983f966a06561fc4",
          },
        },
      },
    };

    const newWeb3Modal = new Web3Modal({
      cacheProvider: true,
      disableInjectedProvider: true,
      providerOptions,
    });

    setWeb3Modal(newWeb3Modal);
  }, []);
  const copyToClipboard = () => {
    document.getElementById("wallet-address").style.color = "#CE00E6";
    document.getElementById("wallet-address").style.fontWeight = 600;
    setTimeout(() => {
      document.getElementById("wallet-address").style.color = "#fff";
      document.getElementById("wallet-address").style.fontWeight = 400;
    }, 250);

    copy(walletAddress);
  };
  const diconnectWallet = async () => {
    setShowWalletAddress(false);
    let web3Defaultobj = await createWeb3Object();
    setWeb3Obj(web3Defaultobj);
    localStorage.clear();
    setModal1Open(false);
    setWeb3Obj("");
    setWalletAddress(null);
  };
  const connectWallet = async () => {
    try {
      // setWalletType("trustwallet")
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      setWeb3Obj(web3);
      setProvider(provider);
      const network = await web3.eth.getChainId();
      localStorage.setItem("netId", network);
      setChainGlobal(network);
      const accounts = await web3.eth.getAccounts();
      localStorage.setItem("wallet_type", "trustwallet");
      if (accounts) {
        const publicAddress = Web3.utils.toChecksumAddress(accounts[0]);
        localStorage.setItem("walletAddress", publicAddress);
        setWalletAddress(publicAddress);
      }
      setModal2Open(false);
      await defaultState(localStorage.getItem("walletAddress"), network);
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const metamaskHandler = async () => {
    const yourWebUrl = window.location.href; // Replace with your website domain
    const deepLink = `https://metamask.app.link/dapp/${yourWebUrl}`;
    const downloadMetamaskUrl = "https://metamask.io/download.html";

    if (window.ethereum) {
      await connectMetamask();
    } else if (mobileCheck()) {
      const linker = getLinker(downloadMetamaskUrl);
      linker.openURL(deepLink);
    } else {
      alert("Please Install Metamask!!!");
    }
  };

  const connectMetamask = async () => {
    try {
      // setWalletType("metamask")
      setProvider(window.ethereum);
      setWeb3Obj(new Web3(window.ethereum));
      const networkId = await window.ethereum.request({
        method: "net_version",
      });
      setChainGlobal(networkId);
      localStorage.setItem("netId", networkId);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const publicAddress = Web3.utils.toChecksumAddress(accounts[0]);
      localStorage.setItem("walletAddress", publicAddress);
      setWalletAddress(publicAddress);
      localStorage.setItem("wallet_type", "metamask");
      setModal2Open(false);
      await defaultState(publicAddress, networkId);
    } catch (e) {
      console.error(e);

      return;
    }
  };

  const switchBlockchainLogic = async () => {
    try {
      await switchBlockchain(config.defaultNetwork);
      setChainGlobal(config.defaultNetwork);
    } catch (error) {
      console.log("Error in switchBlockchainLogic", error);
      return false;
    }
  };

  const defaultState = async (address, netId) => {
    let data = {
      address: address,
      chain_id: Number(netId),
    };
    if (address) {
      try {
        const verifyRes = await verifyUser(data);
        console.log("verifyRes", verifyRes);
        setExistingUser(verifyRes.status);
        if (verifyRes.status) {
          try {
            const loginRes = await userLogin(data);
            console.log("loginRes", loginRes);
            if (loginRes.status) {
              setAuthorizationToken(loginRes.data.auth_token);
              setUserId(loginRes.data.user.id);
              setUserName({userName:loginRes.data.user.name});
              localStorage.setItem("username", loginRes.data.user.name);
              setAuthToken(loginRes.data.auth_token);
              localStorage.setItem("auth_token", loginRes.data.auth_token);
              localStorage.setItem(
                "refresh_token",
                loginRes.data.refresh_token
              );
            }
            window.location.reload();
          } catch (e) {
            console.log("layout login", e);
            return;
          }
        } else {
          navigate("/register");
        }
      } catch (e) {
        console.log("layout error", e);
      }
    }
  };

  return (
    <div className="nav-cont">
      <div className="nav-routes">
        {/* <h4 className="white logo">3SuiteNFT</h4> */}
        <img
          src={Logo}
          alt=""
          className="logo-img"
          onClick={() => navigate("/")}
        />
        <div className="routes">
          <ul className={click ? "nav-menu active" : "nav-list"}>
            <li
              className={
                window.location.pathname == "/" ? "nav-list-active" : ""
              }
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <div style={{ display: "flex", alignItems: "center" }}>
              <li
                className={
                  window.location.pathname == "/explore"
                    ? "nav-list-active"
                    : ""
                }
                // onClick={() => navigate("/explore")}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Explore
              </li>
              {showDropdown ? (
                <IconContext.Provider
                  value={{
                    size: "1.4em",
                    color: "#fff",
                    className: "global-class-name",
                  }}
                >
                  <div
                    style={{
                      marginLeft: 3,
                      marginTop: 8,
                      cursor: "pointer",
                    }}
                    className="copy-icon"
                  >
                    <MdKeyboardArrowUp />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{
                    size: "1.4em",
                    color: "#fff",
                    className: "global-class-name",
                  }}
                >
                  <div
                    style={{
                      marginLeft: 3,
                      marginTop: 8,
                      cursor: "pointer",
                    }}
                    className="copy-icon"
                  >
                    <MdKeyboardArrowDown />
                  </div>
                </IconContext.Provider>
              )}
              {showDropdown && (
                <div className="nav-dropdown">
                  <div
                    className="dd-text"
                    onClick={() => {
                      navigate("/explore", { state: "nft" });
                      setShowDropdown(false);
                    }}
                  >
                    NFT
                  </div>
                  <div
                    className="dd-text"
                    onClick={() => {
                      navigate("/explore", { state: "creator" });
                      setShowDropdown(false);
                    }}
                  >
                    Creator
                  </div>
                  <div
                    className="dd-text"
                    onClick={() => {
                      navigate("/explore", { state: "category" });
                      setShowDropdown(false);
                    }}
                  >
                    Category
                  </div>

                </div>
              )}
            </div>
            <li
              className={
                window.location.pathname == "/create-nft"
                  ? "nav-list-active"
                  : ""
              }
              onClick={() => navigate("/create-nft")}
            >
              Create
            </li>

            <li
              className={
                window.location.pathname == "/profile" ? "nav-list-active" : ""
              }
              onClick={() => navigate("/profile")}
            >
              Profile
            </li>
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {window.location.pathname == "/register" && walletAddress ? (
            <button className="cnt-wallet">
              {getEllipsisTxt(walletAddress, 6)}
            </button>
          ) : walletAddress && authorizationToken ? (
            <button className="cnt-wallet" onClick={() => navigate("/profile")}>
              {getEllipsisTxt(walletAddress, 6)}
            </button>
          ) : (
            <button className="cnt-wallet" onClick={() => setModal2Open(true)}>
              Connect Wallet
            </button>
          )}

          {windowSize.width <= 960 && (
            <div onClick={handleClick}>
              {click ? (
                <IconContext.Provider
                  value={{
                    size: "1.2em",
                    color: "#CE00E6",
                    className: "global-class-name",
                  }}
                >
                  <div style={{ marginLeft: 15, cursor: "pointer" }}>
                    <MdOutlineClose />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{
                    size: "1.2em",
                    color: "#CE00E6",
                    className: "global-class-name",
                  }}
                >
                  <div style={{ marginLeft: 15, cursor: "pointer" }}>
                    : <GiHamburgerMenu />
                  </div>
                </IconContext.Provider>
              )}
            </div>
          )}
        </div>
      </div>

      <Modal
        className="popup-modal"
        title="Connect your wallet"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div style={{ margin: "50px auto 25px" }} className="cnt-wlt">
          <div>
            <img
              src={Metamask}
              alt=""
              className="w-icon"
              onClick={metamaskHandler}
            />
            <div style={{ color: "#fff", textAlign: "center" }}>Metamask</div>
          </div>
          <div>
            <img
              src={TrustWallet}
              alt=""
              className="w-icon"
              onClick={connectWallet}
            />
            <div style={{ color: "#fff", textAlign: "center" }}>
              TrustWallet
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        className="popup-modal"
        title=""
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <div
          style={{
            margin: "30px auto 25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="gradient-popup-text">
            {walletType === "metamask" && "Connected with Metamask"}
            {walletType === "trustwallet" && "Connected with Trustwallet"}
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 15 }}>
            {walletType === "metamask" && (
              <img
                src={Metamask}
                alt=""
                style={{ width: 35, height: 35, marginRight: 15 }}
              />
            )}
            {walletType === "trustwallet" && (
              <img
                src={TrustWallet}
                alt=""
                style={{ width: 35, height: 35, marginRight: 15 }}
              />
            )}
            <div
              id="wallet-address"
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 16,
                marginRight: 10,
                letterSpacing: 1,
              }}
            >
              {getEllipsisTxt(walletAddress, 8)}
            </div>

            <IconContext.Provider
              value={{
                size: "1.4em",
                color: "gray",
                className: "global-class-name",
              }}
            >
              <div
                style={{ marginLeft: 8, marginTop: 10, cursor: "pointer" }}
                className="copy-icon"
                onClick={() => {
                  copyToClipboard();
                }}
              >
                <MdContentCopy />
              </div>
            </IconContext.Provider>
          </div>
          <button className="disconnect-btn" onClick={diconnectWallet}>
            Disconnect
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
