import { Col, Container, Row } from "react-bootstrap";

export default function News({ data,getUrlWithIndex}) {

  if(!(data && data.length>0)){
    return <div><h2>Data not found</h2></div>
  }

  return (
    <div>
      <Container className="mt">
        <Row>
          <Col md={8}>
            <>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href={
                    getUrlWithIndex(0)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={data[0].primaryImage} alt="" height={350} />
              </a>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href={
                 getUrlWithIndex(0)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1>
                  {data[0].TitleShort !== ""
                    ? data[0].TitleShort
                    : data[0].Title}
                </h1>
              </a>
            </>
          </Col>
          <Col md={4}>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href={
                getUrlWithIndex(1)
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={data[1].secondaryImage} alt="" height={200} />
            </a>

            <Col md={4} style={{ paddingTop: "20px", marginBottom: "20px" }}>
              <a
                href={
           getUrlWithIndex(2)
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={data[2].secondaryImage} alt="" height={200} />
              </a>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
