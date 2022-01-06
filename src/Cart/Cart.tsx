import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";
import React from "react";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const totalPrize = () => {
    return cartItems.reduce((sum, item) => sum + item.amount * item.price, 0);
  };

  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${totalPrize().toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
