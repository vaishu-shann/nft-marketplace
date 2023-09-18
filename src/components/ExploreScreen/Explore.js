import React, { useState, useEffect, useContext } from "react";
import "./explore.css";
import LoadingGif from "../../assets/images/loading.gif";
import { useLocation, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {
  getAllAssets,
  getAppConfig,
  getTopCreators,
  sortData,
} from "../../services/APIManager";
import NotFound from "../../assets/images/notFound.png";
import { web3GlobalContext } from "../../context/global-context";
import Heading from "../../container/Heading/Heading";
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

function Explore(props) {
  const navigate = useNavigate();
  const { walletAddress } = useContext(web3GlobalContext);
  const location = useLocation();
  const { state } = location;
  console.log("state value" , state)

  const [openFilter, setOpenFilter] = useState(false);
  const [allAssets, setAllAssets] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState(["Anime", "Photography" , "Nature" , "Cartoon" , "Music"]);
  const [selectedTags, setSelectedTags] = useState("");
  const [tagSel, setTagSel] = useState(false);
  const [filter, setFilter] = useState(null);
  const [topCreator, setTopCreator] = useState();

  const [exploreType, setExploreType] = useState(state?state : "nft");
  async function onClickSorting(e) {
    console.log("__________", e.target.value);
    setFilter(e.target.value);
  }
  return (
    <div className="explore">
    <div className="filter-section">
        <Heading title="Explore" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <select className="filterBtn" onChange={onClickSorting}>
            <option selected value="desc">
              All
            </option>
            <option value="desc">Recently Created</option>
            <option value="asc"> Created Ago</option>
          </select>
          <div className="filterBtn" onClick={() => setOpenFilter(!openFilter)}>
            <div className="f-text">Select Filters</div>
            {!openFilter ? (
              <IconContext.Provider
                value={{
                  size: "1em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginTop: 5, marginLeft: 8 }}>
                  <MdKeyboardArrowDown />
                </div>
              </IconContext.Provider>
            ) : (
              <IconContext.Provider
                value={{
                  size: "1em",
                  color: "#fff",
                  className: "global-class-name",
                }}
              >
                <div style={{ marginTop: 5, marginLeft: 8 }}>
                  <MdKeyboardArrowUp />
                </div>
              </IconContext.Provider>
            )}
          </div>
          {openFilter && (
            <div className="f-dd">
              {tags?.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      paddingBottom: 5,
                    }}
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                     
                     
                    />
                    <div className="f-text"> {item.name}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div> 
      </div>
    <div className="exp-sec">
    <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT4} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={Image3} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT3} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT2} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
    <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT5} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT6} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT7} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT8} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT9} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT10} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT11} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
      <div className="single-exp" onClick={()=>navigate("/nft/id")}>
        <img src={NFT12} alt="" className="exp-img" />
        <div className="name">NFT Name / Anything</div>

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
        <div className="buyBtn">View More</div>
      </div>
    </div>

    {/* <SingleNft/> */}
  </div>
  );
}

export default Explore;
