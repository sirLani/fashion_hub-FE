import { styled } from "styled-components";
import { Wrapper } from "./base/Container";
import logo from "../assets/fauxica.svg";
import { Input } from "./base/Input";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

let iconSize = 22;

export const NavBar = () => {
  return (
    <Wrapper>
      <Box>
        <Logo src={logo} alt="logo" />
        <List>
          <NavItem>NEW IN</NavItem>
          <NavItem>MEN</NavItem>
          <NavItem>WOMEN</NavItem>
          <NavItem>CHILDREN</NavItem>
          <NavItem>ACCESSORIES</NavItem>
          <NavItem>SHOES</NavItem>
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
          <SearchItem>
            <CgProfile size={iconSize} />
          </SearchItem>
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

const NavItem = styled.div`
  margin-right: 24px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
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
