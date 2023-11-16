import { memo } from 'react'
import '../styles/FertilazerList.scss'
import Fertilazers from './Fertilazers'

function FertilazerList() {
    return(
        <div className='FertilazerList'>
            <h1 className='FertilazerTitle'>FERTILAZERS</h1>
            <div className='FertilazersDiv'>
                <Fertilazers name={`10 - 50 - 10`} img={'./Assets/FERTILAZERS/10\ -\ 50\ -\ 10.jpg'}/>
                <Fertilazers name={`12 - 12 - 36`} img={'./Assets/FERTILAZERS/12\ -\ 12\ -\ 36.jpg'}/>
                <Fertilazers name={`20 - 20 - 20`} img={'./Assets/FERTILAZERS/20\ -\ 20\ -\ 20.jpg'}/>
                <Fertilazers name={`32 - 0 - 0`} img={'./Assets/FERTILAZERS/32\ -\ 0\ -\ 0.jpg'}/>
                <Fertilazers name={`3S`} img={'./Assets/FERTILAZERS/3S.png'}/>
                <Fertilazers name={`3S small`} img={'./Assets/FERTILAZERS/3S\ small.png'}/>
                <Fertilazers name={`Boro`} img={'./Assets/FERTILAZERS/boro.png'}/>
                <Fertilazers name={`Calcium 50`} img={'./Assets/FERTILAZERS/calcium\ 50.png'}/>
                <Fertilazers name={`Chelan CU`} img={'./Assets/FERTILAZERS/chelan\ CU.jpg'}/>
                <Fertilazers name={`Chelan KS`} img={'./Assets/FERTILAZERS/chelan\ KS.png'}/>
                <Fertilazers name={`Engorde small`} img={'./Assets/FERTILAZERS/engorde-removebg-preview.png'}/>
                <Fertilazers name={`Engorde`} img={'./Assets/FERTILAZERS/engorde.png'}/>
                <Fertilazers name={`Enzimatiko 30%`} img={'./Assets/FERTILAZERS/enzimatiko\ 30.jpg'}/>
                <Fertilazers name={`Enzimatiko 30% small`} img={'./Assets/FERTILAZERS/enzimatiko_30_-removebg-preview.png'}/>
                <Fertilazers name={`F Away Zn`} img={'./Assets/FERTILAZERS/f_away_Zn.png'}/>
                <Fertilazers name={`Mol 75`} img={'./Assets/FERTILAZERS/mol75.jpg'}/>
                <Fertilazers name={`Mol 75 small`} img={'./Assets/FERTILAZERS/mol_75-removebg-preview.png'}/>
                <Fertilazers name={`Nemat-X`} img={'./Assets/FERTILAZERS/nemat-X.png'}/>
            </div>
        </div>
    )
}

export default memo(FertilazerList)