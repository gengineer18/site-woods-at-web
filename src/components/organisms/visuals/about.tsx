import React from 'react';
import { css } from '@emotion/core';
import { visuals } from '../../../styles/index';

const about = css({
  borderTop: `10px solid green`,
  borderBottom: `10px solid pink`,
});

export const About: React.FCX = () => (
  <div css={[visuals, about]}>
    <h1>About Me</h1>
  </div>
);
