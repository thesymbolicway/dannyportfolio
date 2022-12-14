import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
 
          <Col size={12} sm={6}>
          <a href="https://danielarisa.com">
  <img className="footerimage"src={logo} alt="Logo" />
</a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/danielarisa/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/thesymbolicway"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://medium.com/@danielcarisa"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
