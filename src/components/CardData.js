import React from 'react';

const CardData = props => {
	return (
		<div className = "nasaCardClass" key = {props.date}>
            <img class="img" src= {props.Img} alt="space" />
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
        </div>
	);
};
export default CardData;