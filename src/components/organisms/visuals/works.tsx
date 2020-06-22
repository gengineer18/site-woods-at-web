import React from 'react';
import { css } from '@emotion/core';
import { Heading1 } from 'src/components/atoms';
import { visuals } from 'src/styles';

const works = css({
  borderTop: `10px solid black`,
  borderBottom: `10px solid purple`,
});

export const Works: React.FCX = () => (
  <div css={[visuals, works]}>
    <Heading1 size={4.8}>My Works</Heading1>
  </div>
);
