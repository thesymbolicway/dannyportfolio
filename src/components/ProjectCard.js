import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick}>
        <img src={imgUrl} />
        <div className="proj-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button variant="link" href={url}>
            {/* Visit Project */}
          </Button>
        </div>
      </div>
    </Col>
  );
};
