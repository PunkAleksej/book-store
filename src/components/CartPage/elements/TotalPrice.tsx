import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../elements/Button';

type TotalPriceType = {
  totalPrice: number;
};

const TotalPrice:React.FC<TotalPriceType> = (props) => {
  return (
    <div>
      <h2 className="cart_total-price">Total:  {props.totalPrice}</h2>
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
