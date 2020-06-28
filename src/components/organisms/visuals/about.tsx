import React from 'react';
import { css } from '@emotion/core';
import { AnyImage } from 'src/components/';
import { Heading1, Heading2, IconTwitter, IconFacebook, IconGitHub, LinkToOutside } from 'src/components/atoms';
import { visuals } from 'src/styles';
import Grid from '@material-ui/core/Grid';
import AboutMDX from 'src/internal/about.mdx';

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
            <IconTwitter css={icon} />
            <LinkToOutside href='https://twitter.com/gengineer18'>@gengineer18</LinkToOutside>
          </p>
          <p>
            <IconFacebook css={icon} />
            <LinkToOutside href='https://www.facebook.com/gen.senoo'>妹尾 弦</LinkToOutside>
          </p>
          <p>
            <IconGitHub css={icon} />
            <LinkToOutside href='https://github.com/gengineer18'>gengineer18</LinkToOutside>
          </p>
        </div>
      </Grid>
    </Grid>
  </div>
);
