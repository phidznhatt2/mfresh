import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  InputGroup,
  Input,
  InputPrepend,
  InputAppend,
  Tooltip,
  Button,
  ButtonSquare,
  ButtonCircle,
  Modal,
} from "../ui";
import {
  Search,
  Sort,
  ShoppingCart,
  CaretDown,
  Bars,
} from "@styled-icons/fa-solid";
import { Heart, User } from "@styled-icons/fa-regular";

const Header = ({ toggle }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <>
      <SHeader.Wrapper>
        <SHeader.Nav>
          <SHeader.NavContainer>
            <SHeader.Logo to="/">
              <img src={require("images/logo.png")} alt="logo" />
            </SHeader.Logo>
            <SHeader.LogoMobile to="/">
              <img src={require("images/logo-mobile.png")} alt="logo-mobile" />
            </SHeader.LogoMobile>
            <SHeader.InputGroupWrapper>
              <InputGroup>
                <InputPrepend>
                  <Button>
                    <Search size="15" color="#828488" />
                  </Button>
                </InputPrepend>
                <SHeader.CustomInput
                  placeholder="Search for products"
                  name="search-products"
                  onChange={(e) => console.log(e)}
                />
                <InputAppend>
                  <SHeader.CustomSelect>
                    <option value="0" defaultValue>
                      All Categories
                    </option>
                    <option value="vegetables">Vegetables</option>
                    <option value="soft-cheese">Soft cheese</option>
                  </SHeader.CustomSelect>
                </InputAppend>
              </InputGroup>
            </SHeader.InputGroupWrapper>
            <SHeader.NavbarToolbar>
              <SHeader.NavbarTool show text="Wishlist">
                <ButtonSquare width="46">
                  <Heart size="20" color="#4b566b" />
                </ButtonSquare>
              </SHeader.NavbarTool>
              <SHeader.NavbarBars width="46" onClick={toggle}>
                <Bars size="20" color="#4b566b" />
              </SHeader.NavbarBars>
              <SHeader.NavbarSearch
                width="46"
                onClick={() => setShowSearchBox((pre) => !pre)}
              >
                <Search size="20" color="#4b566b" />
              </SHeader.NavbarSearch>
              <SHeader.NavbarUser onClick={() => setShowModal(true)}>
                <ButtonSquare width="46">
                  <User size="20" color="#4b566b" />
                </ButtonSquare>
                <SHeader.NavbarText>
                  <small>My Cart</small> My Account
                </SHeader.NavbarText>
              </SHeader.NavbarUser>
              <SHeader.NavCart>
                <SHeader.CartToggle>
                  <SHeader.ButtonCart
                    variant="contained"
                    width="46"
                    color="#f3f5f9"
                  >
                    <span>0</span>
                    <ShoppingCart size="20" color="#4b566b" />
                  </SHeader.ButtonCart>
                  <SHeader.NavbarText>
                    <small>Hello, Sign in</small> $0.00 <CaretDown size="12" />
                  </SHeader.NavbarText>
                </SHeader.CartToggle>
              </SHeader.NavCart>
            </SHeader.NavbarToolbar>
          </SHeader.NavContainer>
        </SHeader.Nav>
        {showSearchBox && (
          <SHeader.SearchBox>
            <SHeader.Container>
              <InputGroup>
                <SHeader.CustomInput
                  placeholder="Search for products"
                  name="search-products"
                  onChange={(e) => console.log(e)}
                />
                <InputAppend>
                  <Button>
                    <Search size="15" color="#828488" />
                  </Button>
                </InputAppend>
              </InputGroup>
            </SHeader.Container>
          </SHeader.SearchBox>
        )}
      </SHeader.Wrapper>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title="Login to your account"
      ></Modal>
    </>
  );
};

export default Header;

/**
 * Style Header
 */

const SHeader = {};

SHeader.Wrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1031;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.3rem -0.0625rem rgba(0, 0, 0, 0.03),
    0 0.275rem 0.75rem -0.0625rem rgba(0, 0, 0, 0.06);
`;

SHeader.Nav = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

SHeader.NavContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1280px) {
    padding: 0 30px;
  }
`;

SHeader.Logo = styled(Link)`
  display: block;
  width: 142px;
  padding: 0.65625rem 0;
  margin-right: 1rem;
  font-size: 1.125rem;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 576px) {
    display: none;
  }
`;

SHeader.LogoMobile = styled(SHeader.Logo)`
  display: none;
  width: 74px;
  margin-right: 2rem;

  @media (max-width: 576px) {
    display: block;
  }
`;

SHeader.InputGroupWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 1.5rem;
  display: block;

  @media (max-width: 992px) {
    display: none;
  }
`;

SHeader.CustomSelect = styled.select`
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 1.25rem + 2px);
  padding: 0.625rem 2rem 0.625rem 1rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4b566b;
  vertical-align: middle;
  background: #fff url("../../logo.svg") no-repeat right 1rem center/8px 10px;
  border: 1px solid #dae1e7;
  border-radius: 0.3125rem;
  box-shadow: 0 0 0 0 transparent;
  appearance: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

SHeader.CustomInput = styled(Input)`
  padding: 0 2.5rem;
`;

SHeader.NavbarToolbar = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 0.5rem;
`;

SHeader.NavbarTool = styled(Tooltip)`
  .tooltip-custom {
    top: -15px;
    background-color: #2b3445;
    border-radius: 0.1875rem;
    font-size: 0.6875rem;
    opacity: 0.9;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

SHeader.NavbarBars = styled(ButtonSquare)`
  display: none;
  border: 0;

  @media (max-width: 992px) {
    display: block;
    margin-right: -0.25rem;
    margin-left: 0.25rem;
  }
`;

SHeader.NavbarSearch = styled(ButtonSquare)`
  display: none;
  border: 0;

  @media (max-width: 992px) {
    display: block;
    margin-right: -0.25rem;
    margin-left: 0.25rem;
  }
`;

SHeader.NavbarUser = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  cursor: pointer;

  @media (max-width: 992px) {
    margin-right: -0.25rem;
    margin-left: 0.25rem;
  }
`;

SHeader.NavbarText = styled.div`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: 0.875rem;
  transition: color 0.25s ease-in-out;
  font-size: 0.875rem;
  color: #4b566b;
  text-decoration: none;
  white-space: nowrap;
  margin-left: -0.5rem;
  line-height: 1.5;

  > small {
    display: block;
    margin-bottom: -0.125rem;
    color: #7d879c;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

SHeader.NavCart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

SHeader.CartToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${SHeader.NavbarText} {
    margin-left: 0;
  }
`;

SHeader.ButtonCart = styled(ButtonCircle)`
  box-shadow: none;
  overflow: visible;

  &:hover {
    box-shadow: none;
  }

  span {
    position: absolute;
    top: -0.3125rem;
    right: -0.3125rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: #fe696a;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.25rem;
  }
`;

SHeader.SearchBox = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

SHeader.Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1280px) {
    max-width: 1260px;
  }

  ${SHeader.CustomInput} {
    padding: 0.625rem 3rem 0.625rem 1rem;
  }
`;
