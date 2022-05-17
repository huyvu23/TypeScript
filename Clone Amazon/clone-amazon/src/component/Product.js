import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

function Product({ title, price, rating, image, id }) {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      // ! Kiểm tra trong giỏ hàng đã có sản phẩm này chưa,nếu có rồi thì cần cập nhật số lượng
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          price: price,
          image: image,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Rating>
        {Array(rating)
          // ! Phương fill()thức này thay đổi tất cả các phần tử trong một mảng thành một giá trị tĩnh
          .fill()
          .map(() => {
            return <p>⭐</p>;
          })}
      </Rating>

      <Image src={image}></Image>
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add To Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  max-height: 400px;
  flex: 1;
  padding: 20px;
  margin: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;

const Price = styled.span`
  margin-top: 3px;
  font-weight: 500;
`;

const Rating = styled.div`
  display: flex;
`;

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const AddToCartButton = styled.button`
  width: 100px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  cursor: pointer;
  height: 30px;
`;

const ActionSection = styled.div`
  margin-top: 12px;
  display: grid;
  place-items: center;
`;
