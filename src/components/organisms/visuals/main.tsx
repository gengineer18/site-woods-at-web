import React from 'react';
import { css } from '@emotion/core';
import { visuals } from '../../../styles/index';

// css
const main = css({
  background: `linear-gradient(blue, white 25% 75%, red 100%)`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

const heading = (size: number) =>
  css({
    fontSize: `${size}rem`,
    textAlign: `center`,
  });

export const Main: React.FCX = () => (
  <div css={[visuals, main]}>
    <div>
      <h1 css={heading(4.8)}>Woods At Web</h1>
      <h2 css={heading(2.4)}>Welcome my web site!</h2>
    </div>
  </div>
);
