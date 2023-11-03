import React from 'react';
import { Chip } from "@nextui-org/react";

import './index.scss';

export function ConnectionState({ isConnected }) {
  return <div className='connection-state'>
    <Chip 
      className='connection-state'
      color={isConnected ? 'success' : 'danger'}
      radius='lg'
      variant='flat'
    >
      { isConnected ? 'Connected' : 'Disconnected' }
    </Chip>
  </div>;
}