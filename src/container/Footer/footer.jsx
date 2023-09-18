import React, { useContext } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { IconContext } from "react-icons";
//
import "./footer.css";

function Footer(props) {

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer-cont">
      <div className="top-sec">
        <div className="social-icons"></div>
        <IconContext.Provider
          value={{
            size: "1.2em",
            color: "#f8f7f3",
            className: "global-class-name",
          }}
        >
          <div className="top-icon" onClick={backToTop}>
            <BiArrowToTop />
          </div>
        </IconContext.Provider>
      </div>
      <div className="b-bottom" />
      <div style={{ marginBottom: 10 }} />

      <div className="copyRights">
        <div className="sub-text">footer.copyrights.com</div>
        <div className="sub-text">support@godl.com</div>
      </div>
      <div style={{ marginBottom: 10 }} />
    </div>
  );
}

export default Footer;
