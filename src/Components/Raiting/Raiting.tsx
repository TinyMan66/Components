import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setRaitingValue: (value: RatingValueType) => void
}

export function Raiting(props: RatingPropsType) {
    console.log("Raiting rendering")
    return (
        <div>
            <Star selected={props.value > 0} setRaitingValue={() => props.setRaitingValue(1)}/>
            <Star selected={props.value > 1} setRaitingValue={() => props.setRaitingValue(2)}/>
            <Star selected={props.value > 2} setRaitingValue={() => props.setRaitingValue(3)}/>
            <Star selected={props.value > 3} setRaitingValue={() => props.setRaitingValue(4)}/>
            <Star selected={props.value > 4} setRaitingValue={() => props.setRaitingValue(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setRaitingValue: () => void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return (
        <span onClick={props.setRaitingValue}>{props.selected ? <b>star </b> : 'star '}</span>
    )
}
