import React from 'react';

const CardData = props => {
	return (
		<div className = "CardData" key = {props.data}>
            <img className="img" src= {props.Img} alt="Space" />
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.version}</p>
            <p>{props.explanation}</p>
        </div>
	);
};
export default CardData;