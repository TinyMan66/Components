import React, {useState} from "react";

type PropsType = {
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    setInterval(() => {
        setDate(new Date());
    }, 1000)

    return <div>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </div>
}