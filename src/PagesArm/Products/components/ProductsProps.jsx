import { memo } from 'react'
import '../styles/ProductsProps.scss'


function ProductsProps({img,name,text1,text2,text3,text4,text5,more}) {
    return(
        <div className='ProductsDiv'>
            <div>
                <h1>{name}</h1>
                <h4>{text1}</h4>
                <h4>{text2}</h4>
                <h4>{text3}</h4>
                <h4>{text4}</h4>
                <h4>{text5}</h4>
            </div>
                <img  src={img} alt="" />
            
        </div>
    )
}

export default memo(ProductsProps)