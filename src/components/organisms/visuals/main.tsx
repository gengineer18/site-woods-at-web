import React from 'react';
import { css } from '@emotion/core';
import { visuals } from '../../../styles/index';

const main = css({
  background: `linear-gradient(blue, white 25% 75%, red 100%)`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

const heading = css({
  fontSize: `4.8rem`,
});

export const Main: React.FCX = () => (
  <div css={[visuals, main]}>
    <h1 css={heading}>Woods At Web</h1>
  </div>
);
