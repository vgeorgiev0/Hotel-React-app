import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import secondPic from "../images/howTo/SecondPicture.jpg";
import thirdPic from "../images/howTo/ThirdPicture.jpg";
import beogradNis from "../images/howTo/Beograd-Nis.jpg";
import skopieNis from "../images/howTo/Skopie-Nis.jpg";
import skopieNis2 from "../images/howTo/SkopieN.jpg";
import SofiaNis from "../images/howTo/Sofia-Nis.jpg";
import { t } from 'i18next';

const HowToFindUs = ({ handleShowMap, showMapImages }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [belgradePressed, setBelgradePressed] = useState(false)
const [skp, setSkp] = useState(false);
const [sfp, setSfp] = useState(false)

  const fromBelgrade = () => {
    setBelgradePressed((prev) => !prev)
    setImgSrc(beogradNis);
     !belgradePressed && !skp && !sfp && handleShowMap();
  };
  const fromSofia = () => {
     setSfp((prev) => !prev);
     setImgSrc(SofiaNis);
     !belgradePressed && !skp && !sfp && handleShowMap();
  };

  const fromSkopie = () => {
    setSkp((prev) => !prev);
    setImgSrc(skopieNis);
     !belgradePressed && !skp && !sfp && handleShowMap();
  };

  console.log(imgSrc);

  return (
    <div className="containerNavigation">
      <div className="navigationButtons">
        <h3>
          {t("howToFindUs")} <PlaceIcon />
        </h3>
        <div className="navigationButtonsContainer">
          <button className="btn-primary" onClick={fromBelgrade}>
            {t("fromBelgrade")}
          </button>
          <button className="btn-primary" onClick={fromSofia}>
            {t("fromSofia")}
          </button>
          <button className="btn-primary" onClick={fromSkopie}>
            {t("fromSkopie")}
          </button>
        </div>
      </div>
      {!showMapImages && (
        <div>
          <div className="mapImages">
            <img style={{ height: "266px" }} src={imgSrc} alt="Destination" />
            {imgSrc === "/static/media/Skopie-Nis.00c63130.jpg" && (
              <img src={skopieNis2} alt="Skopie-Nis" />
            )}
            <img src={secondPic} alt="Tol" />
            <img src={thirdPic} alt="Path" />
          </div>

          <a
            className="btn-primary"
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://youtu.be/sGjOQ3-iwE4"
          >
            {t("findUsVideo")}
          </a>
        </div>
      )}
    </div>
  );
};

export default HowToFindUs;
