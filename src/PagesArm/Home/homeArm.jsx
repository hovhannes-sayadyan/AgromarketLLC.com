import { memo } from "react";
import "./home.scss";

function HomeSmall() {
  return (
    <div
      className="All"
      style={{ backgroundImage: `url(./Assets/natureSaNoneText.jpg)` }}
    >
      <div className="Carusel">
        <div className="SearchDiv">
          <h1 className="TitleH1">
            ՄՈՏ 50 ՏԵՍԱԿԻ ԹՈՒՆԱՔԻՄԻԿԱՏՆԵՐ և ՊԱՐԱՐՏԱԲՅՈՒԹԵՐ
          </h1>
        </div>
      </div>
    </div>
  );
}

export default memo(HomeSmall);
