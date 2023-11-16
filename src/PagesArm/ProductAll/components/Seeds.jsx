import { memo } from 'react'
import '../styles/Seeds.scss'

function Seeds({img,name}) {
    return(
        <div className='SeedsCard'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    )
}

export default memo(Seeds)