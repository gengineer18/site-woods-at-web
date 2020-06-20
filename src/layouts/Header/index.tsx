import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <header className={className}>
    <AppBar position='static' color='inherit'>
      <Toolbar>
        <Typography variant='h3'>Woods At Web</Typography>
        <Button color='inherit' href='#top'>
          Top
        </Button>
        <Button color='inherit' href='#about'>
          About Me
        </Button>
        <Button color='inherit' href='#works'>
          Works
        </Button>
        <Button color='inherit' href='#skills'>
          Skill Set
        </Button>
        <Button color='inherit' href='#contact'>
          Contact Me
        </Button>
        <Button color='inherit' href='https://blog.woodsatweb.com/' target='_blank' rel='noreferrer'>
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  </header>
);

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
`;

export default StyledComponent;
