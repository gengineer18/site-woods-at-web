import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import { ModalContent } from 'src/components/molecules/modal/ModalContent';
import { Work } from 'src/types/Work';

export const ModalWrapper: React.FCX<{ work: Work }> = ({ work }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button type='button' onClick={handleOpen}>
        open
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <ModalContent work={work} />
      </Modal>
    </div>
  );
};
