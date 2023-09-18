import React from "react";
import "./creatorCard.css";
import Image1 from "../../assets/images/s1.jpg";
import Image2 from "../../assets/images/s2.jpg";
import Image3 from "../../assets/images/s3.jpg";
import Image4 from "../../assets/images/s4.jpg";
import Image5 from "../../assets/images/s5.jpg";

function CreatorCard(props) {
  return (
    <>
      <div className="c-card">
        <img src={Image1} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.315ETH</div>
        </div>
      </div>
      <div className="c-card">
        <img src={Image2} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.289ETH</div>
        </div>
      </div>
      <div className="c-card">
        <img src={Image3} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.015ETH</div>
        </div>
      </div>
      <div className="c-card">
        <img src={Image4} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.525ETH</div>
        </div>
      </div>
      <div className="c-card">
        <img src={Image5} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.034ETH</div>
        </div>
      </div>
      <div className="c-card">
        <img src={Image4} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.525ETH</div>
        </div>
      </div>
      <div className="c-card">
        <img src={Image3} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.015ETH</div>
        </div>
      </div>
      <div className="c-card">
        <img src={Image4} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.525ETH</div>
        </div>
      </div>
      <div className="c-card">
        <img src={Image1} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.315ETH</div>
        </div>
      </div>
      <div className="c-card">
        <img src={Image2} alt="" className="creator-img" />
        <div className="creater-right">
          <div className="c-name">Creator Name</div>
          <div className="c-eth">0.289ETH</div>
        </div>
      </div>
    </>
  );
}

export default CreatorCard;
