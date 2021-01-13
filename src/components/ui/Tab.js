import React from "react";
import styled from "styled-components";

export const TabItem = (props) => <div {...props} />;

export const Tab = ({ defaultIndex = 0, onTabClick, children, tabSize }) => {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex);
  const changeTab = (newIndex) => {
    setBindIndex(newIndex);
  };
  const items = children.filter((item) => item.type.name === "TabItem");

  return (
    <S.Container>
      <S.Menu tabSize={tabSize}>
        {items.map(({ props: { index, label } }) => (
          <button
            key={`tab-btn-${index}`}
            onClick={() => changeTab(index)}
            className={bindIndex === index ? "active" : ""}
          >
            {label}
          </button>
        ))}
      </S.Menu>
      <S.Content>
        {items.map(({ props }) => (
          <S.Pane
            {...props}
            className={bindIndex === props.index ? "show" : ""}
            key={`tab-content-${props.index}`}
          />
        ))}
      </S.Content>
    </S.Container>
  );
};

/**
 * Style Tab
 */

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

S.Menu = styled.div`
  display: flex;
  border-bottom: 1px solid #e3e9ef;
  > button {
    flex: 1;
    position: relative;
    cursor: pointer;
    padding: 0.75rem 1.25rem;
    border: 0;
    background-color: transparent;
    color: #4b566b;
    font-size: ${({ tabSize }) => (tabSize === "large" ? "1rem" : ".875rem")};
    font-weight: ${({ tabSize }) => (tabSize === "large" ? "500" : "400")};
    line-height: 1.5;

    &::before {
      position: absolute;
      content: "";
      display: block;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: transparent;
    }
    &.active {
      color: #fe696a;
      &::before {
        background-color: #fe696a;
        transition: background-color 0.25s ease-in-out;
      }
    }

    &:hover {
      color: #fe696a;
      transition: color 0.25s ease-in-out;
    }
  }
`;

S.Content = styled.div`
  padding: 16px 30px 0 30px;
`;

S.Pane = styled.div`
  display: none;

  &.show {
    display: block;
  }
`;
