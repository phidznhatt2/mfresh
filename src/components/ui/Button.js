import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Button = ({
  onClick,
  href,
  to,
  target,
  children,
  disabled,
  isLoading,
  variant = "transparent",
  size = "medium",
  endIcon,
  startIcon,
  className,
  ...rest
}) => {
  if (to)
    return (
      <S.Link
        variant={variant}
        size={size}
        disabled={disabled || isLoading}
        to={to}
        className={className}
        {...rest}
      >
        {startIcon && <span className="start-icon">{startIcon}</span>}
        {children}
        {endIcon && <span className="end-icon">{endIcon}</span>}
      </S.Link>
    );

  return (
    <S.Base
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={className}
      {...rest}
    >
      {startIcon && <span className="start-icon">{startIcon}</span>}
      {children}
      {endIcon && <span className="end-icon">{endIcon}</span>}
    </S.Base>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  endIcon: PropTypes.any,
  href: PropTypes.any,
  isLoading: PropTypes.any,
  onClick: PropTypes.func,
  size: PropTypes.string,
  startIcon: PropTypes.any,
  target: PropTypes.any,
  to: PropTypes.any,
  variant: PropTypes.string,
};

export const ButtonSquare = ({ children, ...rest }) => {
  return <S.Square {...rest}>{children}</S.Square>;
};

export const ButtonCircle = ({ children, ...rest }) => {
  return <S.Circle {...rest}>{children}</S.Circle>;
};

/**
 * Style Button
 */

const theme = {
  default: "#e0e0e0",
  primary: "#fe696a",
  secondary: "#f3f5f9",
  light: "#fff",
  dark: "#4b566b",
};

const S = {};

S.A = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`;

S.Default = css`
  position: relative;
  overflow: hidden;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  font-size: 0.9375rem;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;

  ${({ variant, color }) =>
    (variant === "transparent" &&
      css`
        background-color: transparent;
        color: ${color ? color : theme.dark};
      `) ||
    (variant === "contained" &&
      css`
        background-color: ${color ? color : theme.default};
        color: ${color ? theme.light : theme.dark};
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
          0px 2px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        &:hover {
          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }
      `) ||
    (variant === "outlined" &&
      css`
        background-color: transparent;
        border-color: ${color ? color : theme.secondary};
        color: ${color ? color : theme.dark};
      `)}

  ${({ size }) =>
    (size === "small" &&
      css`
        padding: 4px 5px;
      `) ||
    (size === "medium" &&
      css`
        padding: 6px 16px;
      `) ||
    (size === "large" &&
      css`
        padding: 8px 22px;
      `)}

  ${({ disabled }) =>
    disabled &&
    css`
      color: rgba(0, 0, 0, 0.26);
      box-shadow: none;
      background-color: transparent;
      cursor: default;
      pointer-events: none;
      border: 1px solid rgba(0, 0, 0, 0.12);
    `}


  &:hover {
    background-color: ${({ colorHover }) => colorHover};
  }

  .start-icon {
    display: inherit;
    margin-left: -4px;
    margin-right: 8px;
  }

  .end-icon {
    display: inherit;
    margin-left: 8px;
    margin-right: -4px;
  }
`;

S.Base = styled.button`
  ${S.Default}
`;

S.Link = styled(Link)`
  ${S.Default}
`;

S.Icon = css`
  font-size: 0;
  padding: 0;
  width: ${({ width }) => (width ? width : 35)}px;
  height: ${({ width }) => (width ? width : 35)}px;
`;

S.Circle = styled(S.Base)`
  ${S.Icon}
  border-radius: 50%;
`;

S.Square = styled(S.Base)`
  ${S.Icon}
  border-radius: 0.3125rem;
`;

S.Cart = styled(S.Base)`
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(254, 105, 106, 0.9);
  background-color: #fe696a;
  color: #fff;
  padding: 0.425rem 1rem;
  border-radius: 0.1875rem;
  border-color: #fe696a;

  &:hover {
    background-color: #fe3638;
    box-shadow: none;
  }
`;
