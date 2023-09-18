import React, { useState,useEffect, useContext } from "react";
import "./createNft.css";
import Heading from "../../container/Heading/Heading";
import { IconContext } from "react-icons";
import { RiImageAddFill } from "react-icons/ri";
import { getAppConfig, getS3UserUrl } from "../../services/APIManager";
import NotFound from "../../assets/images/notFound.png";
import { uuid } from "uuidv4";
import { web3GlobalContext } from "../../context/global-context";

let asset_id = uuid();
function CreateNft(props) {
  const [nftName, setNftName] = useState();
  const [description, setDescription] = useState();
  const [imageUploading, setImageUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState();
  const [assetType, setAssetType] = useState("");
  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState([]);
  const auth_token = localStorage.getItem("auth_token");
  const { walletAddress, chainGlobal } = useContext(web3GlobalContext);
  
  async function uploadPicture(e) {
    try {
      console.log({ picturePreview: URL.createObjectURL(e.target.files[0]) });
      setImageUploading(true);
      const assetRes = await getS3UserUrl(
        auth_token,
        asset_id,
        e.target.files[0].name
      );
      const formData = new FormData();
      formData.append("acl", "public-read");
      // formData.append("Content-Type", e.target.files[0].type);
      Object.entries(assetRes.data.fields).forEach(([field, value]) => {
        formData.append(field, value);
      });
      formData.append("file", e.target.files[0]);
      let postImgRes = await fetch(assetRes.data.url, {
        method: "POST",
        body: formData,
      });
      console.log("postImgRes", postImgRes);
      setPreviewImage(`${assetRes.data.url}/${assetRes.data.fields.key}`);
      setImageUploading(false);
    } catch (e) {
      console.log("error", e);
      return;
    }
  }
  useEffect(() => {
    if (previewImage) {
      function isImageOrVideo(url) {
        const imageExtensions = ["jpg", "jpeg", "png", "gif"];
        const videoExtensions = ["mp4", "webm", "ogg"]; // Adjust the list as needed

        const extension = url.split(".").pop().toLowerCase();

        if (imageExtensions.includes(extension)) {
          return "image";
        } else if (videoExtensions.includes(extension)) {
          return "video";
        } else {
          return "unknown";
        }
      }
      console.log("previewImage", previewImage);
      const _assetType = isImageOrVideo(previewImage);
      setAssetType(_assetType);
      console.log("_assetType", _assetType);
    }
  }, [previewImage]);

  const loadInfo = async () => {
    try {
      let filterRes = await getAppConfig();
      setTags(filterRes.data.tags);
    } catch (error) {
      console.log("error", error);

      return false;
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

  useEffect(() => {
    if (walletAddress) {
      loadInfo();
    }
  }, [walletAddress]);
  return (
    <div className="create">
      <Heading title="Create New NFT" />
      <div style={{ marginTop: 25 }} />
      <div className="owned" style={{ marginBottom: 15 }}>
        <span style={{ color: "#CE00E6" }}>*</span> Required fields
      </div>
      <div className="c-sec">
        <div className="image-cont">
          <div className="textfield-head">
            Image, Video, Audio, or 3D Model *
          </div>
          <div className="textfield-desc ">
            {" "}
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </div>
          {!previewImage ? (
            <div className="image-file">
              <input
                type="file"
                className="FileUpload"
                accept=".jpg,.png,.gif"
                onChange={uploadPicture}
              />
              {imageUploading ? (
                <div
                  style={{
                    height: "100%",
                    cursor: "pointer",
                    width: "100%",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  Uploading...
                </div>
              ) : (
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
              )}{" "}
            </div>
          ) : (
            <div className="prev-cont">
              {assetType === "image" ? (
                <img src={previewImage} alt="" className="prev-img" />
              ) : assetType === "video" ? (
                <>
                  <video controls className="prev-img">
                    <source src={previewImage} type="video/mp4" />
                  </video>
                </>
              ) : (
                <img src={NotFound} alt="" className="prev-img" />
              )}
            </div>
          )}
          <div className="tags">
          {tags?.map((item, index) => {
              return (
                <div
                  className="single-tag"
                  onClick={() => {
                    onSelectTag(item);
                  }}
                  style={{
                    background: tagSelected.includes(item)
                      ? "#fff"
                      : "transparent",
                    color: tagSelected.includes(item) ? "#000" : "#fff",
                  }}
                >
                  {item.name}
                </div>
              );
            })}

          </div>
        </div>
        <div className="data-cont">
          <div className="textfield-head">Name *</div>
          <input
            placeholder="Nft Name"
            className="textfield-input"
            onClick={(e) => setNftName(e.target.value)}
            value={nftName}
          />
          <div className="textfield-head">Description </div>
          <div className="textfield-desc">
            {" "}
            The description will be included on the item's detail page
            underneath its image.{" "}
          </div>
          <textarea
            className="textfield-input"
            rows="5"
            cols="50"
            placeholder="Provide a detail description of your NFT"
            onClick={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>

          <div className="textfield-head">External Link </div>
          <div className="textfield-desc">
            {" "}
            3SuiteNFT will include a link to this URL on this item's detail
            page, so that users can click to learn more about it. You are
            welcome to link to your own webpage with more details.
          </div>
          <input
            placeholder="https://3suitenft.com/item/123"
            className="textfield-input"
          />

          <div className="textfield-head">Royalties </div>
          <div className="textfield-desc">
            {" "}
            Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
          </div>
          <input placeholder="10" className="textfield-input" />
          <button className="cnt-wallet" style={{ width: "150px" }}>
            Create NFT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNft;
