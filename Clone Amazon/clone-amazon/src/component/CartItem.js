import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

function CartItem({ id, item }) {
  const deleteItem = (e) => {
    e.preventDefault();
    db.collection("cartItems").doc(id).delete();
  };

  let options = [];
  for (let i = 1; i < Math.max(item.quantity + 1, 21); i++) {
    options.push(<option value={i}>Qty:{i}</option>);
  }

  const changeQuantity = (newQuantity) => {
    db.collection("cartItems")
      .doc(id)
      .update({
        quantity: parseInt(newQuantity),
      });
  };

  return (
    <Container>
      <ImageContainer>
        <img src={item.image} alt="error"></img>
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{item.name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>
            <select onChange={(e) => changeQuantity(e.target.value)} value={item.quantity}>
              {options}
            </select>
          </CartItemQuantityContainer>
          <CartItemDeleteContainer onClick={deleteItem}>Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>${item.price}</CartItemPrice>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ddd;
`;

const ImageContainer = styled.div`
  height: 180px;
  width: 180px;
  //   ! điều này có nghĩa là không bao giờ thu nhỏ vùng chứa
  flex-shrink: 0;
  // !  bạn muốn nội dung trong container của mình luôn được lấp đầy.
  flex-grow: 0;
  margin-right: 16px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;
const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;

const CartItemInfoBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;
const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 6px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
    :focus {
      outline: none;
    }
  }
`;
const CartItemDeleteContainer = styled.div`
  color: #007185;
  cursor: pointer;
  margin-left: 16px;
`;
const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;
