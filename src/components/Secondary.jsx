import React from "react";
import { Card } from "react-bootstrap";

export default function Secondary({ data, getUrl }) {
  if (!(data && data.length > 0)) {
    return (
      <div>
        <h2>Data not found</h2>
      </div>
    );
  }

  const slicedData = data.slice(1, 9);

  if (!slicedData || slicedData.length === 0) {
    return (
      <div>
        <h2>SlicedData has occurred error</h2>
      </div>
    );
  }

  const url=getUrl(slicedData)

  return (
    <div className="container">
      {slicedData.map((news, index) => (
        <Card style={{ width: "20rem" }} key={index} className="mt">
          <a
            tyle={{ textDecoration: "none", color: "black" }}
            href={url[index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Img variant="top" src={news.primaryImage} />
          </a>
          <Card.Body>
            <Card.Text>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href={url[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{news.TitleShort}</h2>
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
