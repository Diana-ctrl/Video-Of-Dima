import React from 'react';
import { useState } from 'react';
import { v1 } from 'uuid';

type AccordionTitlePropsType = {
    title: string;
};

type Messages = {
    id: string
    title: string
}
type AccordionBodyType = {
    messages: Messages[]
    setmainTitle: (id: string) => void

}

const AccordionSecond = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [mainTitle, setmainTitle] = useState<string>('Choose what to make the main');

    let messages = [{ id: v1(), title: 'I chose сinema' },
    { id: v1(), title: 'I chose read' },
    { id: v1(), title: 'I chose music' }];

    const setMainTitle = (id: string) => {
        debugger;
        let newMainTitle = messages.filter(mes => mes.id === id);
        setmainTitle(newMainTitle[0].title);
        setCollapsed(true);
    }

    return (
        <div>
            <AccordionTitle title={mainTitle} />
            <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? 'Show' : 'Collapse'}</button>
            {!collapsed && <AccordionBody messages={messages} setmainTitle={setMainTitle} />}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h2>{props.title}</h2>;
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.messages.map(m => <li key={m.id} onClick={() => { props.setmainTitle(m.id) }}>{m.title}</li>)}
        </ul>
    );
}

export default AccordionSecond;
