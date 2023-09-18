import React, { useState, useContext, useEffect } from "react";
import "./topCreators.css";
import Heading from "../../../container/Heading/Heading";
import { web3GlobalContext } from "../../../context/global-context";
import { getTopCreators } from "../../../services/APIManager";
import NotFound from "../../../assets/images/notFound.png";
import { useNavigate } from "react-router-dom";
import CreatedNFTCard from "../../../container/NFTCard/CreatedNFTCard";
import CreatorCard from "../../../container/Creator/CreatorCard";

function TopCreator(props) {
  const navigate = useNavigate();
  const [topCreator, setTopCreator] = useState();
  const { walletAddress } = useContext(web3GlobalContext);

  const TopCreator = async () => {
    try {
      const creatorRes = await getTopCreators();
      console.log("creatorRes", creatorRes);
      setTopCreator(creatorRes.data);
    } catch (e) {
      console.log("error in getting top creator", e);
      return;
    }
  };

  useEffect(() => {
      TopCreator();
  }, [walletAddress]);

  function onCreatorClick(id) {
    navigate(`/profile`, { state: id });
  }

  function onViewMoreClick() {
    navigate(`/explore`,{ state: "creator" });
  }

  return (
    <div className="top-creator">
      <Heading title="Top Creators" />
      <div className="creator-list">
        {/* {topCreator?.map((item, index) => {
          return (
            <div className="c-card" onClick={() => onCreatorClick(item.id)}>
              <img
                src={item.profile.img ? item.profile.img : NotFound}
                alt=""
                className="creator-img"
              />
              <div className="creater-right">
                <div className="c-name">{item.name}</div>
                <div className="c-eth">{item.user_id}</div>
              </div>
            </div>
          );
        })} */}
        <CreatorCard/>
      </div>
      <div className="view-btn">
        <button className="view-more" onClick={onViewMoreClick}>
          View More <span style={{ marginLeft: 5 }}> &rarr; </span>
        </button>
      </div>
    </div>
  );
}

export default TopCreator;
