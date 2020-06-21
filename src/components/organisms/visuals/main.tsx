import React from 'react';
import { css } from '@emotion/core';
import { visuals } from '../../../styles/index';

const main = css({
  borderTop: `10px solid blue`,
  borderBottom: `10px solid red`,
});

export const Main: React.FCX = () => (
  <div css={[visuals, main]}>
    <h1>Woods At Web</h1>
  </div>
);
