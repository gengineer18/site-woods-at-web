import React from 'react';
import { css } from '@emotion/core';
import { Heading1 } from 'src/components/atoms';
import { visuals } from 'src/styles';

const skills = css({
  borderTop: `10px solid black`,
  borderBottom: `10px solid purple`,
});

export const Skills: React.FCX = () => (
  <div css={[visuals, skills]}>
    <Heading1 size={4.8}>Skill Set</Heading1>
  </div>
);
