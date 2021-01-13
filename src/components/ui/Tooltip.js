import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";

const Tooltip = ({
  onClick,
  children,
  text,
  arrow = false,
  direction = "top",
  delay,
  ...rest
}) => {
  let timeout;
  const [show, setShow] = React.useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setShow(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setShow(false);
  };
  return (
    <S.Container
      onClick={onClick}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      {...rest}
    >
      {show && (
        <S.Box className="tooltip-custom" direction={direction}>
          {text}
          {arrow && <S.Arrow />}
        </S.Box>
      )}
      {children}
    </S.Container>
  );
};

Tooltip.propTypes = {
  children: PropTypes.any,
  direction: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  arrow: PropTypes.bool,
};

export default Tooltip;

/**
 * Styled Tooltip
 */

const varCss = {
  textColor: "#fff",
  backgroundColor: "#000",
  marginX: "10px",
  marginY: "30px",
  arrowSize: "6px",
};

const S = {};

S.Container = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

S.Box = styled.div`
  position: absolute;
  border-radius: 4px;
  padding: 6px;
  color: ${varCss.textColor};
  background: ${varCss.backgroundColor};
  font-size: 14px;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

  ${(props) =>
    (props.direction === "top" &&
      css`
        top: calc(${varCss.marginY} * -1);
        left: 50%;
        transform: translateX(-50%);
        span {
          top: 100%;
          border-top-color: ${varCss.backgroundColor};
        }
      `) ||
    (props.direction === "right" &&
      css`
        left: calc(100% + ${varCss.marginX});
        top: 50%;
        transform: translateX(0) translateY(-50%);

        span {
          left: calc(${varCss.arrowSize} * -1);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-right-color: ${varCss.backgroundColor};
        }
      `) ||
    (props.direction === "bottom" &&
      css`
        bottom: calc(${varCss.marginY} * -1);
        left: 50%;
        transform: translateX(-50%);

        span {
          bottom: 100%;
          border-bottom-color: ${varCss.backgroundColor};
        }
      `) ||
    (props.direction === "left" &&
      css`
        left: auto;
        right: calc(100% + ${varCss.marginX});
        top: 50%;
        transform: translateX(0) translateY(-50%);

        span {
          left: auto;
          right: calc(${varCss.arrowSize} * -2);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-left-color: ${varCss.backgroundColor};
        }
      `)}
`;

S.Arrow = styled.span`
  content: "";
  left: 50%;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-width: ${varCss.arrowSize};
  margin-left: calc(${varCss.arrowSize} * -1);
`;
