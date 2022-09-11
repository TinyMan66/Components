import React, {useEffect, useState} from "react";

type PropsType = {}
const getTwoDigitsString = (num: number) => num < 10 ? ` 0${num}` : num;

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return <div>
        <span>{getTwoDigitsString(date.getHours())}</span>
        :
        <span>{getTwoDigitsString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitsString(date.getSeconds())}</span>
    </div>
}