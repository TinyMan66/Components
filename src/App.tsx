import React, {useState} from 'react';
import './App.css';
import Accordion from "../../kabzda-kak-prosto/src/Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./Components/UncontrolledRaiting/UncontrolledRaiting";
import {OnOff} from "./Components/OnOff/OnOff";

const items = [
    {title: 'Diana', value: 1},
    {title: 'Karina', value: 2},
    {title: 'Uliana', value: 3},
    {title: 'Lilia', value: 4}
];

function App() {
    console.log("App rendering")

    const [raitingValue, setRaitingValue] = useState<RatingValueType>(0);

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

    const [switchOn, setSwitchOn] = useState(false);

    //need any cod?
    const onChange = (value: RatingValueType) => {
    }

    const onClick = (value: any) => {
    }

    return (
        <div className="App">
            <PageTitle title={"Hello, samurai! Let's go!"}/>
            <PageTitle title={"My friends"}/>
            <UncontrolledOnOff changeOn={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRaiting onChange={onChange}/>
            <Rating value={raitingValue} setRaitingValue={setRaitingValue}/>
            <Accordion
                titleValue={"Offers"}
                collapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}
                items={items}
                onClick={onClick}
            />
            <OnOff on={switchOn} onChange={setSwitchOn} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;

