import { memo } from 'react'
import '../styles/Insecticides.scss'

function Insecticides({img,name,about,country}) {
    return(
        <div className='InsecticidesCard'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='AboutPProduct'>{about}</p>
            <p className='CountryP'>{country}</p>
        </div>
    )
}

export default memo(Insecticides)