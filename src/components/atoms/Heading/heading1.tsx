import React from 'react';
import { css } from '@emotion/core';

const heading = (size: number) =>
  css({
    fontSize: `${size}rem`,
    textAlign: `center`,
  });

type size = {
  size: number;
};

export const Heading1: React.FCX<size> = ({ children, size }) => <h1 css={heading(size)}>{children}</h1>;
