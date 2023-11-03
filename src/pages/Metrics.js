import React, { useState, useEffect } from 'react';

import { socket } from '../socket';
import { ConnectionManager } from '../components/ConnectionManager';

import Header from '../components/Header';

import { NextUIProvider } from '@nextui-org/react'
import TemperatureChart from '../components/DataChart/Temperature';

import './Metrics.scss';

const Metrics = () => {
    const menu = [
        { caption: 'Home', href: '/'},
        { caption: 'Actions', href: '/actions'},
        { caption: 'Notifications', href: '/notifications'},
        { caption: 'About', href: '/about'},
    ];
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
      function onConnect() {
        setIsConnected(true);
      }
  
      function onDisconnect() {
        setIsConnected(false);
      }
  
      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
  
  
      return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
      };
    }, []);
  
    return (
      <NextUIProvider>
        <div className="dark App">
          <Header isConnected={isConnected} menu={menu} />
          <ConnectionManager />
          <div className='metrics'>
            <TemperatureChart socket={socket} />
          </div>
        </div>
      </NextUIProvider>
    );
}

export default Metrics;