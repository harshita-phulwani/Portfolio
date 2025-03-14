import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import FaceDetection from "../assets/img/FaceDetection.webp";
import DiagNail from "../assets/img/DiagNail.webp";
import Garuda from "../assets/img/Garuda.avif";
import CarPedestrian from "../assets/img/Car.webp";
import YTSummarizer from "../assets/img/YTSummarizer.webp";
import SortViz from "../assets/img/SortVIz.webp"


import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  const projects = [
    {
      title: "DiagNail",
      description: "Python, Tensorflow, OpenCV",
      imgUrl: DiagNail,
      link: "https://github.com/harshita-phulwani/DiagNail",
    },
    {
      title: "Face Detection",
      description: "Python, OpenCV, HaarCascade Algorithm",
      imgUrl: FaceDetection,
      link: "https://github.com/harshita-phulwani/FaceDetection",
    },
    {
      title: "Garuda",
      description: "HTML, CSS, JavaScript, ReactJS, Firebase, Android Studio (JAVA)",
      imgUrl: Garuda,
    },
    {
      title: "Cars and Pedestrian Detection",
      description: "Python, OpenCV",
      imgUrl: CarPedestrian,
      link: "https://github.com/harshita-phulwani/OpenCV",
    },
    {
      title: "Sorting Visualizer",
      description: "HTML, CSS, JavaScript, ReactJS",
      imgUrl: SortViz,
      
    },
    {
      title: "Youtube Summarizer",
      description: "HTML, JavaScript, Python",
      imgUrl: YTSummarizer,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{color: "#452f2f"}}>Projects</h2> 
              
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              
                              <ProjectCard
                                key={index}
                                {...project}                                
                                />
                               
                                
                            )
                            
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
