import React from 'react';
import { css } from '@emotion/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const github = css({
  color: `#000`,
});

export const IconGitHub: React.FCX = () => <GitHubIcon fontSize='large' css={github} />;
