import React, { useContext, useEffect, useState } from "react";
import "./register.css";
import Heading from "../../container/Heading/Heading";
import ProfSkele from "../../assets/images/profileSkele.png";
import {
  getAppConfig,
  getS3UserUrl,
  userRegister,
} from "../../services/APIManager";
import { IconContext } from "react-icons";
import { RiImageAddFill } from "react-icons/ri";
import { web3GlobalContext } from "../../context/global-context";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState([]);

  const [userBio, setUserBio] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userProfileImg, setUserProfileImg] = useState("");
  const [username, setUsername] = useState();
  const [errorText, setErrorText] = useState();
  const [bannerImg, setUserBannerImg] = useState();
  const {
    walletAddress,
    chainGlobal,
    setAuthToken,
    setWalletAddress,
    setUserId,
    userName,
    setUserName,
  } = useContext(web3GlobalContext);

  useEffect(() => {
    loadAppConfig();
  }, [walletAddress]);

  const loadAppConfig = async () => {
    try {
      const appConfigRes = await getAppConfig();
      console.log("appConfigRes", appConfigRes);
      setTags(appConfigRes.data.tags);
    } catch (e) {
      console.log("getuser data", e);
      return;
    }
  };

  const onSelectTag = async (value) => {
    if (tagSelected.includes(value)) {
      setTagSelected((prevState) =>
        prevState.filter((prevItem) => prevItem !== value)
      );
    } else {
      setTagSelected([...tagSelected, value]);
    }
  };

  async function uploadPicture(e) {
    try {
      const assetRes = await getS3UserUrl(
        walletAddress,
        e.target.files[0].name
      );

      const formData = new FormData();
      formData.append("acl", "public-read");
      Object.entries(assetRes.data.fields).forEach(([field, value]) => {
        formData.append(field, value);
      });
      formData.append("file", e.target.files[0]);
      let postImgRes = await fetch(assetRes.data.url, {
        method: "POST",
        body: formData,
      });
      setUserProfileImg(`${assetRes.data.url}/${assetRes.data.fields.key}`);
    } catch (e) {
      console.log("error", e);
      return;
    }
  }

  async function uploadBanner(e) {
    try {
      const assetRes = await getS3UserUrl(
        walletAddress,
        e.target.files[0].name
      );

      const formData = new FormData();
      formData.append("acl", "public-read");
      Object.entries(assetRes.data.fields).forEach(([field, value]) => {
        formData.append(field, value);
      });
      formData.append("file", e.target.files[0]);
      let postImgRes = await fetch(assetRes.data.url, {
        method: "POST",
        body: formData,
      });
      setUserBannerImg(`${assetRes.data.url}/${assetRes.data.fields.key}`);
    } catch (e) {
      console.log("error", e);
      return;
    }
  }

  const userSignup = async () => {
    try {
      const data = {
        name: username ? username : "",
        user_id: userEmail ? userEmail : "",
        img: userProfileImg ? userProfileImg : "",
        bio: userBio ? userBio : "",
        banner: bannerImg ? bannerImg : "",
        address: walletAddress ? walletAddress : "",
        chain_id: chainGlobal ? Number(chainGlobal) : Number(0),
        preferences: tagSelected
      };
      if (!walletAddress) {
        setErrorText("Please connect your wallet!");
        return false;
      }
      let registerRes = await userRegister(data);
      console.log("registerRes", registerRes);
      if (registerRes.status) {

        localStorage.setItem("auth_token", registerRes.data.auth_token);
        localStorage.setItem("refresh_token", registerRes.data.refresh_token);
        setUserId(registerRes.data.user.id);
        setUserName({userName:registerRes.data.user.name});
        
        setUsername(registerRes.data.user.name);
        setAuthToken(registerRes.data.auth_token);
        window.location.reload();
        navigate("/profile", { state: registerRes.data.user.id });

      }
    } catch (error) {
      console.log("Error while register user", error);
      return false;
    }
  };

  return (
    <div className="register-sec">
      <Heading title="Register your Profile" />
      <div style={{ marginTop: 50 }} />
      <div className="flex">
        <div style={{ width: "50%", marginBottom: 25 }}>
          <div className="label-text" style={{ marginBottom: 25 }}>
            Profile Image
          </div>
          {userProfileImg ?
            <img src={userProfileImg} alt="" className="pro-image" />
            :
            <>
              <input
                type="file"
                className="FileUpload"
                accept=".jpg,.png,.gif"
                onChange={uploadPicture}
              />
              <img src={ProfSkele} alt="" className="prof-img" />
            </>
          }
        </div>
        <div style={{ width: "50%", marginBottom: 25 }}>
          <div className="label-text" style={{ marginBottom: 5 }}>
            Banner Image
          </div>
          {bannerImg ?
            <div>
              <img src={bannerImg} alt="" className="banner-img" />
            </div>
            :
            <div className="banner-image">
              <input
                type="file"
                className="FileUpload"
                accept=".jpg,.png,.gif"
                onChange={uploadBanner}
              />
              <IconContext.Provider
                value={{
                  size: "3em",
                  color: "#cbccd19c",
                  className: "global-class-name",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    cursor: "pointer",
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RiImageAddFill />
                </div>
              </IconContext.Provider>
            </div>}
        </div>
      </div>
      <div className="flex">
        <div className="s-textbox">
          <div className="label-text">Name</div>
          <input
            placeholder="Enter your username"
            className="textfield-input"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="s-textbox">
          <div className="label-text">UserId:</div>
          <input
            placeholder="Enter your email address"
            className="textfield-input"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
        </div>
      </div>

      <div className="flex">
        <div style={{ width: "50%" }}>
          <div className="l-textbox">
            <div className="label-text">Bio</div>
            <textarea
              className="textfield-input"
              rows="5"
              cols="50"
              placeholder="Provide a brief description about yourself and your assets "
              onChange={(e) => setUserBio(e.target.value)}
              value={userBio}
            ></textarea>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className="l-textbox">
            <div className="label-text">Preferred Tags</div>
            <div
              className="tags"
              style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}
            >
              {tags?.map((item, index) => {
                return (
                  <div
                    className="single-tag"
                    onClick={() => {
                      onSelectTag(item.name);
                    }}
                    style={{
                      background: tagSelected.includes(item?.name)
                        ? "#fff"
                        : "transparent",
                      color: tagSelected.includes(item?.name) ? "#000" : "#fff",
                    }}

                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="label-text">External Link</div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "15px 0",
          }}
        >
          <input
            placeholder="Website Name 1"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: "30%",
              margin: 0,
            }}
          />
          <input
            placeholder="Website Link 1"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              width: "59%",
              margin: 0,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "15px 0",
          }}
        >
          <input
            placeholder="Website Name 2"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: "30%",
              margin: 0,
            }}
          />
          <input
            placeholder="Website Link 2"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              width: "59%",
              margin: 0,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "15px 0",
          }}
        >
          <input
            placeholder="Website Name 3"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: "30%",
              margin: 0,
            }}
          />
          <input
            placeholder="Website Link 3"
            className="textfield-input"
            style={{
              marginBottom: 0,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              width: "59%",
              margin: 0,
            }}
          />
        </div>
      </div>
      <button className="register-btn" onClick={userSignup}>
        Register
      </button>
    </div>
  );
}

export default Register;
