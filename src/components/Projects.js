
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import resume from "../assets/img/resume.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const resumeUrl = 'https://docs.google.com/document/d/1LS9nhzTaA_DV9Sg905qYl-KyK5OFQ-cz62muvCJnBP4/edit?usp=sharing'
  const michelleTannerImage = "https://media.tenor.com/_5CCmSzS3x0AAAAC/full-house-michelle-tanner.gif"
  const projects = [
    {
      title: "The Passport Bros",
      description: "Rails and React Travel App",
      imgUrl: projImg1,
      url: "https://www.youtube.com/watch?v=ZK07gk3bSJc"  // Add this property
    },
    {
      title: "WeSearch",
      description: "An Activity Search engine",
      imgUrl: projImg2,
      url: "https://www.youtube.com/watch?v=UCZtJC2cvi4"  // Add this property
    },
    {
      title: "PodPenguin",
      description: "A Preview of the PodPenguin Project",
      imgUrl: projImg3,
      url: "https://www.youtube.com/watch?v=O3bIQt9SYHc"  // Add this property
    },
  
  ];

  return (
    <section className="project" id="proj">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Shoot me a message</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Resume</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      {projects.map((project, index) => {
  return (
    <ProjectCard
      key={index}
      {...project}
    >
      <Button
        variant="link"
        href={project.url}  // Add this attribute
      >
        {project.title}
      </Button>
    </ProjectCard>
  )
})}
                      
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
  <Button
    variant="link"
    onClick={() => {
      window.open(resumeUrl, '_blank');
    }}
  >
    <img src={michelleTannerImage} alt="Michelle Tanner saying 'You got it, dude'" /> Resume
  </Button>
</Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
