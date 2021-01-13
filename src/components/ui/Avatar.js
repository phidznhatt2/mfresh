import React from "react";
import styled from "styled-components";

const Avatar = ({ bgColor = "#f44336", children, ...rest }) => {
  return (
    <S.Wrapper bgColor={bgColor} {...rest}>
      <div>{children}</div>
    </S.Wrapper>
  );
};

export default Avatar;

/**
 * Style Avatar
 */

const S = {};

S.Wrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;

  > div {
    width: 40px;
    height: 40px;
    background-color: ${({ bgColor }) => bgColor};
    color: #fff;
    display: flex;
    overflow: hidden;
    position: relative;
    font-size: 1.25rem;
    align-items: center;
    flex-shrink: 0;
    line-height: 1;
    user-select: none;
    border-radius: 50%;
    justify-content: center;
  }
`;
