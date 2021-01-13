import { createGlobalStyle, css } from "styled-components";

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  small,
  .small {
    font-size: 80%;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  * {
    box-sizing: border-box;
  }
  html {
    line-height: 1;
  }
  body {
    overflow-x: hidden;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    &:hover,
    &:focus,
    &:active {
      outline: 0;
      box-shadow: none;
      text-decoration: none;
    }
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
  button {
    background-color: transparent;
    cursor: pointer;
  }
  button,
  input,
  select {
    border: none;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

const base = css`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: "Rubik", sans-serif;
  }

  h5,
  .h5 {
    font-size: 1.25rem;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 99px;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${base}
`;

export default GlobalStyle;
