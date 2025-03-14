import javalogo from "../assets/img/java-icon.svg"
import pythonlogo from "../assets/img/python-svgrepo-com.svg"
import c from "../assets/img/c-1.svg"
import azure from "../assets/img/azure.svg"
import react from "../assets/img/react.svg"
import sql from "../assets/img/database.svg"
import php from "../assets/img/php.svg"
import laravel from "../assets/img/laravel-icon.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import firebase from "../assets/img/firebase.svg"
import AI from "../assets/img/artificial-intelligence.svg"
import powerBI from "../assets/img/power-bi.svg"


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
                        <p>Motivated professional skiled in problem-solving, effective communication, and leadership. I excel in dynamic
 environments, fostering innovation and driving project success. I am well versed with Data Structures and
 Algorithms, Web Development and Data Analysis.
</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src={javalogo} alt="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                            <img src={pythonlogo} alt="Python" />
                                <h5>Python</h5>
                            </div>

                            <div className="item">
                            <img src={react} alt="React" />
                                <h5>React</h5> </div>

                                <div className="item">
                            <img src={c} alt="C/C++" />
                                <h5>C/C++</h5>
                            </div>
                            
                                <div className="item">
                            <img src={firebase} alt="SQL" />
                                <h5>FireBase</h5> </div>

                            <div className="item">
                            <img src={sql} alt="SQL" />
                                <h5>SQL</h5> </div>

                                <div className="item">
                            <img src={AI} alt="PHP" />
                                <h5>Artificial Intelligence/ Machine Learning</h5> </div>


                                <div className="item">
                            <img src={powerBI} alt="Laravel" />
                                <h5>PowerBI</h5> </div>


                            <div className="item">
                            <img src={azure} alt="Microsoft Azure" />
                                <h5>Microsoft Azure</h5></div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
