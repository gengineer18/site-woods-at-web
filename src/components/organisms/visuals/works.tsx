import React from 'react';
import { css } from '@emotion/core';
import { Heading1 } from 'src/components/atoms';
import { visuals } from 'src/styles';
import { Grid } from '@material-ui/core';
import { Work } from 'src/types/Work';
import { ModalWrapper } from '../modal/ModalWrapper';

const works = css({
  margin: `0 15vw`,
});

const WorksArray: Array<Work> = [
  {
    id: `stgrmeikan`,
    name: `スタグル名鑑`,
    url: `https://stgrmeikan.com`,
    description: `Jリーグのスタグルを集めたアプリ`,
    imagePath: ``,
    skills: [`Nuxt.js`, `Firebase`, `GAE(SE)`],
  },
  {
    id: `blog`,
    name: `ブログ`,
    url: `https://blog.woodsatweb.com`,
    description: `ブログ`,
    imagePath: ``,
    skills: [`Nuxt.js`, `Contentful`, `Netlify`],
  },
  {
    id: `dachs`,
    name: `Dogs 'n Dachs`,
    url: `https://dogsndachs.woodsatweb.com`,
    description: `ダックスフントの写真共有SNS`,
    imagePath: ``,
    skills: [`Nuxt.js`, `Firebase`],
  },
];

export const Works: React.FCX = () => (
  <div css={[visuals, works]}>
    <Heading1 size={4.8}>My Works</Heading1>
    <Grid container spacing={3}>
      {WorksArray.map((work) => (
        <Grid item xs={12} sm={4} key={work.name}>
          <ModalWrapper work={work} />
        </Grid>
      ))}
    </Grid>
  </div>
);
