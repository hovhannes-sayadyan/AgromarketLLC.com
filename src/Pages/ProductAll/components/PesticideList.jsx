import { memo } from 'react'
import '../styles/PesticideList.scss'
import Pesticides from './Pesticides'
import Herbecid from './Herbecid'
import Insecticid from './Insecticid'

function PesticideList() {
    return(
        <div className='PesticideList'>
            <h1 className='PesticideTitle'>Pesticides</h1>
            <h2 className='FungicdTitle'>Fungicides</h2>
            <div className='Fungicides'>
                <Pesticides name={`Bluecup`} img={`./Assets/PESTICIDES/fungicid/blucup.jpg`} country={`MADE IN INDIA`} about={`the active substance՝ CUPPER SULFATE 200G/KG + CALCIUM HIDROCSIDE`}/>
                <Pesticides name={`Boks`} img={`./Assets/PESTICIDES/fungicid/boks.png`} country={`MADE IN INDIA`} about={`the active substance՝ HEXACONAZOL 50G/L`}/>
                <Pesticides name={`Boss`} img={`./Assets/PESTICIDES/fungicid/boss.png`} country={`MADE IN INDIA`} about={`the active substance՝ HEXAKONAZOL 5%`}/>
                <Pesticides name={`Dvakarb`} img={`./Assets/PESTICIDES/fungicid/dvakarb.png`} country={`MADE IN GERMANY `} about={`the active substance՝ PROPONACARB HIDROCSID 722`}/>
                <Pesticides name={`Favorit`} img={`./Assets/PESTICIDES/fungicid/Favorit.jpg`} country={`MADE IN GERMANY `} about={`the active substance՝ PROPINEB 700G/L`}/>
                <Pesticides name={`Fundazon`} img={`./Assets/PESTICIDES/fungicid/fundazon.png`} country={`MADE IN INDIA`} about={`the active substance՝ KARBENDAZIM 120G/KG + MANKOCEB 630G/KG`}/>
                <Pesticides name={`Korus`} img={`./Assets/PESTICIDES/fungicid/korus.jpg`} country={`MADE IN GERMANY `} about={`the active substance՝ CIPRODINIL 750`}/>
                <Pesticides name={`Krezo`} img={`./Assets/PESTICIDES/fungicid/krezo.png`} country={`MADE IN GERMANY `} about={`the active substance՝ KREZOXIN METIL 500`}/>
                <Pesticides name={`Kurzak`} img={`./Assets/PESTICIDES/fungicid/kurzak.jpg`} country={`MADE IN INDIA`} about={`the active substance՝ COPPER OXICOLIDE 250G/KG`}/>
                <Pesticides name={`Tebusol`} img={`./Assets/PESTICIDES/fungicid/tebusol.jpg`} country={`MADE IN INDIA`} about={`the active substance՝ TEBUKONAZOLE 100G/KG + SOLPHUR 650G/KG`}/>
                <Pesticides name={`Victoria`} img={`./Assets/PESTICIDES/fungicid/Victoria.jpg`} country={`MADE IN GERMANY `} about={`the active substance՝ MANCOZRB 64% + METALAXIL 8%`}/>
            </div><br /><br />
            <h2 className='HerbecidTitle'>Herbecides</h2>
            <div className="Herbecides">
                <Herbecid name={`Felix`} img={`./Assets/PESTICIDES/herbecid/felix.jpg`} country={`MADE IN GERMANY `} about={`the active substance՝ GLIFOSAT 757G/KG`}/>
                <Herbecid name={`Pendi Plus`} img={`./Assets/PESTICIDES/herbecid/pendi\ plus.jpg`} country={`MADE IN INDIA`} about={`the active substance՝ PENDIMETALIN 30%`}/>
                <Herbecid name={`Primetrin`} img={`./Assets/PESTICIDES/herbecid/PRIMETRIN.png`} country={`MADE IN INDIA`} about={`the active substance՝ PERIMETRIN 500G/L`}/>
                <Herbecid name={`Vetfinish`} img={`./Assets/PESTICIDES/herbecid/vetfinish.png`} country={`MADE IN INDIA`} about={`the active substance՝ 2,4D METIL SALT`}/>
                <Herbecid name={`Xizak`} img={`./Assets/PESTICIDES/herbecid/xizak.png`} country={`MADE IN GERMANY `} about={`the active substance՝  XIZALAXOP + ETIL 50G/L`}/>
            </div><br /><br />
            <h2 className="InsecticidTitle">Insecticides</h2>
            <div className="Insecticides">
                <Insecticid name={`Abek`} img={`./Assets/PESTICIDES/insecticid/abek.png`}  about={`the active substance՝ ABAMEKTIN 18G/L`} country={`Made in India`}/>
                <Insecticid name={`Armor`} img={`./Assets/PESTICIDES/insecticid/armor.png`} country={`MADE IN GERMANY `} about={`the active substance՝ ACETAMIPRID 20 + LAMBDA 15`}/>
                <Insecticid name={`Diaz`} img={`./Assets/PESTICIDES/insecticid/diaz.jpg`} about={`the active substance՝  FIPRONIL 3G/KG`} country={`Made in India`}/>
                <Insecticid name={`Fipro`} img={`./Assets/PESTICIDES/insecticid/fipro.png`}  about={`the active substance՝ FIPRONIL + CLOROPIRIFOS`} country={`Made in India`}/>
                <Insecticid name={`Maxak`} img={`./Assets/PESTICIDES/insecticid/maxak.jpg`}  about={`the active substance՝ ALFA CIPERMETRIN 100G/L`} country={`Made in India`}/>
                <Insecticid name={`Medal`} img={`./Assets/PESTICIDES/insecticid/medal.png`}  about={`the active substance՝ TIAMETOCSAM`} country={`Made in India`}/>
                <Insecticid name={`Napaleon`} img={`./Assets/PESTICIDES/insecticid/napaleon.png`} about={`the active substance՝ TIAMETOCSAM`} country={`Made in India`}/>
                <Insecticid name={`Payt`} img={`./Assets/PESTICIDES/insecticid/payt-removebg-preview.png`}  about={`the active substance՝ BIFENTRIN 100`} country={`Made in India`}/>
                <Insecticid name={`Perfecto`} img={`./Assets/PESTICIDES/insecticid/perfecto.png`} country={`MADE IN GERMANY `} about={`the active substance՝ IMIDACLOPRID + LAMBDA-CIHALOTRIN 5%`}/>
                <Insecticid name={`Pirani`} img={`./Assets/PESTICIDES/insecticid/pirani.jpg`}  about={`the active substance՝ EMAMEKTIN BEZOAT 50G/KG`} country={`Made in India`}/>
                <Insecticid name={`Polistar`} img={`./Assets/PESTICIDES/insecticid/polistar.png`} country={`Made in India`} about={`the active substance՝ BIFENTRIN 100`}/>
                <Insecticid name={`Profeno`} img={`./Assets/PESTICIDES/insecticid/profeno-removebg-preview.png`} country={`Made in India`} about={`the active substance՝ PROFENOFOS 500`}/>
                <Insecticid name={`Samrat`} img={`./Assets/PESTICIDES/insecticid/samrat.jpg`} country={`Made in India`} about={`the active substance՝ IMIDAKLOPRID 350G/L`}/>
                <Insecticid name={`Shooter`} img={`./Assets/PESTICIDES/insecticid/shooter-removebg-preview.png`} country={`Made in India`} about={`the active substance՝ LAMBDA-CIALOTRIN 50G/L`}/>
                <Insecticid name={`Ultimate`} img={`./Assets/PESTICIDES/insecticid/ultimate-removebg-preview.png`} about={`the active substance՝ CLOROPIRIFOS 500 + CIPERMETRIN 50`} country={`Made in India`}/>
                <Insecticid name={`Vertamektin forte`} img={`./Assets/PESTICIDES/insecticid/vertamektin_forte-removebg-preview.png`} country={`MADE IN GERMANY`} about={`the active substance՝ ABAMEKTIN 50`}/>
            </div>
        </div>
    )
}

export default memo(PesticideList)