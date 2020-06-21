import React from 'react';
import { SEO, Anchor, Main, About, Works, Skills, Contact } from 'src/components';
import { baseStyle } from 'src/styles';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <main className={className}>
    <section>
      <Anchor id='top' />
      <Main />
    </section>
    <section>
      <Anchor id='about' />
      <About />
    </section>
    <section>
      <Anchor id='works' />
      <Works />
    </section>
    <section>
      <Anchor id='skills' />
      <Skills />
    </section>
    <section>
      <Anchor id='contact' />
      <Contact />
    </section>
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
