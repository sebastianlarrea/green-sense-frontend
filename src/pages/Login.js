import React, { useState } from "react";

import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";
import { HiOutlineLogin } from 'react-icons/hi';
import { RiTreeFill } from 'react-icons/ri';

import axios from 'axios';

import './Login.scss';

const LogIn = () => {
    const [isLoading, setItLoading] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        const [user, password] = event.target;
        console.log(process.env.REACT_APP_API_URL);

        setItLoading(true);
        axios
            .post(`${process.env.REACT_APP_API_URL}/users/validate-user`, { user: user.value, password: password.value })
            .then(() => {
                setItLoading(false);
                localStorage.setItem('token', true);
                window.location.assign('/metrics');
            })
            .catch(() => window.location.assign('/error-page'));
    };

    return <section className='login'>
        <Card isBlurred className="login__card">
            <CardHeader className="login__card-header">
                <RiTreeFill className="login__card-header-icon"/>
                <h1 className="login__card-header-title">Green Sense</h1>
            </CardHeader>
            <CardBody>
                <form className="login__form" onSubmit={onSubmit}>
                    <Input type="text" label="Email" />
                    <Input type="password" label="Password" />
                    <Button 
                        type="submit"
                        isLoading={isLoading}
                        size="lg"
                        startContent={<HiOutlineLogin size={25}/>}
                        className="login__button"
                    >Log In</Button>
                </form>
            </CardBody>
        </Card>
    </section>
};

export default LogIn;