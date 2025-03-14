import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <a href="mailto:phulwaniharshi@gmail.com">
            <img src={logo} alt="Logo" />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="mailto:phulwaniharshi@gmail.com"><img src={navIcon3} alt="Icon" /></a> 
            
            <a href="https://github.com/harshita-phulwani"><img src={navIcon2} alt="Icon" /></a>
            <a href="https://www.linkedin.com/in/harshita-phulwani/"><img src={navIcon1} alt="Icon" /></a>
              
              
            </div>
            <p> &copy; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
