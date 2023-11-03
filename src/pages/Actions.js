import React, { useState } from "react";

import { Card, CardBody, CardFooter, Button, Progress } from '@nextui-org/react';
import { VscRunAll } from 'react-icons/vsc';

import Header from "../components/Header";

import axios from 'axios';

import useSnackbar from "../hooks/Snackbar";
import './Actions.scss';

const Actions = () => {

    const [loading, setLoading] = useState([false, false]);
    const [isDumbActivated, setIsDumbActivated] = useState(false);
    const showSnackbar = useSnackbar({ delay: 3000, positions: 'top-right', margin: '70px' });

    const menu = [
        { caption: 'Home', href: '/home' },
        { caption: 'Metrics', href: '/metrics' },
        { caption: 'Notifications', href: '/notifications' },
        { caption: 'About', href: '/about' }
    ];

    const toggleLoading = (number) => {
        setLoading(prevLoading => prevLoading.map((element, index) => {
            if (index === number) return !element;
            return element;
        }))
    };

    const handleTemperatureNotification = () => {
        toggleLoading(0);
        axios
            .post(`${process.env.REACT_APP_API_URL}/notifications/send-alert`, { message: '[19-10-2023 16:18]: La medida de la temperatura es de 37 grados centigrados' })
            .then(() => { 
                toggleLoading(0);
                showSnackbar('The temperature has been successfully notified!');
            });
    };

    const handleHumidityNotification = () => {
        toggleLoading(1);
        axios
            .post(`${process.env.REACT_APP_API_URL}/notifications/send-alert`, { message: '[19-10-2023 16:18]: La medida de la humedad es de 37 grados centigrados' })
            .then(() => { 
                toggleLoading(1);
                showSnackbar('The humidity has been successfully notified!');
            });
    };

    const handlePumpActivation = () => {
        setIsDumbActivated(true);
        setTimeout(() => {
            showSnackbar('The pump has been successfully finished the watered!');
            setIsDumbActivated(false);
        }, 5000);
    };

    return <section className='actions App'>
        <Header isConnected={false} menu={menu} />
        <div className="actions__container">
            <h1 className="actions__title">Actions</h1>
            <div className="actions__item">
                <h2 className="actions__subtitle">Measures</h2>
                <Card className="actions__card">
                    <CardBody  className="actions__card-body">
                        <p>Send temperature status</p>
                        <Button 
                            isLoading={loading[0]}
                            className="actions__button" 
                            color="success" 
                            startContent={<VscRunAll size={16} />}
                            onClick={handleTemperatureNotification}
                        >Execute</Button>
                    </CardBody>
                </Card>
                <Card className="actions__card">
                    <CardBody  className="actions__card-body">
                        <p>Send humidity status</p>
                        <Button 
                            isLoading={loading[1]}
                            className="actions__button" 
                            color="success" 
                            startContent={<VscRunAll size={16} />}
                            onClick={handleHumidityNotification}
                        >Execute</Button>
                    </CardBody>
                </Card>
            </div>
            <div className="actions__item">
                <h2 className="actions__subtitle">Water pump</h2>
                <Card className="actions__card">
                    <CardBody  className="actions__card-body">
                        <p>Activate water pump</p>
                        <Button 
                            className="actions__button" 
                            color="success" 
                            startContent={<VscRunAll size={16} />}
                            onClick={handlePumpActivation}
                        >Execute</Button>
                    </CardBody>
                    { isDumbActivated && <CardFooter className="actions__card-footer">
                        <Progress
                            size="sm"
                            isIndeterminate
                            aria-label="Loading..."
                            className="max-w-md"
                        />
                    </CardFooter> }
                </Card>
            </div>
        </div>
    </section>
};

export default Actions;