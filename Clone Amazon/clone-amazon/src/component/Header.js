import React from "react";
import styled from "styled-components";
import { LocationOn, Search, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Header({ user, cartItems, signOut }) {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src={"https://i.imgur.com/7I9Was5.png"} alt="Logo" />
        </Link>
      </HeaderLogo>
      <HeaderLogoAddress>
        <LocationOn />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select Your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderLogoAddress>
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <Search />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello,{user.name}</OptionLineOne>
          <OptionLineTwo onClick={signOut}>Sign out</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>&Orders</OptionLineTwo>
        </HeaderOption>
        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasket />
            <CartCount>{getCount()}</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const HeaderLogoAddress = styled.div`
    display: flex;
    align-items: center;
padding-left: 10px;
}
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
  font-weight: 700;
  cursor: pointer;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 6px;
  overflow: hidden;
  margin-left: 4px;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

const HeaderSearchInput = styled.input`
  outline: none;
  border: 0;
  flex-grow: 1;
  height: 40px;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fedb69;
  width: 45px;
  justify-content: center;
  color: black;
  cursor: pointer;
`;

const HeaderNavItems = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderOption = styled.div`
  padding: 10px 9px;
`;

const HeaderOptionCart = styled.div`
  display: flex;
  a {
    padding-right: 9px;
    display: flex;
    color: white;
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  padding-left: 4px;
  color: #f08804;
`;
