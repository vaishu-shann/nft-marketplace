import React from "react";
import "./banner.css";
import HomeImage from "../../../assets/images/home1.png";
import { MdRocketLaunch } from "react-icons/md";
import { BsSendPlusFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

function Banner(props) {
  const navigate = useNavigate()
  return (
    <div className="banner-screen">
      <div className="home-left">
        <div className="heading">Unlock Your </div>
        <div className="heading-span"> Digital Creativity, </div>
        <div className="heading">Embrace NFTs Today!</div>
        <div className="description">
        3Suite | Where Creativity Meets the Blockchain: Your NFT Playground
        </div>
        <div className="cta-home">
          <div className="action-cta" onClick={()=>navigate("/explore")}>
            <IconContext.Provider
              value={{
                size: "1em",
                color: "#fff",
                className: "global-class-name",
              }}
            >
              <div>
                <MdRocketLaunch />
              </div>
            </IconContext.Provider>
            <div className="cta-text">Explore</div>
          </div>
          <div className="action-cta" onClick={()=>navigate("/create-nft")}>
            <IconContext.Provider
              value={{
                size: "1em",
                color: "#fff",
                className: "global-class-name",
              }}
            >
              <div>
                <BsSendPlusFill />
              </div>
            </IconContext.Provider>
            <div className="cta-text">Create</div>
          </div>
        </div>
      </div>
      <div className="home-right">
        <img src={HomeImage} alt="" className="h-img" />
      </div>
    </div>
  );
}

export default Banner;
