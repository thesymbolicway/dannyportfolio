import { Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faJs } from "@fortawesome/free-brands-svg-icons";
import { badgen } from 'badgen';

export const ProjectCard = ({ title, description, imgUrl, url, repoUrl, captions, badges, demoUrl}) => {
  const handleClick = () => {
    window.location.href = url;
  };

console.log(badges)


  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick}>
        <img src={imgUrl} />
        <div className="proj-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="badge-container">
            {badges}
          </div>
          <Button variant="link" href={repoUrl}>
  <FontAwesomeIcon icon={faGithub} /> Visit Project
</Button>
{demoUrl && (
  <Button variant="link" href={demoUrl}>
    <FontAwesomeIcon icon={faJs} /> Visit App
  </Button>
)}
        </div>
      </div>
    </Col>
  );
};