import React, { useState, useEffect } from "react";
import "./topNft.css";
import Heading from "../../../container/Heading/Heading";
import NotFound from "../../../assets/images/notFound.png";
import { getTopAssets } from "../../../services/APIManager";
import { useNavigate } from "react-router-dom";
import NFT5 from "../../../assets/images/n5.jpg";
import NFT6 from "../../../assets/images/n6.jpg";
import NFT7 from "../../../assets/images/n7.jpg";
import NFT8 from "../../../assets/images/n8.jpg";

import Image1 from "../../../assets/images/s1.jpg";
import Image2 from "../../../assets/images/s2.jpg";
import Image3 from "../../../assets/images/s3.jpg";
import Image4 from "../../../assets/images/s4.jpg";

function TopNft(props) {
  const navigate = useNavigate();
  const [topAssets, setTopAssets] = useState();



  function onViewMoreClick() {
    navigate(`/explore`, { state: "nft" });
  }

  return (
    <>
      <div className="t-nft">
        <Heading title="Top NFTs" />
        <div className='nft-colln'>
        <div className="nft-card">
        <img src={NFT5} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="buy-btn">Mint</div>
        </div>
        <div className="desc-sec">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Image3} alt="" className="user-img" />
            <div>
              <div className="owned">Owned By</div>
              <div className="creator-name">Creator name</div>
            </div>
          </div>
          <div>
            <div className="owned">Price</div>
            <div className="creator-name">2.75ETH</div>
          </div>
        </div>
        <div style={{ marginTop: 8 }} />
      </div>
      <div className="nft-card">
        <img src={NFT6} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="buy-btn">Mint</div>
        </div>
        <div className="desc-sec">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Image2} alt="" className="user-img" />
            <div>
              <div className="owned">Owned By</div>
              <div className="creator-name">Creator name</div>
            </div>
          </div>
          <div>
            <div className="owned">Price</div>
            <div className="creator-name">2.75ETH</div>
          </div>
        </div>
        <div style={{ marginTop: 8 }} />

      </div>
        <div className="nft-card">
        <img src={NFT7} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="buy-btn">Mint</div>
        </div>
        <div className="desc-sec">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Image1} alt="" className="user-img" />
            <div>
              <div className="owned">Owned By</div>
              <div className="creator-name">Creator name</div>
            </div>
          </div>
          <div>
            <div className="owned">Price</div>
            <div className="creator-name">2.75ETH</div>
          </div>
        </div>
        <div style={{ marginTop: 8 }} />

      </div>
      <div className="nft-card">
        <img src={NFT8} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="buy-btn">Mint</div>
        </div>
        <div className="desc-sec">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Image4} alt="" className="user-img" />
            <div>
              <div className="owned">Owned By</div>
              <div className="creator-name">Creator name</div>
            </div>
          </div>
          <div>
            <div className="owned">Price</div>
            <div className="creator-name">2.75ETH</div>
          </div>
        </div>
        <div style={{ marginTop: 8 }} />

      </div>
        </div>
        <div className="view-btn">
        <button className="view-more" onClick={onViewMoreClick}>
          View More <span style={{marginLeft:5}}>  &rarr; </span>
        </button>       
      </div>
        </div>


    </>
  );
}

export default TopNft;
