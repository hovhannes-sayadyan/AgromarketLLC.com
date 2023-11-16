import { memo } from "react"
import '../Styles/Result.scss'

function Result({img,name,number}) {
    return(
        <div className="card">

  <div className="imgBox">
    <img src={img} alt="mouse corsair" className="mouse"/>
  </div>

  <div className="contentBox">
    <h3>{name}</h3>
    <h2 className="price">ՄԵՆՔ ՈՒՆԵՆՔ ՄՈՏ {number} ՍԵՍԱԿԻ {name}</h2>
  </div>

</div>
    )
}

export default memo(Result)