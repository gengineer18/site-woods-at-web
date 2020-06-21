import React from 'react';
import { css } from '@emotion/core';
import { visuals } from 'src/styles/index';
import { Heading1, Heading2 } from 'src/components/atoms/index';

// css
const main = css({
  background: `linear-gradient(blue, white 25% 75%, red 100%)`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

export const Main: React.FCX = () => (
  <div css={[visuals, main]}>
    <div>
      <Heading1 size={4.8}>Woods At Web</Heading1>
      <Heading2 size={2.4}>Welcome my web site!</Heading2>
    </div>
  </div>
);
