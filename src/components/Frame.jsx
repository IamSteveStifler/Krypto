import React, {useState, useEffect} from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import millify from "millify";
import './Frame.css';
const Frame = (props) => {
  let img = props.img;

  console.log(props);
  return (
    <>
          <Card style={{ width: "18rem" }} className = "cards" >
            <Card.Img variant="top" src = {img} className = "img-class" />
            <Card.Body >
              <Card.Title>{props.name} <p>{props.symbol}</p></Card.Title>
              
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Price : ${props.price}</ListGroupItem>
              <ListGroupItem>24hr Volume : {millify(props.volume)}</ListGroupItem>
              <ListGroupItem>Market Cap : {millify(props.marketcap)}</ListGroupItem>
              <ListGroupItem>24h low : $ {millify(props.low)}</ListGroupItem><ListGroupItem>24h high : ${millify(props.high)}</ListGroupItem>
            </ListGroup>

          </Card>
      <br /> <br />
    </>
  );
};

export default Frame;
