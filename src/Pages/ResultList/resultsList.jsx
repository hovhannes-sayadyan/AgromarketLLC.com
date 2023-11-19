import './resultList.scss';
import Result from './Components/Result';
import { memo } from 'react';

function ResultsList() {
    return(
        <div className="ResultDiv">
            <h1 className='ResultH1'>WE HAVE `</h1>
            <hr className='ResultHr'/>
            <div className="Results">
                <Result img="./Assets/Fertilazer.png" name="FERTILAZERS" number={` HIGH QUALITY`}/>
                <Result img="./Assets/Pesticide.png" name="PESTICIDES" number={`32 KIND OF `}/>
                <Result img="./Assets/Seed.png" name="SEEDS" number={`HIGH YIELD`}/>
            </div>
        </div>
    )
}

export default memo(ResultsList)