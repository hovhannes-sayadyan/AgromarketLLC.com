import { memo } from "react";
import "./about.scss";

function About() {
  return (
    <div className="AboutImgDiv">
      <div className="AboutDiv">
        <h1 className="AboutTitle">ABOUT US</h1>
        <p className='AboutP'>
          WE HAVE BEEN WORKING SINCE 2009 AND HAVE MANY PARTNER STORES IN EVERY
          REGION OF ARMENIA. WE ARE THE OFFICIAL REPRESENTATIVE OF DVA AGRO
          (GERMANY), GRUPOINESTA (SPAIN), NATURE SA (GREECE), PARIJAT (INDIA)
          AND JUL (INDIA) IN ARMENIA. PEOPLE KNOW ABOUT THOSE COMPANIES ALL OVER
          THE WORLD.
        </p>
      </div>
    </div>
  );
}

export default memo(About);
