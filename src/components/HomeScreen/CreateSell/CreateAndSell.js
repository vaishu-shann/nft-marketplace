import React from "react";
import "./createSell.css";
import { IconContext } from "react-icons";
import { RiWallet3Fill ,RiUploadCloudFill} from "react-icons/ri";
import { ImPriceTags} from "react-icons/im";
import Heading from "../../../container/Heading/Heading";

function CreateAndSell(props) {
  return (
    <div className="cs-sec">
      <Heading title="Create and  Sell" />
      <div className="create-sell">
        <div className="container">
          <IconContext.Provider
            value={{
              size: "1.3em",
              color: "#fff",
              className: "global-class-name",
            }}
          >
            <div className="icon">
              <RiWallet3Fill />
            </div>
          </IconContext.Provider>
          <div className="Heading">Set up your Wallet</div>
          <div className="Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae
          </div>
        </div>
        <div className="container">
          <IconContext.Provider
            value={{
              size: "1.3em",
              color: "#fff",
              className: "global-class-name",
            }}
          >
            <div className="icon">
              <RiUploadCloudFill />
            </div>
          </IconContext.Provider>
          <div className="Heading">Add your NFT</div>
          <div className="Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae
          </div>
        </div>
        <div className="container">
          <IconContext.Provider
            value={{
              size: "1.3em",
              color: "#fff",
              className: "global-class-name",
            }}
          >
            <div className="icon">
              <ImPriceTags />
            </div>
          </IconContext.Provider>
          <div className="Heading">Sell your NFT</div>
          <div className="Description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAndSell;
