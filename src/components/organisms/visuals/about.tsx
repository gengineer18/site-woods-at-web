import React from 'react';
import { css } from '@emotion/core';
import AnyImage from 'src/components/utils/any-image';
import { Heading1, Heading2 } from 'src/components/atoms';
import { visuals } from 'src/styles';
import Grid from '@material-ui/core/Grid';

const about = css({
  margin: `0 10vw`,
});

const name = css({
  textAlign: `center`,
});

const description = css({
  fontSize: `1.8rem`,
});

export const About: React.FCX = () => (
  <div css={[visuals, about]}>
    <Heading1 size={4.8}>About Me</Heading1>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <AnyImage filename='myicon.png' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div css={name}>
          <Heading2 size={3.6}>妹尾 弦</Heading2>
          <Heading2 size={2.4}>Gen Senoo</Heading2>
        </div>
        <div css={description}>
          <p>1991年、香川県に生まれたWebエンジニア。またの名をうずらさん。</p>
          <p>
            早稲田大学在学中にWeb制作を、卒業後金融系SIerでエンジニアとして上流工程から下流工程まで一連の開発を経験。2019年にフリーランスへ転身。フロントエンド技術を中心にWebアプリケーション・システムの開発を行っている。
          </p>
          <p>
            サンフランシスコ・上海への海外留学経験から、むしろ日本の良さを再認識。Webエンジニアという仕事を通して日本をより良くするシステム開発に携わっていきたい。
          </p>

          <p>
            趣味はJリーグ。FC東京の大ファン。一生青と赤。隣の頭文字Vのクラブとの試合じゃ「緑は大っ○い、東京！」と歌っていたこともあったのに、何の因果か緑のVue.jsをメインで扱っている。
          </p>

          <p>
            プライベートでは1児の父。可愛くてしょうがない！尋常じゃない成長力と未来を備えた我が子に負けないように、今日も私はコミットしていく。
          </p>
        </div>
      </Grid>
    </Grid>
  </div>
);
