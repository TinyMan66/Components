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
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    return <>
        Hello, counter: {counter}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0);

    console.log("Component rendered with " + counter);

    const increase = () => {
        setCounter(counter + 1)
    };
    useEffect(() => {
        console.log("Effect occurred " + counter)

        return () => {
            console.log("RESET EFFECT " + counter)
        }
    }, [counter]);


    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("");

    console.log("Component rendered with " + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        };

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text]);

    return <>
        Typed text: {text}
    </>
}
export const SetTimeoutSecondExample = () => {
    const [text, setText] = useState("");

    console.log("Component rendered with " + text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText("3 seconds have passed")
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text]);

    return <>
       Text: {text}
    </>
}

