import React, { PropsWithChildren } from 'react';
import { useReducer } from 'react';
import { v1 } from 'uuid';
import style from './AccordionSecond.module.css';

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
};

type Message = {
    id: string
    title: string
}
type setMainTitleType = (id: string) => void;
type chengeHoveredElementValueType = (id: string) => void

type StateAccordionType = {
    messages: Message[]
    collapsed: boolean
    mainTitle: string | undefined
}
type ActionType = {
    type: string
    value?: string
    id?: string
    collapsed?: boolean
    mainTitle?: string
}

export let TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';
let SET_MAIN_TITLE = 'SET-MAIN-TITLE';
let SET_HOVERED_ELEMENT_VALUE = 'SET-HOVERED-ELEMENT-VALUE';

const reducer = (stateAccordion: StateAccordionType, action: ActionType): StateAccordionType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED: {
            return {
                ...stateAccordion,
                collapsed: !stateAccordion.collapsed,
            }
        }
        case SET_MAIN_TITLE: {
            return {
                ...stateAccordion,
                collapsed: !stateAccordion.collapsed,
                mainTitle: action.value,
            }
        }
        case SET_HOVERED_ELEMENT_VALUE: {
            return {
                ...stateAccordion,
                collapsed: !stateAccordion.collapsed,
            }
        }
        default: {
            return stateAccordion;
        }
    }
}
const AccordionSecond = () => {
    const stateAccordion = {
        messages: [{ id: v1(), title: 'I chose сinema' },
        { id: v1(), title: 'I chose read' },
        { id: v1(), title: 'I chose music' }],
        collapsed: true,
        mainTitle: 'I chose read',
    }


    // const [collapsed, toggleItem] = useState<boolean>(true);
    // const [mainTitle, setmainTitle] = useState<string>(messages[2].title);
    // const [hoveredElementValue, setHoveredElementValue] = useState(messages[2].title)


    const [state, dispatch] = useReducer(reducer, stateAccordion);

    const setMainTitle: PropsWithChildren<setMainTitleType> = (id: string) => {
        let newMainTitle = stateAccordion.messages.filter(mes => mes.id === id);
        dispatch({ type: SET_MAIN_TITLE, value: newMainTitle[0].title });
        dispatch({ type: TOGGLE_COLLAPSED, collapsed: !stateAccordion.collapsed });
    }
    const changeListState = () => {
        dispatch({ type: TOGGLE_COLLAPSED, collapsed: !stateAccordion.collapsed });
    }
    const chengeHoveredElementValue: PropsWithChildren<chengeHoveredElementValueType> = (id: string) => {
        let newHoveredElementValue = state.messages.filter(mes => id === mes.id);
        dispatch({ type: SET_HOVERED_ELEMENT_VALUE, value: newHoveredElementValue[0].title })
    }

    return (
        <div>
            <AccordionTitle title={stateAccordion.mainTitle} onClick={changeListState} />
            { !state.collapsed && <AccordionBody messages={stateAccordion.messages} setmainTitle={setMainTitle}
                chengeHoveredElementValue={chengeHoveredElementValue} currentElementValue={stateAccordion.mainTitle} />}
        </div >
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h2 onClick={props.onClick} >{props.title}</h2>;
}

type AccordionBodyType = {
    messages: Message[]
    setmainTitle: setMainTitleType
    chengeHoveredElementValue: chengeHoveredElementValueType
    currentElementValue: string
}
function AccordionBody(props: AccordionBodyType) {

    return (
        <div className={style.selected}>
            {props.messages.map(m => <div key={m.id}
                onClick={() => { props.setmainTitle(m.id) }}
                onMouseOver={() => props.chengeHoveredElementValue(m.id)}
                className={m.title === props.currentElementValue ? style.active : ''}>{m.title}</div>)
            }
        </div>
    );
}

export default AccordionSecond;
export { reducer };
