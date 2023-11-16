import { memo } from 'react'
import '../styles/Herbecid.scss'

function Herbecid({img,name,about,country}) {
    return(
        <div className='HerbecidCard'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='AboutP'>{about}</p>
            <p className='CountryP'>{country}</p>
        </div>
    )
}

export default memo(Herbecid)