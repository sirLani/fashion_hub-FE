import { useState } from "react";
import { styled } from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { Wrapper } from "./base/Container";
import logo from "../assets/fauxica.svg";
import { Input } from "./base/Input";
import { SecondaryButton } from "./base";

let iconSize = 22;

export const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const LoginButton = () => {
    if (location.pathname === ("/login" || "/register")) {
      return null;
    } else {
      return (
        <SecondaryButton onClick={() => navigate("/login")} $marginleft="22px">
          Login
        </SecondaryButton>
      );
    }
  };

  return (
    <Wrapper>
      <Box>
        <Logo src={logo} alt="logo" />
        <List>
          <NavItem to="/">NEW IN</NavItem>
          <NavItem to="/">MEN</NavItem>
          <NavItem to="/">WOMEN</NavItem>
          <NavItem to="/">CHILDREN</NavItem>
          <NavItem to="/">ACCESSORIES</NavItem>
          <NavItem to="/">SHOES</NavItem>
        </List>
        <SearchBox>
          <InputContainer>
            <Input width="280px" placeholder="Search product or designer" />
          </InputContainer>
          <SearchItem>
            <AiOutlineHeart size={iconSize} />
          </SearchItem>
          <SearchItem>
            <SlBasket size={iconSize} />
          </SearchItem>
          {isLoggedIn ? (
            <SearchItem>
              <CgProfile size={iconSize} />
            </SearchItem>
          ) : (
            <LoginButton />
          )}
        </SearchBox>
      </Box>
    </Wrapper>
  );
};

const Box = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: ;
`;

const Logo = styled.img``;

const List = styled.div`
  display: flex;
`;

const NavItem = styled(Link)`
  margin-right: 24px;
  font-size: 14px;
  color: #000000;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  cursur: pointer;

  &:hover {
    color: #888f94;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

const SearchBox = styled.div`
  display: flex;
`;

const SearchItem = styled.div`
  margin-left: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-right: 12px;
`;
