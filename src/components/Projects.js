import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Fab Wall",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Edu Sphere",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These highlights showcase two key projects that blend
                    creativity with precision. The first project features a
                    mobile-friendly layout with interactive pages, ensuring
                    effortless navigation and an engaging user experience. The
                    second project offers a clean, user-centric interface
                    equipped with robust search and filter tools for rapid
                    content discovery. Both initiatives emphasize performance,
                    simplicity, and appealing design—delivering solutions that
                    are visually captivating, and responsive.
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
