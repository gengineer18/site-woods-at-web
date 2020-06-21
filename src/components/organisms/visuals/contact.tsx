import React from 'react';
import { css } from '@emotion/core';
import { visuals } from '../../../styles/index';

const contact = css({
  borderTop: `10px solid blue`,
  borderBottom: `10px solid red`,
});

export const Contact: React.FCX = () => (
  <div css={[visuals, contact]}>
    <h1>Contact Me</h1>
  </div>
);
