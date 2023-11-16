import Seeds from "./Seeds";
import { memo } from "react";
import '../styles/SeedsList.scss'

function SeedsList() {
    return(
       <section>
            <br />
            <br />
            <h2 className="SeedTitle">Seeds</h2>
            <div className="SeedList">
                <Seeds name={``} img={`./Assets/seeds/asparago.png`}/>
                <Seeds name={``} img={`./Assets/seeds/basilico.png`}/>
                <Seeds name={``} img={`./Assets/seeds/bietolla\ da\ coste.png`}/>
                <Seeds name={``} img={`./Assets/seeds/bietolla\ da\ orto.png`}/>
                <Seeds name={``} img={`./Assets/seeds/brocollo.png`}/>
                <Seeds name={``} img={`./Assets/seeds/cavolfiore.png`}/>
                <Seeds name={``} img={`./Assets/seeds/cavollo\ capuchinno.png`}/>
                <Seeds name={``} img={`./Assets/seeds/cicoria.png`}/>
                <Seeds name={``} img={`./Assets/seeds/cipolla.png`}/>
                <Seeds name={``} img={`./Assets/seeds/cipolla\ big.png`}/>
                <Seeds name={``} img={`./Assets/seeds/cipolla\ small.png`}/>
                <Seeds name={``} img={`./Assets/seeds/cucumber2.png`}/>
                <Seeds name={``} img={`./Assets/seeds/cucumber3.png`}/>
                <Seeds name={``} img={`./Assets/seeds/cucumber4.png`}/>
                <Seeds name={``} img={`./Assets/seeds/lattuga.png`}/>
                <Seeds name={``} img={`./Assets/seeds/lattuga\ purple.png`}/>
                <Seeds name={``} img={`./Assets/seeds/latuga\ green.png`}/>
                <Seeds name={``} img={`./Assets/seeds/peperone.png`}/>
                <Seeds name={``} img={`./Assets/seeds/peperone\ green.png`}/>
                <Seeds name={``} img={`./Assets/seeds/peperone\ small.png`}/>
                <Seeds name={``} img={`./Assets/seeds/peperone\ yellow.png`}/>
                <Seeds name={``} img={`./Assets/seeds/ramolacio.png`}/>
                <Seeds name={``} img={`./Assets/seeds/ravanello.png`}/>
                <Seeds name={``} img={`./Assets/seeds/ravanello\ small.png`}/>
                <Seeds name={``} img={`./Assets/seeds/sedano.png`}/>
                <Seeds name={``} img={`./Assets/seeds/sedano\ another.png`}/>
                <Seeds name={``} img={`./Assets/seeds/spinacio.png`}/>
                <Seeds name={``} img={`./Assets/seeds/zucchinno.png`}/>
                <Seeds name={``} img={`./Assets/seeds/tomato1.png`}/>
            </div>
       </section>
    )
}

export default memo(SeedsList)