import React from 'react';
import { Work } from 'src/types/Work';

export const ModalContent: React.FCX<{ work: Work }> = ({ work }) => (
  <div>
    <h2 id='simple-modal-title'>{work.name}</h2>
    <p id='simple-modal-description'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
  </div>
);
