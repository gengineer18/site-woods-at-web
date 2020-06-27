import React from 'react';
import { css } from '@emotion/core';
import { Heading1, TechIcon } from 'src/components/atoms';
import { visuals } from 'src/styles';
import Grid from '@material-ui/core/Grid';

type Skill = {
  icon: string;
  tech: string;
};

const skills = css({
  margin: `0 15vw`,
});

const skillArray: Array<Skill> = [
  { icon: `javascript.png`, tech: `JavaScript` },
  { icon: `typescript.png`, tech: `TypeScript` },
  { icon: `vue.png`, tech: `Vue.js` },
  { icon: `nuxt.jpg`, tech: `Nuxt.js` },
  { icon: `react.png`, tech: `React` },
  { icon: `gatsby.png`, tech: `Gatsby` },
  { icon: `html.png`, tech: `HTML` },
  { icon: `css.jpg`, tech: `CSS` },
  { icon: `sass.png`, tech: `Sass` },
  { icon: `stylus.png`, tech: `Stylus` },
  { icon: `java.png`, tech: `Java` },
  { icon: `firebase.png`, tech: `Firebase` },
  { icon: `netlify.jpg`, tech: `Netlify` },
  { icon: `contentful.png`, tech: `Contentful` },
  { icon: `microcms.png`, tech: `micro CMS` },
  { icon: `oracle.jpg`, tech: `Oracle DB` },
  { icon: `git.png`, tech: `Git` },
  { icon: `github.jpg`, tech: `GitHub` },
  { icon: `slack.jpg`, tech: `Slack` },
  { icon: `backlog.png`, tech: `Backlog` },
  { icon: `figma.png`, tech: `Figma` },
];

export const Skills: React.FCX = () => (
  <div css={[visuals, skills]}>
    <Heading1 size={4.8}>Skill Set</Heading1>
    <Grid container spacing={3}>
      {skillArray.map((skill) => (
        <Grid item xs={6} sm={2} key={skill.tech}>
          <TechIcon filename={`icons/${skill.icon}`}>{skill.tech}</TechIcon>
        </Grid>
      ))}
    </Grid>
  </div>
);
