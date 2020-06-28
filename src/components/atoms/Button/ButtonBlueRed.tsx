import React from 'react';
import { css } from '@emotion/core';

const button = css({
  width: `100%`,
  display: `inline-block`,
  padding: `0.4em 1.6em`,
  fontSize: `0.8em`,
  color: `#fff`,
  textDecoration: `none`,
  userSelect: `none`,
  background: `blue`,
  border: `2px red solid`,
  boxShadow: `0 0 0 4px blue`,
});

type ButtonClick = {
  handleClick: () => void;
};

export const ButtonBlueRed: React.FCX<ButtonClick> = ({ children, handleClick }) => (
  <button type='button' css={button} onClick={handleClick}>
    {children}
  </button>
);
