import React from 'react';
import { css } from '@emotion/core';
import { Heading1 } from 'src/components/atoms/index';
import { visuals } from 'src/styles/index';

const contact = css({
  borderTop: `10px solid blue`,
  borderBottom: `10px solid red`,
});

export const Contact: React.FCX = () => (
  <div css={[visuals, contact]}>
    <Heading1 size={4.8}>Contact Me</Heading1>
  </div>
);
