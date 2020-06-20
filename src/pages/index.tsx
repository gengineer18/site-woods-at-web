import React from 'react';
import { AnyImage, SEO } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <h1>this is Component page!</h1>
    <div id='top'>
      <AnyImage filename='banner.png' />
    </div>
    <div id='about'>
      <AnyImage filename='banner.png' />
    </div>
    <div id='works'>
      <AnyImage filename='banner.png' />
    </div>
    <div id='skills'>
      <AnyImage filename='banner.png' />
    </div>
    <div id='contact'>
      <AnyImage filename='banner.png' />
    </div>
  </main>
);

const StyledComponent = styled(Component)`
  ${baseStyle}
`;

export default ({ path }: { path: string }): JSX.Element => (
  <>
    <SEO title='Top' pathname={path} />
    <StyledComponent />
  </>
);
