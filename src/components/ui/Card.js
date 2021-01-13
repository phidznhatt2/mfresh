import React from "react";
import styled from "styled-components";

export const Card = ({ width = "345px", children, ...rest }) => {
  return (
    <S.Wrapper width={width} {...rest}>
      {children}
    </S.Wrapper>
  );
};

export const CardHeader = ({ avatar, children, ...rest }) => {
  return (
    <S.Header {...rest}>
      {avatar} {children}
    </S.Header>
  );
};

export const CardMedia = ({ title, image, children, ...rest }) => {
  return (
    <S.Media title={title} image={image} {...rest}>
      {children}
    </S.Media>
  );
};

export const CardBody = ({ title, image, children, ...rest }) => {
  return <S.Body {...rest}>{children}</S.Body>;
};

/**
 * Style Card
 */

const S = {};

S.Wrapper = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  max-width: ${({ width }) => width};
  cursor: pointer;
`;

S.Header = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
`;

S.Media = styled.div`
  display: block;
  background-image: url("${({ image }) => image}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  padding-top: 56.25%;
`;

S.Body = styled.div``;
