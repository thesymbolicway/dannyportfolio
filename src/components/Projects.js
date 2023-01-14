
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import resume from "../assets/img/resume.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';


export const Projects = () => {
  const resumeUrl = 'https://docs.google.com/document/d/1LS9nhzTaA_DV9Sg905qYl-KyK5OFQ-cz62muvCJnBP4/edit?usp=sharing'
  const michelleTannerImage = "https://media.tenor.com/_5CCmSzS3x0AAAAC/full-house-michelle-tanner.gif"

  const badges = [
    <span className="badge" style={{ backgroundColor: "red" }}>Ruby on Rails</span>,
    <span className="badge" style={{ backgroundColor: "blue" }}>React</span>,
    <span className="badge" style={{ backgroundColor: "purple" }}>Bootstrap</span>,
    <span className="badge" style={{ backgroundColor: "orange" }}>Socket.io</span>
  ];



  const projects = [  {    title: "The Passport Bros",    
  description: "A traveling app for the PassportBro movement",    
  imgUrl: projImg1,    
  url: "https://www.youtube.com/watch?v=sXRjgWNIUuc&t=12s",
  demoUrl: "https://passportbros.netlify.app/",    
  caption: "Ruby on Rails, React, MapBox GL, Bootstrap, Socket.io",    
  badges: [      { label: "Ruby on Rails", color: "red" },      
  { label: "React", color: "blue" },      { label: "MapBox GL", color: "green" },      
  { label: "Bootstrap", color: "purple" },      
  { label: "Socket.io", color: "orange" }    ],
  repoUrl: "https://github.com/thesymbolicway/passportbros"
},
    {
      title: "WeSearch",
      description: "Find the best spots in Atlanta with WeSearch - your go-to source for reliable reviews and recommendations",
      imgUrl: projImg2,
      url: "https://www.youtube.com/watch?v=c907ZSp9qFo",
      demoUrl: "https://wesearchapp.netlify.app/",
      caption: "Framer Motion, React Typical, Light & Dark Mode",
      badges: [      { label: "Framer Motion", color: "red" },
      { label: "React", color: "purple" }, { label: "React Typical", color: "green" },      
  { label: "Light & Dark Mode", color: "purple" } ],
      repoUrl: "https://github.com/thesymbolicway/WESearch"
    },
    {
      title: "PodPenguin",
      description: "A Preview of the PodPenguin project",
      imgUrl: projImg3,
      url: "https://www.youtube.com/watch?v=O3bIQt9SYHc",
      caption: "Bootstrap, PodcastAPI",
      badges: [      { label: "PodcastAPI", color: "red" },            
                     { label: "Bootstrap", color: "purple" }   ],
      repoUrl: "https://github.com/thesymbolicway/podpenguin"
    },
    // new project
    {
      title: "DomIfy",
      description: "DomIfy your music with personalized playlists, powered by the Spotify API",
      imgUrl: projImg4,
      url: "https://www.youtube.com/watch?v=tT8E4xLshMk",
      caption: "Bootstrap, Stack",
      badges: [
        { label: "JavaScript", color: "yellow" },
        { label: "HTML", color: "orange" },
        { label: "CSS", color: "lightblue" },
        { label: "User-friendly interface", color: "green" }
      ],
      repoUrl: "https://github.com/thesymbolicway/DomIfy-main"
    }
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
                      <Nav.Link eventKey="second">Message</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Resume</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      {projects.map((project, index) => {
                        console.log(project.badges)
  return (
    <ProjectCard
      key={index}
      {...project}
      badges={badges}
      
    >
      
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
