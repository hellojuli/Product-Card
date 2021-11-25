import React from "react";
import productImg from "../Assets/product.svg";
import WishButton from "./WishButton";
import AddButton from "./AddButton";

const CardSection = () => {

  const products = [
    {
      id: 1,
      image: productImg,
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      lastPrice: "R$ 2.813,99",
      activePrice: "R$ 2.599,00",
      parcelQnt: "10",
      parcelValue: "R$ 259,90",
    },
    {
      id: 2,
      image: productImg,
      name: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      lastPrice: "R$ 2.813,99",
      activePrice: "R$ 2.599,00",
      parcelQnt: "10",
      parcelValue: "R$ 259,90",
    },  
  ];

  return (

    <div className="flex-div">
      { products.map( (product) => 
        <div className="Card" key={product.id}>
          <img src={product.image} alt="product" className="product-img" />

          <WishButton product={products} />
           
          <div className="title">
            <h1>{product.name}</h1>
          </div>   

          <div className="info">
            <h2>{product.lastPrice}</h2>
            <h1>{product.activePrice}</h1>
            <h3>em até<span> {product.parcelQnt}x de {product.parcelValue}</span> sem juros</h3>         
          </div>

          <AddButton product={products} />
        </div>
      )}
    </div>
  );
}

export default CardSection;