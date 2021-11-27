import React from 'react';
import { useState } from 'react';
import { v1 } from 'uuid';

type AccordionTitlePropsType = {
    title: string;
};
type AccordionPropsType = {
    titleValue: string;
};

type Messages = {
    id: string
    title: string
}
type AccordionBodyType = {
    messages: Messages[]
    onClick: (id: string) => void
}


const ControlledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(true);

    let messages = [{ id: v1(), title: '1. Choose for yourself one area in which you want to develop and achieve excellent results.' },
    { id: v1(), title: '2. You must be surrounded by people who are engaged in this business' },
    { id: v1(), title: '3. Daily practice. Daily hard work is the key to success.' }];

    return (
        <div>
            <AccordionTitle title={props.titleValue} />
            <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? 'Show' : 'Collapse'}</button>
            {!collapsed && <AccordionBody messages={messages} onClick= {(id)=> {alert(`Number ${id} was chosen`)}}/>}
        </div>
    );
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <h2>{props.title}</h2>;
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.messages.map(m => <li key={m.id} onClick={() => {props.onClick(m.id)}}>{m.title}</li>)}
        </ul>
    );
}

export default ControlledAccordion;
