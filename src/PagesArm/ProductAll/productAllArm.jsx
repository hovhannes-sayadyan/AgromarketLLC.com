import { memo } from "react"
import './productAll.scss'
import FertilazerList from "./components/FertilazerList"
import PesticideList from "./components/PesticideList"
import SeedList from "./components/SeedList"

function ProductAll() {
    return(
        <section className="ProductAll">
            <br />
            <br />
            <FertilazerList/>
            <PesticideList/>
            <SeedList/>
        </section>
    )
}

export default memo(ProductAll)