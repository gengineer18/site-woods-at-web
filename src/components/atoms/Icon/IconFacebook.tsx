import React from 'react';
import { css } from '@emotion/core';
import FacebookIcon from '@material-ui/icons/Facebook';

const facebook = css({
  color: `#1877f2`,
});

export const IconFacebook: React.FCX = () => <FacebookIcon fontSize='large' css={facebook} />;
