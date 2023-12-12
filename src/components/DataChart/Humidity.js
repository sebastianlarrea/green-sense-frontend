import React, { useEffect } from 'react';
import { useState } from 'react';
import DataChart from '.';

import './index.scss';

const HumidityChart = ({ socket }) => {
    const [humidity, setHumiditys] = useState([]);

    function onGreenSenseEvent(value) {
        const now = new Date();
        const hour = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        setHumiditys(previous => [
            ...previous, 
            { data: value.humidity, time:`${hour}:${minutes}:${seconds}`  }
        ]);
    }

    useEffect(() => {
        socket.on('green-sense-read-sensors', onGreenSenseEvent);
        return () => socket.off('green-sense-read-sensors', onGreenSenseEvent);
    }, [socket]);

    return <section className='temperature-chart'>
        <h2 className='temperature-chart__title'>Humidity</h2>
        <DataChart data={humidity.slice(-10)} />
    </section>
};

export default HumidityChart;