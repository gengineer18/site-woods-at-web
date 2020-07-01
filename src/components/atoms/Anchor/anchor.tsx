import React from 'react';
import { css } from '@emotion/core';

const anchor = css({
  height: `10vh`,
});

type AnchorProp = {
  id: string;
};

export const Anchor: React.FCX<AnchorProp> = ({ id }) => <div css={anchor} id={id} />;
