import React from "react";

import { Card, CardBody, Switch, Input } from '@nextui-org/react';
import { LiaTemperatureLowSolid } from 'react-icons/lia';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';
import { FiPercent } from 'react-icons/fi';

import Header from "../components/Header";

import './Notifications.scss';

const Notifications = () => {
    const menu = [
        { caption: 'Home', href: '/home' },
        { caption: 'Metrics', href: '/metrics' },
        { caption: 'Actions', href: '/actions' },
        { caption: 'About', href: '/about' }
    ]


    return <section className='notifications App'>
        <Header isConnected={false} menu={menu} />
        <div className="notifications__container">
            <h1 className="notifications__title">Notifications</h1>
            <Card className="notifications__card">
                <CardBody  className="notifications__card-body">
                    <div className="notifications__item">
                        <Switch color="success" >Temperature threshold exceeded</Switch>
                        <Input 
                            className="notifications__input" 
                            radius="full" 
                            type="text" 
                            variant="faded" 
                            placeholder="Threshold" 
                            startContent={<LiaTemperatureLowSolid size={25} />}
                            endContent={<TbTemperatureCelsius size={25} />}
                        />
                    </div>
                    <div className="notifications__item">
                        <Switch color="success" >Humidity threshold exceeded</Switch>
                        <Input 
                            className="notifications__input" 
                            radius="full" 
                            type="text" 
                            variant="faded" 
                            placeholder="Threshold" 
                            startContent={<WiHumidity size={30} />}
                            endContent={<FiPercent size={25} />}
                        />
                    </div>
                    <div className="notifications__item">
                        <Switch color="success" >Temperature and humidity status</Switch>
                    </div>
                    <div className="notifications__item">
                        <Switch color="success" >The water pump is on</Switch>
                    </div>
                </CardBody>
            </Card>
        </div>
    </section>
};

export default Notifications;