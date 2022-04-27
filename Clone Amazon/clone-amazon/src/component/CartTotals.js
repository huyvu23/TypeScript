import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

function CartTotals({ getTotalPrice, getTotalItems }) {
  return (
    <Container>
      <Subtotal>
        SubTotal ({getTotalItems()} items) :
        <NumberFormat value={getTotalPrice()} displayType={"text"} thousandSeparator={true} prefix={"$"} />;
      </Subtotal>
      <CheckoutButton>Proceed To Checkout</CheckoutButton>
    </Container>
  );
}

export default CartTotals;

const Container = styled.div`
  height: 200px;
  padding: 20px;
  flex: 0.3;
  background-color: white;
`;

const Subtotal = styled.h2`
  margin-bottom: 16px;
`;

const CheckoutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  cursor: pointer;
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 4px;
  font-size: 16px;
  :hover {
    background-color: #ddb347;
  }
`;
