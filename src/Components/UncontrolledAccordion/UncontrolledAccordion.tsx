import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("Accordion rendering")

    //local state для состояния AccordionBody (свёрнут/развёрнут) changed to useReducer:
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    //функция обработчик события клика по AccordionTitle
    const onClickHandler = () => {
        dispatch({type: TOGGLE_COLLAPSED})
    }
    return (
        <div>
            {/*передаем функцию обработчик onClickHandler через props в AccordionTitle*/}
            <AccordionTitle title={props.titleValue} onClickHandler={onClickHandler}/>
            {/*<button onClick={ onClickHandler }>TOGGLE</button>*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return ( //вешаем на AccordionTitle событие по клику
        <h3 onClick={props.onClickHandler}>{props.title}</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;