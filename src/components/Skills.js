import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
const responsive = {
superLargeDesktop: {
// the naming can be any, depends on you.
breakpoint: { max: 4000, min: 3000 },
items: 5
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 3
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 2
},
mobile: {
  breakpoint: { max: 464, min: 0 },
  items: 1
}
};

return (
<section className="skill" id="skills">
<div className="container">
<div className="row">
<div className="col-12">
<div className="skill-bx wow zoomIn">
<h2>Skills</h2>
<p>
<br></br>{" "}
</p>
<Carousel
             responsive={responsive}
             infinite={true}
             className="owl-carousel owl-theme skill-slider"
           >
{/* Replace the meter image with the box code and modify the skill-title class to show the correct skill */}
<div className="item">
<div className="skill-box">
<div className="skill-title">React Native</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">Bootstrap</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">Bcrypt</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">JWT</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">PostgreSQL</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">Socket.IO</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">Premiere Pro</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">CSS</div>
</div>
</div><div className="item">
<div className="skill-box">
<div className="skill-title">PostgreSQL</div>
</div>
</div><div className="item">
<div className="skill-box">
<div className="skill-title">Restful Api</div>
</div>
</div><div className="item">
<div className="skill-box">
<div className="skill-title">HTML</div>
</div>
</div><div className="item">
<div className="skill-box">
<div className="skill-title">SQLLite</div>
</div>
</div><div className="item">
<div className="skill-box">
<div className="skill-title">Content Marketing</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">JavaScript</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">Ruby on Rails
</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">Redux</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">WordPress</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">Copywriting</div>
</div>
</div>
<div className="item">
<div className="skill-box">
<div className="skill-title">Content Creation</div>
</div>
</div>
</Carousel>
</div>
</div>
</div>
</div>
</section>
);
};