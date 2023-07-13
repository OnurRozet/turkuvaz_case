import React from "react";
import { Container, ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export default function Title({ data }) {

  if(!(data && data.length>0)){
    return (
      <div>
        <h2>Data not found</h2>
      </div>
    );
  }

  const slicedData = data.slice(10, 13);

  if (!slicedData || slicedData.length === 0) {
    return (
      <div>
        <h2>SlicedData has occurred error</h2>
      </div>
    );
  }

  return (
    <div>
      <Container className="mt">
        <ListGroup as="ul" className="mt">
          {slicedData.map((news, index) => (
            <ListGroupItem key={index}>
              <h2>{news.Title}</h2>
              <p>{news.Spot}</p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}
