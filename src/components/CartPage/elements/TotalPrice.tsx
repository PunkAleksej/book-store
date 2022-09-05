import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../Elements/Button';

type TotalPriceType = {
  totalPrice: number;
};

const TotalPrice:React.FC<TotalPriceType> = (props) => {
  return (
    <div>
      <h1 className="cart_total-price">Total:  {props.totalPrice}</h1>
      <div className="cart_buttons">
        <Link to="/">
          <ButtonComponent
          text="Continue shopping"
          secondaryStyle
          />
        </Link>
        <div className="cart_buttons_second-button">
          <ButtonComponent
          text="Chekout"
          />
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
