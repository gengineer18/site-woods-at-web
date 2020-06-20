import React from 'react';
import { css } from '@emotion/core';

const date = new Date();
const year = date.getFullYear();
const copyRight = `Copyright © ${year} Woods At Web All Rights Reserved.`;

const footer = css({
  backgroundColor: `#e5012c`,
  color: `white`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `100vw`,
  height: `10vh`,
});

const Component: React.FCX = () => <footer css={footer}>{copyRight}</footer>;

export default Component;
