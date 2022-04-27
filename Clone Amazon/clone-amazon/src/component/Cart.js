import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotals from "./CartTotals";

function Cart({ cartItems }) {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.product.quantity;
    });
    return total;
  };

  const getTotalItems = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.quantity;
    });
    return total;
  };

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotals getTotalPrice={getTotalPrice} getTotalItems={getTotalItems} />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0;
  align-items: flex-start;
`;
