import React, { useEffect } from 'react';
import { useState } from 'react';
import DataChart from '.';

import './index.scss';

const TemperatureChart = ({ socket }) => {
    const [temperatures, setTemperatures] = useState([]);

    function onGreenSenseEvent(value) {
        const now = new Date();
        const hour = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        setTemperatures(previous => [
            ...previous, 
            { data: value, time:`${hour}:${minutes}:${seconds}`  }
        ]);
    }

    useEffect(() => {
        socket.on('green-sense-event', onGreenSenseEvent);
        return () => socket.off('green-sense-event', onGreenSenseEvent);
    }, [socket]);

    return <section className='temperature-chart'>
        <h2 className='temperature-chart__title'>Temperature</h2>
        <DataChart data={temperatures.slice(-10)} />
    </section>
};

export default TemperatureChart;