import React, { FunctionComponent } from 'react';
import './Card.css';

type CardProps = {
    className: string
}

const Card: FunctionComponent<CardProps> = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;