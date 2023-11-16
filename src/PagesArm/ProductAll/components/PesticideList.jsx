import { memo } from 'react'
import '../styles/PesticideList.scss'
import Pesticides from './Pesticides'
import Herbecid from './Herbecid'
import Insecticid from './Insecticid'

function PesticideList() {
    return(
        <div className='PesticideList'>
            <h1 className='PesticideTitle'>ԹՈՒՆԱՔԻՄԻԿԱՏՆԵԸ</h1>
            <h2 className='FungicdTitle'>ՖՈՒՆԳԻՑԻԴՆԵՐ</h2>
            <div className='Fungicides'>
                <Pesticides name={`Bluecup`} img={`./Assets/PESTICIDES/fungicid/blucup.jpg`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ CUPPER SULFATE 200G/KG + CALCIUM HIDROCSIDE`}/>
                <Pesticides name={`Boks`} img={`./Assets/PESTICIDES/fungicid/boks.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ HEXACONAZOL 50G/L`}/>
                <Pesticides name={`Boss`} img={`./Assets/PESTICIDES/fungicid/boss.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ HEXAKONAZOL 5%`}/>
                <Pesticides name={`Dvakarb`} img={`./Assets/PESTICIDES/fungicid/dvakarb.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ `} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ PROPONACARB HIDROCSID 722`}/>
                <Pesticides name={`Favorit`} img={`./Assets/PESTICIDES/fungicid/Favorit.jpg`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ `} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ PROPINEB 700G/L`}/>
                <Pesticides name={`Fundazon`} img={`./Assets/PESTICIDES/fungicid/fundazon.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ KARBENDAZIM 120G/KG + MANKOCEB 630G/KG`}/>
                <Pesticides name={`Korus`} img={`./Assets/PESTICIDES/fungicid/korus.jpg`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ `} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ CIPRODINIL 750`}/>
                <Pesticides name={`Krezo`} img={`./Assets/PESTICIDES/fungicid/krezo.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ `} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ KREZOXIN METIL 500`}/>
                <Pesticides name={`Kurzak`} img={`./Assets/PESTICIDES/fungicid/kurzak.jpg`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ COPPER OXICOLIDE 250G/KG`}/>
                <Pesticides name={`Tebusol`} img={`./Assets/PESTICIDES/fungicid/tebusol.jpg`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ TEBUKONAZOLE 100G/KG + SOLPHUR 650G/KG`}/>
                <Pesticides name={`Victoria`} img={`./Assets/PESTICIDES/fungicid/Victoria.jpg`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ `} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ MANCOZRB 64% + METALAXIL 8%`}/>
            </div><br /><br />
            <h2 className='HerbecidTitle'>ՀԵՐԲԵՑԻԴՆԵՐ</h2>
            <div className="Herbecides">
                <Herbecid name={`Felix`} img={`./Assets/PESTICIDES/herbecid/felix.jpg`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ `} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ GLIFOSAT 757G/KG`}/>
                <Herbecid name={`Pendi Plus`} img={`./Assets/PESTICIDES/herbecid/pendi\ plus.jpg`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ PENDIMETALIN 30%`}/>
                <Herbecid name={`Primetrin`} img={`./Assets/PESTICIDES/herbecid/PRIMETRIN.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ PERIMETRIN 500G/L`}/>
                <Herbecid name={`Vetfinish`} img={`./Assets/PESTICIDES/herbecid/vetfinish.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ 2,4D METIL SALT`}/>
                <Herbecid name={`Xizak`} img={`./Assets/PESTICIDES/herbecid/xizak.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ `} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝  XIZALAXOP + ETIL 50G/L`}/>
            </div><br /><br />
            <h2 className="InsecticidTitle">ԻՆՍԵՑՏԻՑԻԴՆԵՐ</h2>
            <div className="Insecticides">
                <Insecticid name={`Abek`} img={`./Assets/PESTICIDES/insecticid/abek.png`}  about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ ABAMEKTIN 18G/L`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`}/>
                <Insecticid name={`Armor`} img={`./Assets/PESTICIDES/insecticid/armor.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ `} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ ACETAMIPRID 20 + LAMBDA 15`}/>
                <Insecticid name={`Diaz`} img={`./Assets/PESTICIDES/insecticid/diaz.jpg`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝  FIPRONIL 3G/KG`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`}/>
                <Insecticid name={`Fipro`} img={`./Assets/PESTICIDES/insecticid/fipro.png`}  about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ FIPRONIL + CLOROPIRIFOS`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`}/>
                <Insecticid name={`Maxak`} img={`./Assets/PESTICIDES/insecticid/maxak.jpg`}  about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ ALFA CIPERMETRIN 100G/L`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`}/>
                <Insecticid name={`Medal`} img={`./Assets/PESTICIDES/insecticid/medal.png`}  about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ TIAMETOCSAM`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`}/>
                <Insecticid name={`Napaleon`} img={`./Assets/PESTICIDES/insecticid/napaleon.png`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ TIAMETOCSAM`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`}/>
                <Insecticid name={`Payt`} img={`./Assets/PESTICIDES/insecticid/payt-removebg-preview.png`}  about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ BIFENTRIN 100`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`}/>
                <Insecticid name={`Perfecto`} img={`./Assets/PESTICIDES/insecticid/perfecto.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ `} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ IMIDACLOPRID + LAMBDA-CIHALOTRIN 5%`}/>
                <Insecticid name={`Pirani`} img={`./Assets/PESTICIDES/insecticid/pirani.jpg`}  about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ EMAMEKTIN BEZOAT 50G/KG`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`}/>
                <Insecticid name={`Polistar`} img={`./Assets/PESTICIDES/insecticid/polistar.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ BIFENTRIN 100`}/>
                <Insecticid name={`Profeno`} img={`./Assets/PESTICIDES/insecticid/profeno-removebg-preview.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ PROFENOFOS 500`}/>
                <Insecticid name={`Samrat`} img={`./Assets/PESTICIDES/insecticid/samrat.jpg`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ IMIDAKLOPRID 350G/L`}/>
                <Insecticid name={`Shooter`} img={`./Assets/PESTICIDES/insecticid/shooter-removebg-preview.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ LAMBDA-CIALOTRIN 50G/L`}/>
                <Insecticid name={`Ultimate`} img={`./Assets/PESTICIDES/insecticid/ultimate-removebg-preview.png`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ CLOROPIRIFOS 500 + CIPERMETRIN 50`} country={`ԱՐՏԱԴՐՎԱԾ Է ՀՆԴԿԱՍՏԱՆՈՒՄ`}/>
                <Insecticid name={`Vertamektin forte`} img={`./Assets/PESTICIDES/insecticid/vertamektin_forte-removebg-preview.png`} country={`ԱՐՏԱԴՐՎԱԾ Է ԳԵՐՄԱՆԻԱՅՈՒՄ`} about={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ ABAMEKTIN 50`}/>
            </div>
        </div>
    )
}

export default memo(PesticideList)