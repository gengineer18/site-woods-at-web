import React from 'react';
import { css } from '@emotion/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const twitter = css({
  color: `#1DA1F2`,
});

export const IconTwitter: React.FCX = () => <TwitterIcon fontSize='large' css={twitter} />;
