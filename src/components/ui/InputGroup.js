import React from "react";
import styled from "styled-components";

export const InputGroup = ({ children, ...rest }) => {
  return <S.Form {...rest}>{children}</S.Form>;
};

export const InputPrepend = ({ children, ...rest }) => {
  return <S.Prepend {...rest}>{children}</S.Prepend>;
};

export const Input = ({ children, ...rest }) => {
  return <S.Input {...rest}>{children}</S.Input>;
};

export const InputAppend = ({ children, ...rest }) => {
  return <S.Append {...rest}>{children}</S.Append>;
};

/**
 * Style Input Group
 */

const S = {};

S.Form = styled.form`
  position: relative;
  width: 100%;
  display: block;
`;

S.Prepend = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 5;
`;

S.Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 1.25rem + 2px);
  padding: 0.625rem 1rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4b566b;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dae1e7;
  border-radius: 0.3125rem;
  box-shadow: 0 0 0 0 transparent;
`;

S.Append = styled(S.Prepend)`
  right: 0;
`;
