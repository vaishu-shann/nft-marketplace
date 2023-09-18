import React, { useContext, useState, useEffect } from "react";
import "./profile.css";
import CoverImage from "../../assets/images/profilebg.jpg";
import ProfileImage from "../../assets/images/n8.jpg";
import { getEllipsisTxt } from "../../utils/formatter";
import NFT2 from "../../assets/images/n2.jpg";
import NFT3 from "../../assets/images/n3.jpg";
import NFT5 from "../../assets/images/n5.jpg";
import NFT6 from "../../assets/images/n6.jpg";
import NFT9 from "../../assets/images/n9.jpg";
import NFT11 from "../../assets/images/n11.jpg";
import NFT12 from "../../assets/images/n12.jpg";
import Image1 from "../../assets/images/s1.jpg";
import Image2 from "../../assets/images/s2.jpg";
import Image3 from "../../assets/images/s3.jpg";
import Image5 from "../../assets/images/s5.jpg";
import NotFound from "../../assets/images/notFound.png";
import OwnedNftCard from "../../container/NFTCard/OwnedNftCard";
import CreatedNFTCard from "../../container/NFTCard/CreatedNFTCard";
import OnSaleCard from "../../container/NFTCard/OnSaleCard";
import { IconContext } from "react-icons";
import { BsInstagram, BsBehance } from "react-icons/bs";
import { TbBrandAdobe } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { web3GlobalContext } from "../../context/global-context";
import { getCreatedAssets, getOwnedAssets, getUserData } from "../../services/APIManager";
import { useLocation } from "react-router-dom";
import { BiRefresh } from "react-icons/bi";

function Profile(props) {
  const { state } = useLocation();
  const [acTab, setAcTab] = useState("1");
  const navigate = useNavigate();
  const { walletAddress, chainGlobal, userId } = useContext(web3GlobalContext);
  const [userData, setUserData] = useState();
  const [userCreated, setUserCreated] = useState([]);
  // const [userOwned, setUserOwned] = useState([]);

  useEffect(() => {
    getUserdata();
  }, [userId]);


const user_created = [
  {id:1, image : `${NFT11}` , name :"Atlasian"},
  {id:2, image : `${NFT12}` , name :"Starwar"},
  {id:3, image : `${NFT9}` , name :"Cosmos"},
  {id:4, image : `${NFT6}` , name :"SPacewar"},
]
const userOwned = [
  {id:1, image : `${NFT2}` , name :"Avatar"},
  {id:2, image : `${NFT3}` , name :"Kaybe"},
  {id:3, image : `${NFT5}` , name :"Masko"},
]
const userSale = [
  {id:1, image : `${NFT2}` , name :"Avatar"},
]

  const getUserdata = async () => {
    try {
      let userRes;
      let assetRes;
      let ownAssetRes;
      if (state) {
        userRes = await getUserData(state);
        assetRes = await getCreatedAssets(userRes?.data?.address);
        ownAssetRes = await getOwnedAssets(userRes?.data?.address);
      } else {
        userRes = await getUserData(userId);
        assetRes = await getCreatedAssets(walletAddress);
        ownAssetRes = await getOwnedAssets(walletAddress);
      }

      setUserData(userRes);
      setUserCreated(assetRes.data);
      // setUserOwned(ownAssetRes.data);

      console.log("userRes", userRes);
    } catch (e) {
      console.log("getuser data", e);
      return;
    }
  };

  const moveSingleNFTPage = async (id) => {
    navigate(`/nft/${id}`, { state: id })
  }
  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };
  return (
    <div className="profile-sec">
      <div style={{ position: "relative" }}>
        <img
          src={
            userData?.data?.profile?.banner
              ? userData?.data?.profile?.banner
              : CoverImage
          }
          alt=""
          className="profile-bg"
        />
        <img
          src={
            userData?.data?.profile?.img
              ? userData?.data?.profile?.img
              : NotFound
          }
          alt=""
          className="user-profile"
        />
      </div>
      <div className="user-desc">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="user-name">{userData?.data?.name}</div>
        </div>
        <div className="user-wallet">
          Address:{" "}
          <span style={{ color: "#CE00E6", fontSize: 12 }}>
            {getEllipsisTxt(walletAddress, 9)}
          </span>
        </div>
      </div>
      <div className="mob-res" style={{ display: "flex", alignItems: "center", margin: "5px 0 0" }}>
        <div className="nft-desc" style={{ marginTop: 0, color: "#fff", fontSize: 14 }}>
          @vaishu_shann
        </div>
        <div style={{ marginLeft: 5 }} />
        <IconContext.Provider
          value={{
            size: "1em",
            color: "#fff",
            className: "global-class-name",
          }}
        >
          <div style={{ marginLeft: 10, marginTop: 8 }}>
            <BsInstagram />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            size: "1em",
            color: "#fff",
            className: "global-class-name",
          }}
        >
          <div style={{ marginLeft: 10, marginTop: 8 }}>
            <TbBrandAdobe />
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            size: "1em",
            color: "#fff",
            className: "global-class-name",
          }}
        >
          <div style={{ marginLeft: 10, marginTop: 8 }}>
            <BsBehance />
          </div>
        </IconContext.Provider>
      </div>

      <div className="nft-desc" style={{ marginTop: 5 }}>
        {userData?.data?.bio}
      </div>
      <div className="tab-sec">
        <div className="tab-head">
          <div
            className={acTab === "1" ? "head-text-active" : "head-text"}
            onClick={() => setAcTab("1")}
          >
            Created
          </div>
          <div
            className={acTab === "2" ? "head-text-active" : "head-text"}
            onClick={() => setAcTab("2")}
          >
            Owned
          </div>
          <div
            className={acTab === "3" ? "head-text-active" : "head-text"}
            onClick={() => setAcTab("3")}
          >
            On Sale
          </div>
          <div
            className={acTab === "4" ? "head-text-active" : "head-text"}
            onClick={() => setAcTab("4")}
          >
            Activity
          </div>
        </div>

        {acTab === "1" && (
          <div className="owned-sec">
            {user_created?.map((item, index) => {
              return (

                <div className="nft-card" onClick={() => moveSingleNFTPage(item.id)}>
                  <img src={item.image  } alt="" className="nft-img" />
                  <div className="desc-sec">
                    <div>
                      <div className="name">{item.name}</div>
                      <div className="owned">0.765ETH</div>
                    </div>
                    <div className="buy-btn">Sell</div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
        {acTab === "2" && (
          <div className="owned-sec">
            {userOwned?.map((item, index) => {
              return (
                <div className="nft-card" style={{  margin: "1px 20px 20px 0" }}>
                  <img src={item.image  } alt="" className="nft-img" />
                  <div className="desc-sec">

                    <div className="name">{item.name}</div>

                    <div className="owned">0.765ETH</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {acTab === "3" && (
          <div className="owned-sec">
            {userSale?.map((item, index) => {
                return (
                  <div className="nft-card" style={{margin: "1px 20px 20px 0" }}>
                    <img src={item.image  } alt="" className="nft-img" />
                    <div className="desc-sec">
                      <div className="name">{item.name}</div>
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
           
            })}
          </div>
        )}

        {acTab === "4" && (
          <div className="activity-width">
            <div className="single-activity">
              <img src={Image1} alt="" className="act-img" />
              <div className="act-data">
                <div className="type">Bought NFT</div>
                <div className="act-wallet">
                  Purchased from{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    {getEllipsisTxt(
                      "0x72bCE2654500B89FC7876b1973636Ab116Da7C8A",
                      9
                    )}
                  </span>{" "}
                  for{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    1.35ETH
                  </span>
                </div>
              </div>
            </div>
            <div className="single-activity">
              <img src={Image3} alt="" className="act-img" />
              <div className="act-data">
                <div className="type">Sold NFT</div>
                <div className="act-wallet">
                  Purchased by{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    {getEllipsisTxt(
                      "0xC4f4Bc698c3090A5aBC23dfCBc50227C25895E9a",
                      9
                    )}
                  </span>{" "}
                  for{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    0.754ETH
                  </span>
                </div>
              </div>
            </div>
            <div className="single-activity">
              <img src={Image5} alt="" className="act-img" />
              <div className="act-data">
                <div className="type">Listed NFT</div>
                <div className="act-wallet">
                  Listed by{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    {getEllipsisTxt(
                      "0xC4f4Bc698c3090A5aBC23dfCBc50227C25895E9a",
                      9
                    )}
                  </span>{" "}
                  for{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    2.121ETH
                  </span>
                </div>
              </div>
            </div>
            <div className="single-activity">
              <img src={Image2} alt="" className="act-img" />
              <div className="act-data">
                <div className="type">Bought NFT</div>
                <div className="act-wallet">
                  Purchased from{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    {getEllipsisTxt(
                      "0x72bCE2654500B89FC7876b1973636Ab116Da7C8A",
                      9
                    )}
                  </span>{" "}
                  for{" "}
                  <span style={{ color: "#CE00E6", fontWeight: 500 }}>
                    1.35ETH
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
