import React from 'react';
import { css } from '@emotion/core';
import { Heading1 } from 'src/components/atoms/index';
import { visuals } from 'src/styles/index';

const about = css({
  textAlign: `center`,
});

export const About: React.FCX = () => (
  <div css={[visuals, about]}>
    <Heading1 size={4.8}>About Me</Heading1>
  </div>
);
