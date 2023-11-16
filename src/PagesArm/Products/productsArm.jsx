import { memo } from "react";
import ProductsProps from "./components/ProductsProps";
import LeftNavBar from "./components/LeftNavBar";
import "./products.scss";

function Products() {
  
  return (
    <div className="ProductList">
      <LeftNavBar />
      <div className="productListItem">
        <ProductsProps
          name={`ՄՈԼ 75`}
          img={`./Assets/FERTILAZERS/mol75.jpg`}
          text1={`ՄՈԼ 75-Ը ԲԱՐՁՐ ՈՐԱԿԻ ՊԱՐԱՐՏԱՆՅՈՒԹ Է.`}
          text2={`Made in Spain.`}
          text3={`ԱՐՏԱԴՐՈՂ՝ GrupoInesta`}
          text4={`ԱՐԴՅՈՒՆՔԸ 95-100%`}
        />
        <ProductsProps
          name={`ՎԻԿՏՈՐԻԱ`}
          img={`./Assets/PESTICIDES/fungicid/Victoria.jpg`}
          text1={`ՎԻՑՏՈՐԻԱՆ ԲԱՐՁՐ ՈՐԱԿԻ ՖՒՆԳԻՑԻԴ Է.`}
          text2={`Made in India.`}
          text3={`ԱՐՏԱԴՐՈՂ՝ JU Agri`}
          text4={`ԱՐԴՅՈՒՆՔԸ 95-100%`}
          text5={`ԱԶԴՈՂ ՆՅՈՒԹԸ՝ Mankozeb 64% + Metalaxyl 8%`}
        />
        <ProductsProps
          name={`ԲԻԲԱՐԻ ՍԵՐՄ`}
          img={`./Assets/seeds/peperone.png`}
          text1={`ԲԻԲԱՐ`}
          text2={`Made in Italy`}
          text4={`ԱՐԴՅՈՒՆՔԸ 95-100%`}
        />
      </div>
      
    </div>
  );
}

export default memo(Products);