import React from 'react';
import { css } from '@emotion/core';
import { visuals } from '../../../styles/index';

const works = css({
  borderTop: `10px solid black`,
  borderBottom: `10px solid purple`,
});

export const Works: React.FCX = () => (
  <div css={[visuals, works]}>
    <h1>My Works</h1>
  </div>
);
