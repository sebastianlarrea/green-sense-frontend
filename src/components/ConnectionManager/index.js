import React, { useState, useEffect } from 'react';
import { socket } from '../../socket';

import { Switch, Card, CardBody } from '@nextui-org/react'

import './index.scss';

export function ConnectionManager() {

  const [enableSocket, setEnableSocket] = useState(false);

  useEffect(() => {
    if (enableSocket) {
      socket.connect();
    } else {
      socket.disconnect();
    }
  }, [enableSocket]);

  return (
    <div className='connection-manager'>
      <Card className='connection-manager__card'>
        <CardBody className='connection-manager__card-body'>
          <Switch 
            color="success" 
            onValueChange={setEnableSocket}
            aria-label="Enable traffic"
          >
            Enable traffic
          </Switch>
        </CardBody>
      </Card>
    </div>
  );
}