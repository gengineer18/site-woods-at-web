import React from 'react';
import { css } from '@emotion/core';

const heading = (size: number) =>
  css({
    fontSize: `${size}rem`,
    textAlign: `center`,
  });

type Size = {
  size: number;
};

export const Heading2: React.FCX<Size> = ({ children, size }) => <h2 css={heading(size)}>{children}</h2>;
