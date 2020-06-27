import React from 'react';
import { css } from '@emotion/core';
import { NetlifyForm } from 'src/components';
import { Heading1 } from 'src/components/atoms';
import { visuals } from 'src/styles';
import { Typography, Box } from '@material-ui/core';

const contact = css({
  margin: `0 15vw`,
});

export const Contact: React.FCX = () => (
  <div css={[visuals, contact]}>
    <Heading1 size={4.8}>Contact Me</Heading1>
    <Box mb={3}>
      <Typography variant='h5' display='block' align='center'>
        ご連絡・お仕事のご相談等は下記フォームまたは
        <a href='https://twitter.com/gengineer18' target='_blank' rel='noreferrer'>
          TwitterのDM
        </a>
        よりお願い致します。
      </Typography>
    </Box>
    <NetlifyForm />
  </div>
);
