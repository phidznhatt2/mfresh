import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Tab, TabItem } from "../ui";

import { Headset } from "@styled-icons/fa-solid";
import { Envelope } from "@styled-icons/fa-regular";
import { Twitter, Facebook, Instagram, Youtube } from "@styled-icons/fa-brands";

const Sidebar = ({ show, closeSidebar }) => {
  return (
    <S.Wrapper show={show}>
      <S.BtnClose onClick={closeSidebar}>
        <span className="btn-text">Close sidebar</span>
        <span className="btn-icon">×</span>
      </S.BtnClose>
      <S.Inner>
        <Tab defaultIndex="1" tabSize="large">
          <TabItem label="Categories" index="1">
            Categories
          </TabItem>
          <TabItem label="Menu" index="2">
            Menu
          </TabItem>
        </Tab>
        <S.Contact>
          <S.ContactSupport>
            <S.ContactIcon>
              <Headset size="24" color="#fe696a" />
            </S.ContactIcon>
            <S.ContactText>
              <p>Support</p>
              <a href="tel:0393281149" alt="phone">
                039 328 1149
              </a>
            </S.ContactText>
          </S.ContactSupport>
          <S.ContactEmail>
            <S.ContactIcon>
              <Envelope size="24" color="#fe696a" />
            </S.ContactIcon>
            <S.ContactText>
              <p>Email</p>
              <a href="mailto:s2bongma2s@gmail.com" alt="email">
                s2bongma2s@gmail.com
              </a>
            </S.ContactText>
          </S.ContactEmail>
          <S.ContactSocial>
            <h5>Follow us</h5>
            <S.ListSocial>
              <li>
                <a href="twitter" alt="twitter">
                  <Twitter size="14" color="#4b566b" />
                </a>
              </li>
              <li>
                <a href="facebook" alt="facebook">
                  <Facebook size="14" color="#4b566b" />
                </a>
              </li>
              <li>
                <a href="instagram" alt="instagram">
                  <Instagram size="14" color="#4b566b" />
                </a>
              </li>
              <li>
                <a href="youtube" alt="youtube">
                  <Youtube size="14" color="#4b566b" />
                </a>
              </li>
            </S.ListSocial>
          </S.ContactSocial>
        </S.Contact>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Sidebar;

/**
 * Style Sidebar
 */

const S = {};

S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  border-right: 1px solid #e3e9ef;
  width: 100%;
  max-width: 22rem;
  padding-top: 5rem;
  background-color: #fff;
  animation-name: slideInLeft;
  animation-duration: 300ms;
  z-index: 1030;

  @media (max-width: 992px) {
    animation-name: ${({ show }) => !show && "slideOutLeft"};
    left: ${({ show }) => !show && "-22rem"};
    border: none;
    box-shadow: ${({ show }) =>
      show && "1.375rem 0 2rem -.75rem rgba(43,52,69,.15)"};
    z-index: 1037;
    padding-top: 3.5rem;
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-22rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOutLeft {
    from {
      transform: translateX(22rem);
    }
    to {
      transform: translateX(0);
    }
  }
`;

S.BtnClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 3.5rem;
  padding: 16px 30px;
  border-bottom: 1px solid #e3e9ef;
  color: #4b566b;
  border-radius: 0;
  opacity: 0.75;
  background-color: #f6f9fc;
  transition: opacity 0.25s ease-in-out;

  .btn-text {
    font-size: 0.75rem;
  }

  .btn-icon {
    display: inline-block;
    vertical-align: middle;
    font-size: 1.75rem;
    margin-left: 8px;
    margin-right: -4px;
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 992px) {
    display: block;
  }
`;

S.Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;

  @media (max-width: 992px) {
    margin-top: 0.5rem;
  }
`;

S.Contact = styled.div`
  padding: 48px 30px 24px;
  margin-bottom: 2rem;
`;

S.ContactWrapper = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

S.ContactSupport = styled.div`
  ${S.ContactWrapper}
`;

S.ContactEmail = styled.div`
  ${S.ContactWrapper}
`;

S.ContactIcon = styled.div`
  margin-right: 4px;
  margin-top: 4px;
`;

S.ContactText = styled.div`
  padding-left: 0.5rem;
  line-height: 1.5;
  p {
    font-size: 0.875rem;
    color: #7d879c;
  }
  a {
    font-size: 0.9375rem;
    color: #4b566b;
    &:hover {
      color: #fe696a;
    }
  }
`;

S.ContactSocial = styled.div`
  h5 {
    font-size: 1.0625rem;
    font-weight: 500;
    color: #373f50;
    padding: 8px 0 4px;
    margin-bottom: 12px;
    line-height: 1.2;
  }
`;

S.ListSocial = styled.ul`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid #e3e9ef;
    border-radius: 0.3125rem;
    background-color: transparent;
    color: #4b566b;
    text-align: center;
    margin: 0 12px 8px 0;
    transition: all 0.25s ease-in-out;

    &:hover {
      background-color: #1da1f2;
      box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(29, 161, 242, 0.9);
      border-color: transparent;
      svg {
        color: #fff;
      }
    }
  }
`;
