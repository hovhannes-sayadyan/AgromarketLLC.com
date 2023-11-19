import { memo,useState} from "react";
import "./home.scss";

function HomeSmall() {
    const [Img,SetImg] = useState(0)
    let Images = [
      `./Assets/natureSaNoneText.jpg`,
      `./Assets/GrupoInesta.webp`,
      `./Assets/DvaAgro.jpg`,
      `./Assets/JuAgri.jpg`,
      `./Assets/Parijat.jpg`
  ]
    
    return (
      <div 
        className="All"
        style={{ backgroundImage: `url(${Images[Img]})` }}
      >
        <div onClick={()=>{
        if (Img < 4) {
          SetImg(Img+1)
        } else {
          SetImg(0)
        }
      }} className="Carusel">
          <div className="SearchDiv">
            <h1 className="TitleH1">
            ABOUT 50 TYPES OF FERTILAZERS  AND PESTICIDES
            </h1>
          </div>
        </div>
        
      </div>
  );
}

export default memo(HomeSmall);
