import React from 'react';
import { css } from '@emotion/core';
import { Heading1 } from 'src/components/atoms';
import { visuals } from 'src/styles';
import { Grid, Typography, Box } from '@material-ui/core';
import { Work } from 'src/types/Work';
import { ModalItem } from '../modal/ModalItem';

const works = css({
  margin: `0 15vw`,
});

const WorksArray: Array<Work> = [
  {
    id: `stgrmeikan`,
    name: `スタグル名鑑`,
    url: `https://stgrmeikan.com`,
    description: `サッカー・Jリーグのスタジアムグルメを共有できるWebアプリです。
    「スタジアムグルメを通じてさらにJリーグを盛り上げていく」ことをコンセプトとし、作りました。
    新型コロナウイルスのせいで2020シーズンは元来通りの試合運営が叶わないであろうことから、2020シーズンはβ版の公開とし、2021シーズンからの本格運用を計画しています。
    Nuxtで作りましたがReactに置き換えることを検討中。
    `,
    image: `works/stgrmeikan.png`,
    skills: [`Nuxt.js`, `TypeScript`, `Buefy`, `SCSS`, `Firebase`, `GAE(SE)`, `Figma`],
  },
  {
    id: `blog`,
    name: `Woods At Web Log`,
    url: `https://blog.woodsatweb.com`,
    description: `JAMStack構成で作成した自前のブログです。
    フリーランスエンジニアとしての働き方やフロントエンドエンジニアとして得た知識などの備忘を書いていきます。
    Markdownで記述ができるため、記事をGit管理しやすいのも利点になっています。`,
    image: `works/blog.png`,
    skills: [`Nuxt.js`, `TypeScript`, `Vuetify`, `SCSS`, `Contentful`, `Netlify`, `Figma`],
  },
  {
    id: `dachs`,
    name: `Dogs 'n Dachs`,
    url: `https://dogs-n-dachs.woodsatweb.com/`,
    description: `ダックスが大好きな飼い主さん、ダックスを飼ってみたい方に向けたダックスフント専門の写真共有サイトです。
    ジャンルをかなりニッチにしたインスタグラムをイメージしています。
    #web1weekという1週間のハッカソンイベントで、スピード感を持って作りました。
    LIKEボタンを何度でも上限なく連打できるのが特長です。`,
    image: `works/dogsndachs.png`,
    skills: [`Nuxt.js`, `Vuetify`, `SCSS`, `Firebase`, `Figma`],
  },
  {
    id: `portfolio`,
    name: `Woods At Web Site`,
    url: `https://woodsatweb.com/`,
    description: `このサイトです。React/Gatsby.jsの練習を兼ねて作っています。`,
    image: `works/portfolio.png`,
    skills: [`React`, `Gatsby.js`, `TypeScript`, `Material-UI`, `emotion`, `Netlify`, `Figma`],
  },
  {
    id: `kyufutter`,
    name: `10万円給付ったー`,
    url: `https://kyufutter10.web.app/`,
    description: `SPAでのOGP画像生成の練習がてらに作ったものです。新型コロナウイルスの影響により給付された10万円で何がしたいかを画像つきで共有できるアプリです。`,
    image: `works/kyufutter.png`,
    skills: [`Nuxt.js`, `JavaScript`, `Vuetify`, `Firebase`],
  },
];

export const Works: React.FCX = () => (
  <div css={[visuals, works]}>
    <Heading1 size={4.8}>My Works</Heading1>
    <Box mb={4}>
      <Typography variant='h4' display='block' align='center'>
        個人開発にて作成したものを掲載しています。
      </Typography>
    </Box>
    <Grid container spacing={3}>
      {WorksArray.map((work) => (
        <Grid item xs={12} sm={4} key={work.name}>
          <ModalItem work={work} />
        </Grid>
      ))}
    </Grid>
  </div>
);
