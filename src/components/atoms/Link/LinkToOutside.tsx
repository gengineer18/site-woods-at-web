import React from 'react';

type Href = {
  href: string;
};

export const LinkToOutside: React.FCX<Href> = ({ href, children }) => (
  <a href={href} target='_blank' rel='noreferrer'>
    {children}
  </a>
);
