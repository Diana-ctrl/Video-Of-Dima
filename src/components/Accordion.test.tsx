import {reducer, TOGGLE_COLLAPSED} from './AccordionSecond';
import { v1 } from 'uuid';

test('collapsed should be true', () => {
    
    const stateAccordion = {
        messages: [{ id: v1(), title: 'I chose сinema' },
        { id: v1(), title: 'I chose read' },
        { id: v1(), title: 'I chose music' }],
        collapsed: true,
        mainTitle: 'I chose read',
    }

    const newState = reducer(stateAccordion, {type: TOGGLE_COLLAPSED })
})