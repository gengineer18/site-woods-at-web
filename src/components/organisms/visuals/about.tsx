import React from 'react';
import { css } from '@emotion/core';
import AnyImage from 'src/components/utils/any-image';
import { Heading1, Heading2 } from 'src/components/atoms';
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

export const About: React.FCX = () => (
  <div css={[visuals, about]}>
    <Heading1 size={4.8}>About Me</Heading1>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <AnyImage filename='myicon.png' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div css={name}>
          <Heading2 size={3.6}>妹尾 弦</Heading2>
          <Heading2 size={2.4}>Gen Senoo</Heading2>
        </div>
        <div css={description}>
          <AboutMDX />
        </div>
      </Grid>
    </Grid>
  </div>
);
