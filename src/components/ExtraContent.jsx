import React from "react";
import { Row } from "react-bootstrap";

export default function ExtraContent({ data, getUrl }) {
  if (!(data && data.length > 0)) {
    return (
      <div>
        <h2>Data not found</h2>
      </div>
    );
  }

  const slicedData = data.slice(13, 19);

  if (!slicedData || slicedData.length === 0) {
    return (
      <div>
        <h2>SlicedData has occurred error</h2>
      </div>
    );
  }

  const url = getUrl(slicedData);

  const image1 = (index) => {
    const news = slicedData[index];

    if (!news) {
      return (
        <div>
          <h2>News not found in image1</h2>
        </div>
      );
    }

    return (
      <div className="image1 ">
        <Row>
          <div className="image1Content ">
            <div>
              <a href={url[index]} target="_blank" rel="noopener noreferrer">
                {" "}
                <img src={news.primaryImage} alt="" />
              </a>
              <div className="card-title">
                <a href={url[index]} target="_blank" rel="noopener noreferrer">
                  <h3>
                    {news.TitleShort !== "" ? news.TitleShort : news.Title}
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </div>
    );
  };

  const image2 = (index) => {
    const news = slicedData[index];

    if (!news) {
      return (
        <div>
          <h2>News not found in image2</h2>
        </div>
      );
    }

    return (
      <div className="image2 " key={index}>
        <Row>
          <div className="image2Content">
            <a href={url[index]} target="_blank" rel="noopener noreferrer">
              <img src={news.primaryImage} alt="" />
            </a>
          </div>
        </Row>
      </div>
    );
  };

  const image3 = (index) => {
    const news = slicedData[index];

    if (!news) {
      return (
        <div>
          <h2>News not found in image3</h2>
        </div>
      );
    }

    return (
      <div className="image3 " key={index}>
        <Row>
          <div className="image3Content mt ">
            <div>
              <a href={url[index]} target="_blank" rel="noopener noreferrer">
                {" "}
                <img src={news.primaryImage} alt="" />
              </a>
            </div>
            <div className="card-title">
              <a href={url[index]} target="_blank" rel="noopener noreferrer">
                <h3>{news.TitleShort !== "" ? news.TitleShort : news.Title}</h3>
              </a>
            </div>
          </div>
        </Row>
      </div>
    );
  };

  return (
    <div className="container position-relative">
      <div>{image1(0)}</div>
      <div>{image2(1)}</div>
      <div>{image2(2)}</div>
      <div>{image2(3)}</div>
      <div>{image1(4)}</div>
      <div className="image3-container">{image3(5)}</div>
    </div>
  );
}
