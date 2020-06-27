import React from 'react';
import { css } from '@emotion/core';
import { AnyImage } from 'src/components/';

type prop = {
  filename: string;
};

const rect = 120;

const wrap = css({
  width: `${rect}px`,
  height: `${rect}px`,
});

const icon = css({
  maxWidth: `${rect}px`,
});

const text = css({
  display: `block`,
  maxWidth: `${rect}px`,
  textAlign: `center`,
  fontSize: `2.0rem`,
});

export const TechIcon: React.FCX<prop> = ({ filename, children }) => (
  <>
    <div css={wrap}>
      <AnyImage filename={filename} css={icon} />
    </div>
    <span css={text}>{children}</span>
  </>
);
