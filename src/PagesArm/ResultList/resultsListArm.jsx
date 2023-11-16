import './resultList.scss';
import Result from './Components/Result';
import { memo } from 'react';

function ResultsList() {
    return(
        <div className="ResultDiv">
            <h1 className='ResultH1'>ՄԵՐ ԱՊՐԱՆՔՆԵՐԸ</h1>
            <hr className='ResultHr'/>
            <div className="Results">
                <Result img="./Assets/Fertilazer.png" name="ՊԱՐԱՐՏԱՆՅՈՒԹԵՐ" number={18}/>
                <Result img="./Assets/Pesticide.png" name="ԹՈՒՆԱՔԻՄԻԿԱՏՆԵՐ" number={30}/>
                <Result img="./Assets/Seed.png" name="ՍԵՐՄԵՐ" number={28}/>
            </div>
        </div>
    )
}

export default memo(ResultsList)