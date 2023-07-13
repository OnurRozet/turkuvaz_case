import React from "react";
import { Container, Card } from "react-bootstrap";

export default function SubNews({ data, getUrl }) {
  if (!(data && data.length > 0)) {
    return (
      <div>
        <h2>Data not found</h2>
      </div>
    );
  }

  const slicedData = data.slice(4, 8);

  if (!slicedData || slicedData.length === 0) {
    return (
      <div>
        <h2>SlicedData has occurred error</h2>
      </div>
    );
  }

  const url=getUrl(slicedData)

  return (
    <div>
      <Container className="mt card-title">
        {slicedData.map((news, index) => (
          <Card style={{ width: "19rem" }} key={index}>
            <a href={url[index]} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={news.primaryImage} />
            </a>
            <Card.Body>
              <Card.Text>
                <a href={url[index]} target="_blank" rel="noopener noreferrer">
                  <h2>{news.TitleShort}</h2>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
