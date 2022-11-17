import React, {useEffect, useState} from 'react';
import {Clock} from "./Clock";


export default {
    title: 'Clock',
    component: Clock,
};

export const ClockExample = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    console.log("ClockExample");

    useEffect(() => {
        setInterval(() => {
            let date = new Date();
            setHours(date.getHours())
            setMinutes(date.getMinutes())
            setSeconds(date.getSeconds())
        }, 1000);
    }, [] );

    return <>
        Hello, time: {hours}:{minutes}:{seconds}
    </>
}

export const BaseAnalogExample = () => {
    return <Clock mode={'analog'}/>;
};

export const BaseDigitalExample = () => {
    return <Clock mode={'digital'}/>;
};