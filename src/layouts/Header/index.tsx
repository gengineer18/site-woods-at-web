import { Link } from 'gatsby';
import React from 'react';

import styled from '@emotion/styled';

const Component: React.FCX = ({ className }) => (
  <header className={className}>
    <h1>Woods At Web</h1>
    <nav>
      <ul>
        <li>
          <Link to='#top'>Top</Link>
        </li>
        <li>
          <Link to='#about'>About Me</Link>
        </li>
        <li>
          <Link to='#works'>Contact</Link>
        </li>
        <li>
          <Link to='#skills'>Skill Set</Link>
        </li>
        <li>
          <Link to='#contact'>Contact me</Link>
        </li>
        <li>
          <a href='https://blog.woodsatweb.com/' target='_blank' rel='noreferrer'>
            Blog
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  width: 100%;

  > nav {
    padding: 2rem;
    > ul {
      display: flex;
      justify-content: center;
      list-style: none;
      > li {
        > a {
          padding: 2rem;
        }
      }
    }
  }
`;

export default StyledComponent;
