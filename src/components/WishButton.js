import React, { useState } from "react";
import wishlistImg from "../Assets/wishlist.svg";
import wishlistActiveImg from "../Assets/wishlist-active.svg";
import wishlistAddedImg from "../Assets/wishlist-added.svg";
import wishlistAddedActiveImg from "../Assets/wishlist-added-active.svg";

const WishButton = (product) => {
  const [checkedId, setCheck] = useState('');

 function handleCheck(e, id) {
    e.preventDefault();
    setCheck(id);
  }

  function handleUnchecked(e) {
    e.preventDefault();
    setCheck('');
  }

  return (

    <div>
      {checkedId === product.id ? 
        <div className="wishlist-div"               
        onClick={handleUnchecked}>
          <img src={wishlistAddedImg} alt="wishlist" className="wishlist-img" />
          <img src={wishlistAddedActiveImg} alt="wishlist-active" className="wishlist-active" /> 
        </div> 
      : 
        <div className="wishlist-div"             
        onClick={(e) => handleCheck(e, product.id)}>
          <img src={wishlistImg} alt="wishlist-button" className="wishlist-img" />
          <img src={wishlistActiveImg} alt="wishlist-button" className="wishlist-active" /> 
        </div>
      }
    </div>
  );
}

export default WishButton;