import React, { useState, useEffect } from 'react';

import { socket } from '../socket';
import { ConnectionManager } from '../components/ConnectionManager';

import Header from '../components/Header';

import { NextUIProvider, Accordion, AccordionItem } from '@nextui-org/react'
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import TemperatureChart from '../components/DataChart/Temperature';
import HumidityChart from '../components/DataChart/Humidity'

import './Metrics.scss';
import AirHumidityChart from '../components/DataChart/AirHumidity';
import LevelChart from '../components/DataChart/Level';

const Metrics = () => {
    const menu = [
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
        <div className='App'>
          <Header isConnected={isConnected} menu={menu} />
          <ConnectionManager />
          <div className='metrics'>
          <Card className='metrics__card'>
            <CardBody>
              <Accordion>
                <AccordionItem key="1" aria-label="Accordion 1" title="Temperature">
                  <TemperatureChart socket={socket} />
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Humidity">
                  <HumidityChart socket={socket} />
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Air Humidity">
                  <AirHumidityChart socket={socket} />
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 4" title="Level">
                  <LevelChart socket={socket} />
                </AccordionItem>
              </Accordion>
            </CardBody>
          </Card>
          </div>
        </div>
      </NextUIProvider>
    );
}

export default Metrics;