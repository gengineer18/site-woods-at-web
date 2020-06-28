import React from 'react';
import { css } from '@emotion/core';
import { AnyImage } from 'src/components/';
import { Heading1, Heading2 } from 'src/components/atoms';
import { visuals } from 'src/styles';
import Grid from '@material-ui/core/Grid';
import AboutMDX from 'src/internal/about.mdx';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

const about = css({
  margin: `0 10vw`,
});

const name = css({
  textAlign: `center`,
});

const description = css({
  fontSize: `1.8rem`,
});

const icon = css({
  marginRight: `1rem`,
});

const cTwitter = css({
  color: `#1DA1F2`,
});
const cFacebook = css({
  color: `#1877f2`,
});
const cGitHub = css({
  color: `#000`,
});

export const About: React.FCX = () => (
  <div css={[visuals, about]}>
    <Heading1 size={4.8}>About Me</Heading1>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <AnyImage filename='icon.png' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div css={name}>
          <Heading2 size={4}>妹尾 弦</Heading2>
          <Heading2 size={3.2}>Gen Senoo</Heading2>
        </div>
        <div css={description}>
          <AboutMDX />
        </div>
        <div css={description}>
          <p>
            <TwitterIcon fontSize='large' css={[icon, cTwitter]} />
            <a href='https://twitter.com/gengineer18' target='_blank' rel='noreferrer'>
              @gengineer18
            </a>
          </p>
          <p>
            <FacebookIcon fontSize='large' css={[icon, cFacebook]} />
            <a href='https://www.facebook.com/gen.senoo' target='_blank' rel='noreferrer'>
              妹尾 弦
            </a>
          </p>
          <p>
            <GitHubIcon fontSize='large' css={[icon, cGitHub]} />
            <a href='https://github.com/gengineer18' target='_blank' rel='noreferrer'>
              gengineer18
            </a>
          </p>
        </div>
      </Grid>
    </Grid>
  </div>
);
