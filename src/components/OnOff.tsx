import { useState } from 'react';


export default function OnOff() {

    let [on, setOn] = useState(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red',
    };

    return <div>
        <div style={onStyle} onClick={() => setOn(true)}>On</div>
        <div style={offStyle} onClick={() => setOn(false)}>Off</div>
        <div style={indicatorStyle}> </div>
    </div>

}