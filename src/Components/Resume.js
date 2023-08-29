import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div className="p-3" style={{ textAlign: "center" }}>
              <img
                src="images/singhprofile.png"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Sunny Singh</h2>
            <h4 style={{ color: "grey" }}>React Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is Sunny Singh. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Indore MP</p>
            <h5>Phone</h5>
            <p>(+91) 9693929581</p>
            <h5>Email</h5>
            <p>sunnyjisce@gmail.com</p>
            <h5>Web</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://stuguru.com"
            >
              My Education Website
            </a>
            <h5>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="/Sunny's_Resume.pdf"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={"Sep 2022"}
              endYear={"Present"}              
              jobName={"Development Engineer"}
              companyName={"Calsoft Pvt.Ltd"}
              jobDesc={
                [
                "Developed reusable components for frontend Model of Simnovus using Tailwind CSS, ReactJs & Redux."
              
                ]
              }
            />
            <Experience
              startYear={"Dec 2021"}
              endYear={"Sep 2022"}
              duration= {1}
              jobName={"Software Engineer"}
              companyName={"AgBe Techonology"}
              jobDesc={[
                "Developed a program/page for Uploading the Prescription to TATA 1mg using ReactJs."
              ]
              }
            />
            <Experience
              startYear={"December 2020"}
              endYear={"Sep 2022"}
              duration= {2}
              jobName={"Web Developer"}
              companyName={"QLS Pvt.Ltd"}
              jobDesc={
                [
                  "Developed programs for ERP Model to QLS Academy using AngularJs."
                ]
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2019}
              collegeName={"JIS College of engineering"}
              degreeName={"Information Techonology"}
            />
            <Education
              startYear={2013}
              endYear={2015}
              collegeName={"STD College, Saran(Bihar)"}
              degreeName={"PCM"}
            />
             <Education
              startYear={2013}
              endYear={2011}
              collegeName={"KMHS Tari, Siwan(Bihar)"}
              degreeName={"All Subject"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS/JavaScript"} progress={90} />
            <Skills skill={"ReactJS"} progress={60} />
            <Skills skill={"Angular"} progress={60} />
            <Skills skill={"Jira & Jenkins"} progress={90} />
            <Skills skill={"Git"} progress={90} />
            <Skills skill={"My SQL"} progress={40} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Languages</h2>
            <h6>English</h6>
            <h6>Hindi</h6>
            <h6>Bhojpuri</h6>
            <h6>Bengoli</h6>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Interests</h2>
            <h6>Traveling</h6>
            <h6>Volleyball</h6>
            <h6>Cooking</h6>
            <h6>Web series</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
