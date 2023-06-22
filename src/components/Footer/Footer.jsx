import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footers = () => {
  return (
    <footer className="bg-dark text-light  py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h2>
              YogaTube
            </h2>
            <p>Get free from stress by yoga</p>
          </Col>
          <Col md={4}>
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <FaFacebook />{" "}
                <a
                  className="text-white text-decoration-none"
                  href="https://facebook.com"
                >
                  Facebook
                </a>
              </li>
              <li>
                <FaTwitter />{" "}
                <a
                  className="text-white text-decoration-none"
                  href="https://twitter.com"
                >
                  Twitter
                </a>
              </li>
              <li>
                <FaYoutube />{" "}
                <a
                  className="text-white text-decoration-none"
                  href="https://youtube.com"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              <strong>YogaTube, Inc.</strong>
              <br />
              Uttara,Sector-8
              <br />
              Dhaka, Bangladesh
              <br />
              <p title="Phone">Phone : +880 1703285131</p>
            </address>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            <p className="text-center">
              &copy; {new Date().getFullYear()} @yogatube Inc. All rights reserved
              
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footers;
