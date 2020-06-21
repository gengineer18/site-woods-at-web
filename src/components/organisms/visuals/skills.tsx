import React from 'react';
import { css } from '@emotion/core';
import { visuals } from '../../../styles/index';

const skills = css({
  borderTop: `10px solid black`,
  borderBottom: `10px solid purple`,
});

export const Skills: React.FCX = () => (
  <div css={[visuals, skills]}>
    <h1>Skill Set</h1>
  </div>
);
