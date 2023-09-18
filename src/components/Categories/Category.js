import React, { useContext,useState,useEffect } from "react";
import "./category.css";
import Heading from "../../container/Heading/Heading";
import Art from "../../assets/images/cat1.jpg";
import Nature from "../../assets/images/cat2.jpg";
import Music from "../../assets/images/cat3.jpg";
import Cartoon from "../../assets/images/cat5.jpg";
import { web3GlobalContext } from "../../context/global-context";
import { getAppConfig } from "../../services/APIManager";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate()
  const { walletAddress, chainGlobal } = useContext(web3GlobalContext);
  const [tags, setTags] = useState([]);

    const loadInfo = async () => {
    try {
      let filterRes = await getAppConfig();
      setTags(filterRes.data.tags);
    } catch (error) {
      console.log("error", error);

      return false;
    }
  };
    useEffect(() => {
    if (walletAddress) {
      loadInfo();
    }
  }, [walletAddress]);


  function onViewMoreClick() {
    navigate(`/explore`, { state: "category" });
  }
  return (
    <div className="exp-cat">
      <Heading title="Top Categories" />

      <div className="all-cat">
      <div className="single-cat" >
          <img src={Art} alt="" className="cat-img" />
          <div className="cat-name">Art</div>
        </div>
      <div className="single-cat" >
          <img src={Nature} alt="" className="cat-img" />
          <div className="cat-name">Nature</div>
        </div>
      <div className="single-cat" >
          <img src={Cartoon} alt="" className="cat-img" />
          <div className="cat-name">Music</div>
        </div>
      <div className="single-cat" >
          <img src={Music} alt="" className="cat-img" />
          <div className="cat-name">Cartoon</div>
        </div>
       </div>
       <div className="view-btn">
          <button className="view-more" onClick={onViewMoreClick}>
            View More <span style={{ marginLeft: 5 }}> &rarr; </span>
          </button>
        </div>
      </div>
  
  );
}

export default Category;
