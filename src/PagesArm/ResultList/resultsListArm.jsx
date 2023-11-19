import './resultList.scss';
import Result from './Components/Result';
import { memo } from 'react';

function ResultsList() {
    return(
        <div className="ResultDiv">
            <h1 className='ResultH1'>ՄԵՆՔ ՈՒՆԵՆՔ `</h1>
            <hr className='ResultHr'/>
            <div className="Results">
                <Result img="./Assets/Fertilazer.png" name="ՊԱՐԱՐՏԱՆՅՈՒԹԵՐ" number={`ԲԱՐՁՐ ՈՐԱԿԻ `}/>
                <Result img="./Assets/Pesticide.png" name="ԹՈՒՆԱՔԻՄԻԿԱՏՆԵՐ" number={`32 ՏԵՍԱԿԻ`}/>
                <Result img="./Assets/Seed.png" name="ՍԵՐՄԵՐ" number={`ԲԱՐՁՐ ԾԼՈՒՆԱԿՈՒԹՅԱՆ`}/>
            </div>
        </div>
    )
}

export default memo(ResultsList)