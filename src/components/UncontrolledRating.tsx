import {useState} from 'react';
type StarPropsType = {
    selected: boolean;
    onClick: () => void;
};
type UncontrolledRatingType = {
    value: number
    maxValue: number
};

function Star({ selected, onClick }: StarPropsType) {
    return <span onClick={onClick} style={{ cursor: 'pointer' }}>{selected ? '\u2605' : '\u2606'}</span>;
}

export default function UncontrolledRating(props: UncontrolledRatingType) {
    const [rating, setRating] = useState(props.value);

    return (
        <div style={{ fontSize: '40px', color: '#FFA500' }}>
            {Array(props.maxValue).fill(null).map((_, i) => <Star selected={i < rating} onClick={() => setRating(i + 1)} />)}
        </div>
    );
}

