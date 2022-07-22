import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
};

export function UncontrolledRaiting(props: UncontrolledRatingPropsType) {
    console.log("Rating rendering");
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    const onClickHandler = (starsAmount: RatingValueType) => {
        setValue(starsAmount);
        props.onChange(starsAmount);
    };

    return (
        <div>
            <Star selected={value > 0} setValue={onClickHandler} value={1}/>
            <Star selected={value > 1} setValue={onClickHandler} value={2}/>
            <Star selected={value > 2} setValue={onClickHandler} value={3}/>
            <Star selected={value > 3} setValue={onClickHandler} value={4}/>
            <Star selected={value > 4} setValue={onClickHandler} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: (value: RatingValueType) => void
    value: RatingValueType
};

function Star(props: StarPropsType) {
    console.log("Star rendering");
    // return (props.selected ?  <span><b>star </b></span> : <span>star </span>)

    return (
        <span onClick={() => {
            props.setValue(props.value)
        }}>{props.selected ? <b>star </b> : ' star'}</span>
    );
}

// if (props.selected === true) {
//     return <span><b>star </b></span>;
// } else {
//     return <span>star </span>;
// }