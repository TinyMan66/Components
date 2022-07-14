import React, {useState} from "react";

type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}
export const OnOff = (props: OnOffType) => {

    const styleOn = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const styleOff = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const styleIndicator = {
        display: 'inline-block',
        width: "20px",
        height: "20px",
        borderRadius: '50%',
        border: '1px solid black',
        padding: '2px',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const onClickHandler = () => {
        props.onChange(true);
    }
    const offClickHandler = () => {
        props.onChange(false);
    }

    return (
        <div>
            <div style={styleOn} onClick={onClickHandler}>On
            </div>
            <div style={styleOff} onClick={offClickHandler}>Off
            </div>
            <div style={styleIndicator}></div>
        </div>
    )
}