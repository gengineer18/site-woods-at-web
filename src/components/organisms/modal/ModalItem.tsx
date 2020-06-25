import React, { useState } from 'react';
import { Modal, Paper, Grid } from '@material-ui/core';
import { css } from '@emotion/core';
import { Work } from 'src/types/Work';
import { AnyImage } from 'src/components/';

const modal = css({
  position: `absolute`,
  minHeight: `70%`,
  minWidth: `70%`,
  maxWidth: `90%`,
  padding: `16px`,
  outline: `none`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
});

const skillList = css(`{
  &:not(:last-child):after {
      content: " / "
    }
}`);

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
      <AnyImage filename={work.image} />
      <button type='button' onClick={handleOpen}>
        Detail
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Paper variant='outlined' css={modal}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <AnyImage filename={work.image} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2 id='simple-modal-title'>{work.name}</h2>
              <p id='simple-modal-description'>{work.description}</p>
              <h3>DEMO</h3>
              <p>
                <a href={work.url} target='_blank' rel='noreferrer'>
                  {work.url}
                </a>
              </p>
              <h3>使用言語など</h3>
              <p>
                {work.skills.map((skill) => (
                  <span css={skillList} key={skill}>
                    {skill}
                  </span>
                ))}
              </p>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  );
};
