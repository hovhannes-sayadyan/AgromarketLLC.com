import { memo } from "react";
import ProductsProps from "./components/ProductsProps";
import LeftNavBar from "./components/LeftNavBar";
import "./products.scss";
import { Link } from "react-router-dom";

function Products() {
  
  return (
    <div className="ProductList">
      <LeftNavBar />
      <div className="productListItem">
        <ProductsProps
          name={`Mol 75`}
          img={`./Assets/FERTILAZERS/mol75.jpg`}
          text1={`MOL 75 is a high quality fertilizer.`}
          text2={`Made in Spain.`}
          text3={`Company՝ GrupoInesta`}
          text4={`efficiency 95-100%`}
        />
        <ProductsProps
          name={`Victoria`}
          img={`./Assets/PESTICIDES/fungicid/Victoria.jpg`}
          text1={`Victoria is a high quality fungicide.`}
          text2={`Made in India.`}
          text3={`Company՝ JU Agri`}
          text4={`efficiency 95-100%`}
          text5={`the active substance՝ Mankozeb 64% + Metalaxyl 8%`}
        />
        <ProductsProps
          name={`Peper Seed`}
          img={`./Assets/seeds/peperone.png`}
          text1={`Paper`}
          text2={`Made in Italy`}
          text4={`efficiency 95-100%`}
        />
      </div>
      
    </div>
  );
}

export default memo(Products);