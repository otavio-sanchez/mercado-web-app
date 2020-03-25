import React from 'react';
import { createGlobalStyle } from './index';

const Global = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased!important;
    -moz-osx-font-smoothing: grayscale!important;
  }
  body {
    margin: 0;
    font-feature-settings: "liga" 0;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    overflow: hidden;
  }
`;

export default function(): JSX.Element {
  return (
    <>
      <Global />
    </>
  );
}
