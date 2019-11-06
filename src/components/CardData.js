import React from 'react';

const CardData = props => {
	return (
		<div className = "CardData" key = {props.data}>
            <img className="img" src= {props.Img} alt="Space" />
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.explanation}</p>
        </div>
	);
};
export default CardData;