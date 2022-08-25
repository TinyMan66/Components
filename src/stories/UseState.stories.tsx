import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo',
}
function generateData(){
    //difficult counting
    console.log("generateData")
    return 37654339399;
}

export const Example1 = () => {
    console.log("Example1");

    const initValue = useMemo(generateData, []);

    const [counter, setCounter] = useState(initValue);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}