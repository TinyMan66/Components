import React, {useReducer, useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}
type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state;
        default:
            throw new Error('Bad action type')
    }
    return state;
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("Accordion rendering")

    //local state для состояния AccordionBody (свёрнут/развёрнут)
    // let [collapsed, setCollapsed] = useState(false);
    let [collapsed, dispatch] = useReducer(reducer, false);

    //функция обработчик события клика по AccordionTitle
    const onClickHandler = () => {
        dispatch({type: TOGGLE_CONSTANT})
    }
    return (
        <div>
            {/*передаем функцию обработчик onClickHandler через props в AccordionTitle*/}
            <AccordionTitle title={props.titleValue} onClickHandler={onClickHandler}/>
            {/*<button onClick={ onClickHandler }>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
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