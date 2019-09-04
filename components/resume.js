import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>SANJEET</h2>
            <h4 style={{color: 'grey'}}>FRONTEND DEVELOPER</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>KAROL BAGH</p>
            <h5>Phone</h5>
            <p>750#######</p>
            <h5>Email</h5>
            <p>Jsanjeet52@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2017}
              schoolName="st.michael's"
           
               />
               <Education
                 startYear={2017}
                 endYear={2021}
                 schoolName="BPIT"
                 schoolDescription="Its one of the IP University offering higher studies in B.tech, BBA, MBA."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2019 }
              jobName="INTERNSHIP"
              jobDescription="A start-up company,worked here as an intern for frontend devlopment."
              />
                
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={89}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                 
                    <Skills
                      skill="React"
                      progress={90}
                      />
                       <Skills
                      skill="Bootstrap"
                      progress={90}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;