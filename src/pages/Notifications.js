import React, { useEffect, useState } from "react";
import axios from 'axios'

import { Card, CardBody, Switch, Input, CardFooter, Button } from '@nextui-org/react';
import { LiaTemperatureLowSolid } from 'react-icons/lia';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';
import { FiPercent } from 'react-icons/fi';

import Header from "../components/Header";

import './Notifications.scss';

const Notifications = () => {
    const menu = [
        { caption: 'Metrics', href: '/metrics' },
        { caption: 'Actions', href: '/actions' },
        { caption: 'About', href: '/about' }
    ]
    const [value, setValue] = useState({ 
        temperature: false,
        temperatureThreshold: '0',
        humidity: false,
        humidityThreshold: '0',
        temperatureAndHumidity: false,
        waterPumpStatus: false
    })
    const [loading, setLoading] = useState(false)

    const onUpdateSettings = () => {
        setLoading(true);
        axios.post(`${process.env.REACT_APP_API_URL}/config/update-settings`, { config: value })
             .then(() => setLoading(false))
    }

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/config/get-settings`)
        .then(response => setValue(response.data.config))
    }, [])

    return <section className='notifications App'>
        <Header isConnected={false} menu={menu} />
        <div className="notifications__container">
            <h1 className="notifications__title">Notifications</h1>
            <Card className="notifications__card">
                <CardBody  className="notifications__card-body">
                    <div className="notifications__item">
                        <Switch 
                            color="success"  
                            isSelected={value.temperature}
                            onValueChange={(data) => setValue({ ...value, temperature: data})}
                        >
                            Temperature threshold exceeded
                        </Switch>
                        <Input 
                            className="notifications__input" 
                            radius="full" 
                            type="text" 
                            variant="faded" 
                            placeholder="Threshold" 
                            startContent={<LiaTemperatureLowSolid size={25} />}
                            endContent={<TbTemperatureCelsius size={25} />}
                            value={value.temperatureThreshold}
                            onValueChange={(data) => setValue({ ...value, temperatureThreshold: data})}
                        />
                    </div>
                    <div className="notifications__item">
                        <Switch 
                            color="success"  
                            isSelected={value.humidity}
                            onValueChange={(data) => setValue({ ...value, humidity: data})}
                        >
                            Humidity threshold exceeded
                        </Switch>
                        <Input 
                            className="notifications__input" 
                            radius="full" 
                            type="text" 
                            variant="faded" 
                            placeholder="Threshold" 
                            startContent={<WiHumidity size={30} />}
                            endContent={<FiPercent size={25} />}
                            value={value.humidityThreshold}
                            onValueChange={(data) => setValue({ ...value, humidityThreshold: data})}
                        />
                    </div>
                    <div className="notifications__item">
                        <Switch color="success" onValueChange={(data) => setValue({ ...value, temperatureAndHumidity: data})} isSelected={value.temperatureAndHumidity}>Temperature and humidity status</Switch>
                    </div>
                    <div className="notifications__item">
                        <Switch color="success" onValueChange={(data) => setValue({ ...value, waterPumpStatus: data})} isSelected={value.waterPumpStatus}>The water pump is on</Switch>
                    </div>
                </CardBody>
                <CardFooter>
                    <Button 
                        className="actions__button" 
                        color="success" 
                        isLoading={loading}
                        onClick={onUpdateSettings}
                    >Update settings</Button>
                </CardFooter>
            </Card>
        </div>
    </section>
};

export default Notifications;