import React from 'react';
import {useState} from 'react';

type PropsType2 = {
    title: string,
}
function AccordionTitle(props: PropsType2) {
    return ( 
        <h2>
            {props.title}
        </h2>
    )
}
function AccordionBody() {
    return (
        <ul>
            <h4>Three steps to success</h4>
            <div>1. Choose for yourself one area in which you want to develop and achieve excellent results.</div>
            <div>2. You must be surrounded by people who are engaged in this business.</div>
            <div>3. Daily practice. Daily hard work is the key to success. </div>
        </ul>
    );
}
type PropsType = {
    titleValue: string
}

export default function UncontrolledAccordion(props: PropsType) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle title={props.titleValue} />
            <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? 'Show' : 'Collapse'}</button>
            {!collapsed && <AccordionBody />}
        </div>
    );
}