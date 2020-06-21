import React from 'react';
import { css } from '@emotion/core';

const anchor = css({
  height: `10vh`,
});

type anchorProp = {
  id: string;
};

export const Anchor: React.FCX<anchorProp> = ({ id }) => <div css={anchor} id={id} />;
