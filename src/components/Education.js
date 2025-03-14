import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

export const Education = () => {
  const educationData = [
    {
        school: "ABES Institute of Technology",
        degree: "Bachelor of Technology (Computer Science and Engineering)",
        year: "2020 - 2024",
      },    
    
    {
      school: "Mahatma Hansraj Modern School",
      degree: "12th Standard (CBSE)",
      year: "2018 - 2020",
    },
    {
        school: "St. Francis Convent Inter College",
        degree: "10th Standard (ICSE)",
        year: "2017 - 2018",
      },
    
  ];

  return (
    <section className="education" id="education">
    <div>
      <h2 style={ { fontSize: "45px", fontWeight: "700", textAlign: "center", color: "#452f2f"}}>Education</h2>
      <VerticalTimeline>
        {educationData.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={edu.year}
            iconStyle={{ background: "#452f2f", color: "#eee4dd" }}
            contentStyle={{ background: "#452f2f", color: "#452f2f" }} // Sets box background to blue & text to white
            contentArrowStyle={{ borderRight: "7px solid #452f2f" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="text-lg font-semibold" style={{ color: "#eee4dd" }}>{edu.school}</h3>
            <p style={{ color: "#eee4dd" }}>{edu.degree}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    </section>
  );
};


