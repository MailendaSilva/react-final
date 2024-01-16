import React from "react";

const CartWidget = () => {

  const itemCount = 1;

  return (
    <div className="cart-widget">
      <a href="/cart">
        <span role="img" aria-label="cart">🛒</span>
        0
      </a>
    </div>
  );
};

export default CartWidget;