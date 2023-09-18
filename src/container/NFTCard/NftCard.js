import React from "react";
import "./nftCard.css";
import { BsHandbagFill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { IconContext } from "react-icons";
import NFT1 from "../../assets/images/n1.jpg";
import NFT2 from "../../assets/images/n2.jpg";
import NFT3 from "../../assets/images/n3.jpg";
import NFT4 from "../../assets/images/n4.jpg";
import NFT5 from "../../assets/images/n5.jpg";
import NFT6 from "../../assets/images/n6.jpg";
import NFT7 from "../../assets/images/n7.jpg";
import NFT8 from "../../assets/images/n8.jpg";
import NFT9 from "../../assets/images/n9.jpg";
import NFT10 from "../../assets/images/n10.jpg";
import NFT11 from "../../assets/images/n11.jpg";
import NFT12 from "../../assets/images/n12.jpg";

import Image1 from "../../assets/images/s1.jpg";
import Image2 from "../../assets/images/s2.jpg";
import Image3 from "../../assets/images/s3.jpg";
import Image4 from "../../assets/images/s4.jpg";
import Image5 from "../../assets/images/s5.jpg";
import Image6 from "../../assets/images/s6.jpg";
import Image7 from "../../assets/images/s7.jpg";
import { Tooltip } from "antd";
import useWindowSize from "../../utils/windowSize";

function NftCard(props) {
  const windowSize = useWindowSize();
  return (
    <>
      <div className="nft-card">
        <img src={NFT1} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="buy-btn">Mint</div>
        </div>
        <div className="desc-sec">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Image7} alt="" className="user-img" />
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
      <div className="nft-card">
        <img src={NFT2} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="buy-btn">Mint</div>
        </div>
        <div className="desc-sec">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Image6} alt="" className="user-img" />
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
      <div className="nft-card">
        <img src={NFT3} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="buy-btn">Mint</div>
        </div>
        <div className="desc-sec">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Image5} alt="" className="user-img" />
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
      <div className="nft-card">
        <img src={NFT4} alt="" className="nft-img" />
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
      {windowSize.width >= 960  && 
      <>
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
      <div className="nft-card">
        <img src={NFT9} alt="" className="nft-img" />
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
      <div className="nft-card">
        <img src={NFT10} alt="" className="nft-img" />
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
      <div className="nft-card">
        <img src={NFT11} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="buy-btn">Mint</div>
        </div>
        <div className="desc-sec">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Image5} alt="" className="user-img" />
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
      <div className="nft-card">
        <img src={NFT12} alt="" className="nft-img" />
        <div className="desc-sec">
          <div className="name">NFT Name / Anything</div>
          <div className="buy-btn">Mint</div>
        </div>
        <div className="desc-sec">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Image7} alt="" className="user-img" />
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
        <div className="desc-sec">
          <Tooltip title="Coming Soon" placement="right">
            {" "}
            <div className="bid-cta">
              <IconContext.Provider
                value={{
                  size: "0.8em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginRight: 8 }}>
                  <BsHandbagFill />
                </div>
              </IconContext.Provider>
              <div className="view-his">Make Bid</div>
            </div>
          </Tooltip>
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
      </>
      }
    </>
  );
}

export default NftCard;
