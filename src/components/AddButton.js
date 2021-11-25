import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import checkedIconImg from "../Assets/checked-icon.svg";

const WishButton = (product) => {
  const [checkedId, setCheck] = useState('');
  const [ bgColor] = React.useState('#40B25C');
  const [textColor ] = React.useState('#FFFFFF');

  const [ bgColorAfter] = React.useState('#A3F9B9');
  const [textColorAfter ] = React.useState('#1C1C1C');

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
        <Button 
        className="add-button"
        onClick={handleUnchecked}
        style={{
            backgroundColor: bgColorAfter,
            color: textColorAfter,
        }}
        >
        <img src={checkedIconImg} alt="checked" className="c" />
        adicionado
        </Button>
            : 
        <Button 
        className="add-button"
        onClick={(e) => handleCheck(e, product.id)}
        style={{
            backgroundColor: bgColor,
            color: textColor,
        }}
        >
            adicionar
        </Button>
      }
    </div>
  );
}

export default WishButton;





