import { memo } from 'react'
import '../styles/Fertilazers.scss'

function Fertilazers({img,name,about}) {
    return(
        <div className='FertilazerCard'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{about}</p>
        </div>
    )
}

export default memo(Fertilazers)