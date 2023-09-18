import React from "react";
import "./nftCard.css";

function OwnedNftCard({ Image }) {
  return (

      <div className="nft-card" style={{width:'auto',margin:"1px 20px 20px 0"}}>
        <img src={Image} alt="" className="nft-img" />
        <div className="desc-sec">

          <div className="name">NFT Name</div>
          
          <div className="owned">0.765ETH</div>
        </div>
      </div>

  );
}

export default OwnedNftCard;
