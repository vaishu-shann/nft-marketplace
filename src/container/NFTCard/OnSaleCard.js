import React from 'react';
import "./nftCard.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { IconContext } from "react-icons";

function OnSaleCard({Image}) {
    return (
        <div className="nft-card" style={{width:'auto',margin:"1px 20px 20px 0"}}>
        <img src={Image} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="owned">0.753ETH</div>
        </div>
    
        <div style={{ marginTop: 8 }} />
        <div className="desc-sec">
        
            <div className="bid-cta">
              <div className="view-his">View Detail</div>
            </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconContext.Provider
              value={{
                size: "1em",
                color: "#fff",
                className: "global-class-name",
              }}
            >
              <div style={{ marginRight: 5, cursor: "pointer" }}>
                <BiRefresh />
              </div>
            </IconContext.Provider>
            <div className="view-his">View History</div>
          </div>
        </div>
      </div>
    );
}

export default OnSaleCard;