import { Button, AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { css } from '@emotion/core';

import styled from '@emotion/styled';

const heading = css({
  fontSize: `2.8rem`,
});

const appBar = css({
  height: `10vh`,
  borderBottom: `2px solid blue`,
});

const Component: React.FCX = () => (
  <AppBar position='fixed' color='inherit' css={appBar}>
    <Toolbar css={appBar}>
      <h1 css={heading}>Woods At Web</h1>
      <div>
        <Button color='default' href='#top'>
          Top
        </Button>
        <Button color='default' href='#about'>
          About Me
        </Button>
        <Button color='default' href='#works'>
          Works
        </Button>
        <Button color='default' href='#skills'>
          Skill Set
        </Button>
        <Button color='default' href='#contact'>
          Contact Me
        </Button>
        <Button color='default' href='https://blog.woodsatweb.com/' target='_blank' rel='noreferrer'>
          Blog
        </Button>
      </div>
    </Toolbar>
  </AppBar>
);

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 10vh;
  border-bottom: 3px solid blue;
`;

export default StyledComponent;
