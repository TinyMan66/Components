import React, {useState} from 'react';
import './App.css';
import Accordion from "../../kabzda-kak-prosto/src/Components/Accordion/Accordion";
import {Raiting, RatingValueType} from "../../kabzda-kak-prosto/src/Components/Raiting/Raiting";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./Components/UncontrolledRaiting/UncontrolledRaiting";
import {OnOff} from "./Components/OnOff/OnOff";

function App() {
    console.log("App rendering")

    let [raitingValue, setRaitingValue] = useState<RatingValueType>(0);

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

    let [switchOn, setSwitchOn] = useState(false);

    return (
        <div className="App">
            <PageTitle title={"Hello, samurai! Let's go!"}/>
            <PageTitle title={"My friends"}/>
            <UncontrolledOnOff changeOn={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRaiting/>
            <Raiting value={raitingValue} setRaitingValue={setRaitingValue}/>
            <Accordion titleValue={"Offers"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
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

