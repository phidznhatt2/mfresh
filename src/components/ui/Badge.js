import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Badge = ({
  shadowColor = "rgba(243, 71, 112, 0.9)",
  bgColor = "#f34770",
  children,
  ...rest
}) => {
  return (
    <S.Wrapper shadowColor={shadowColor} bgColor={bgColor} {...rest}>
      {children}
    </S.Wrapper>
  );
};

Badge.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.any,
  shadowColor: PropTypes.string,
};
export default Badge;

/**
 * Style Badge
 */

const S = {};

S.Wrapper = styled.span`
  position: absolute;
  top: 0.75rem;
  right: auto;
  z-index: 5;
  color: #fff;
  box-shadow: 0 0.5rem 1.125rem -0.275rem ${(props) => props.shadowColor};
  background-color: ${(props) => props.bgColor};
  display: inline-block;
  padding: 0.25em 0.625em;
  font-size: 75%;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.175rem;
`;
