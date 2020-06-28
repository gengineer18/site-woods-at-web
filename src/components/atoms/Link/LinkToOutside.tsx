import React from 'react';

type href = {
  href: string;
};

export const LinkToOutside: React.FCX<href> = ({ href, children }) => (
  <a href={href} target='_blank' rel='noreferrer'>
    {children}
  </a>
);
