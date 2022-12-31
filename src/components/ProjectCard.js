import { Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { badgen } from 'badgen';

export const ProjectCard = ({ title, description, imgUrl, url, repoUrl, captions, badges }) => {
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
            {/* Visit Project */}
            <FontAwesomeIcon icon={faGithub} /> Visit Project
          </Button>
        </div>
      </div>
    </Col>
  );
};