import React, { useState } from 'react';
import { Modal, Paper, Grid, Button, Typography, Box } from '@material-ui/core';
import { css } from '@emotion/core';
import { Work } from 'src/types/Work';
import { AnyImage } from 'src/components/';
import { IconGitHub, ButtonBlueRed } from 'src/components/atoms';

const modal = css({
  position: `absolute`,
  height: `85%`,
  width: `85%`,
  outline: `none`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  overflow: `hidden`,
  display: `block`,
});

const content = css({
  overflow: `scroll`,
  padding: 16,
  height: `85%`,
  display: `block`,
});

const skillList = css(`{
  &:not(:last-child):after {
      content: " / "
    }
}`);

const button = css({
  margin: `10px`,
});

const github = css({
  marginLeft: `.5rem`,
});

const description = css({
  fontSize: `1.8rem`,
});

export const ModalItem: React.FCX<{ work: Work }> = ({ work }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Typography variant='h4' display='block' align='center'>
        {work.name}
      </Typography>
      <AnyImage filename={work.image} />
      <div css={button}>
        <Button fullWidth variant='outlined' color='primary' onClick={handleOpen}>
          Detail
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div css={modal}>
          <Paper variant='outlined' css={content}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <AnyImage filename={work.image} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant='h3' display='block' align='center' id='simple-modal-title' gutterBottom>
                  {work.name}
                </Typography>
                <p id='simple-modal-description' css={description}>
                  {work.description}
                </p>
                <Box mb={3}>
                  <Typography variant='h4' display='block' align='center'>
                    DEMO
                  </Typography>
                  <Typography variant='h5' display='block' align='center' gutterBottom>
                    <a href={work.url} target='_blank' rel='noreferrer'>
                      {work.url}
                    </a>
                  </Typography>
                </Box>
                <Box mb={3}>
                  <Typography variant='h4' display='block' align='center'>
                    <IconGitHub />
                    <span css={github}>GitHub</span>
                  </Typography>
                  <Typography variant='h5' display='block' align='center' gutterBottom>
                    <a href={work.git} target='_blank' rel='noreferrer'>
                      Link
                    </a>
                  </Typography>
                </Box>
                <Box mb={3}>
                  <Typography variant='h4' display='block' align='center'>
                    使用言語など
                  </Typography>
                  <Typography variant='h5' display='block' align='center' gutterBottom>
                    {work.skills.map((skill) => (
                      <span css={skillList} key={skill}>
                        {skill}
                      </span>
                    ))}
                  </Typography>
                </Box>
                <ButtonBlueRed handleClick={handleClose}>Close</ButtonBlueRed>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Modal>
    </div>
  );
};
