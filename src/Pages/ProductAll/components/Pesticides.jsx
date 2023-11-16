import { memo } from 'react'
import '../styles/Pesticides.scss'

function Pesticides({img,name,about,country}) {
    return(
        <div className='PesticidesCard'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <hr />
            <p className='AboutPProduct'>{about}</p>
            <hr />
            <p className='CountryP'>{country}</p>
        </div>
    )
}

export default memo(Pesticides)