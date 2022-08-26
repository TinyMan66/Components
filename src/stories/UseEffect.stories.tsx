import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SimpleExample");

    useEffect(() => {
        console.log("useEffect every render"); //no dependencies
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log("useEffect only first render (like componentDidMount)"); //empty dependency array
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log("useEffect first render and every counter change"); //counter array dependency
        document.title = counter.toString();
    }, [counter]);


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SetTimeoutExample");

    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout");
            document.title = counter.toString();
        }, 1000);
    }, [counter]);

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}

export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(0);

    console.log("SetIntervalExample");

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000);
    }, [] );

    return <>
        Hello, counter: {counter}
    </>
}

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