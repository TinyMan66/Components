import React, {useState} from "react";

type OnOffType = {
    changeOn: (on: boolean) => void
    defaultOn?: boolean
}
export const UncontrolledOnOff = (props: OnOffType) => {

    let [on, setOn] = useState(props.defaultOn? props.defaultOn: false);

    const styleOn = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const styleOff = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const styleIndicator = {
        display: 'inline-block',
        width: "20px",
        height: "20px",
        borderRadius: '50%',
        border: '1px solid black',
        padding: '2px',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.changeOn(!on)
    }
    const offClicked = () => {
        setOn(false)
        props.changeOn(!on)
    }

    return (
        <div>
            <div style={styleOn} onClick={onClicked}>On
            </div>
            <div style={styleOff} onClick={offClicked}>Off
            </div>
            <div style={styleIndicator}></div>
        </div>
    )
}