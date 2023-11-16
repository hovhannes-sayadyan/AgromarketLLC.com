import { memo, useState } from 'react'
import '../styles/LeftNavBar.scss'

function LeftNavBar() {
    const [Open,SetOpen] = useState(false)
    console.log(Open);
    return(
        <div onMouseOver={()=>{
            SetOpen(true)
        }} onMouseLeave={()=>{
            SetOpen(false)
        }} className="LeftNavBar">
            <div className='IconsDiv'>
                <img className='Icons' src="./Assets/fertilizerIcon.png" alt="" />
                <h1 className={Open?`H1Open`:`H1Close`}>Fertilazers</h1>
            </div>
            <div className='IconsDiv'>
                <img className='Icons' src="./Assets/FertilazerIcon.png" alt="" />
                <h1 className={Open?`H1Open`:`H1Close`}>Pesticides</h1>
            </div>
            <div className='IconsDiv'>
                <img className='Icons' src="./Assets/SeedLogo.png" alt="" />
                <h1 className={Open?`H1Open`:`H1Close`}>Seeds</h1>
            </div>
        </div>
    )
}

export default memo(LeftNavBar)