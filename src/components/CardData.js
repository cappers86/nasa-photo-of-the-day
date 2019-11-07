import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';



import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CardData = (props) => {
  return (
    <div className = "CardData" key = {props.data} >
      <Card>
        <CardImg width="100%" src={props.Img} alt="Card image cap" />
        <CardBody>
        <CardTitle>{props.title}</CardTitle>
            <CardText>{props.date}</CardText>
            <CardSubtitle>{props.version}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
          <CardLink href= {props.url}>See more images</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};



export default CardData;