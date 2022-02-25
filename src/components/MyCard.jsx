import React from "react";
import {Button, Card} from "react-bootstrap";

const MyCard = ({title, lines, nextLine, callback, state}) => {
  return (
    <Card className="m-3" style={{width: "18rem"}}>
      <Card.Img src="" variant="top" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{lines[state].text}</Card.Text>
        <Button
          variant="outline-success"
          onClick={() => nextLine(callback, state, lines.length)}
        >
          Siguiente
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
