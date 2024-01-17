import React from 'react'
import '../styles/Skills.css'
import Node from '../assets/node2.png'
import Rails from '../assets/rails.png'
import ReactImg from '../assets/react.png'
import Git from '../assets/git.png'
import Swagger from '../assets/swagger.png' 
import Postman from '../assets/postman.png'
import Postgres from '../assets/postgres.png'
import Jest from '../assets/jest.png'
import JQuery from '../assets/jquery.png'
import Django from '../assets/django.png'
import Bootstrap from '../assets/bootstrap.png'
const Skills = () => {
  return (
    <div className="home-div">
      <div className="content">
        <div className="heading">
          <div className="skills-container">
            <div class="section-title">
              <h2>Skills</h2>
            </div>  
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill">HTML <span className="val sk sk-ex">Expert</span></span>
                <div className="progress bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar custom-color" style={ {width: "100%"} }></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill">RUBY <span className="val sk sk-av">ADVANCED</span></span>
                <div className="progress bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar custom-color" style={ {width: "100%"} }></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill">sql <span className="val sk sk-av">Advanced</span></span>
                <div className="progress bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar custom-color" style={ {width: "100%"} }></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill">CSS <span className="val sk sk-ex">Expert</span></span>
                <div className="progress bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar custom-color" style={ {width: "100%"} }></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill">python <span className="val sk sk-inter">Intermediate</span></span>
                <div className="progress bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar custom-color" style={ {width: "100%"} }></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill">Node JS <span className="val sk sk-inter">Intermediate</span></span>
                <div className="progress bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar custom-color" style={ {width: "100%"} }></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill">JAVASCRIPT <span className="val sk sk-av">Advanced</span></span>
                <div className="progress bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar custom-color" style={ {width: "100%"} }></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill">FIGMA <span className="val sk sk-av">Advanced</span></span>
                <div className="progress bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar custom-color" style={ {width: "100%"} }></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill">Wordpress <span className="val sk sk-av">Advanced</span></span>
                <div className="progress bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar custom-color" style={ {width: "100%"} }></div>
                </div>
              </div>
            </div>
          </div>
          <div className="interests-container">
            <div className="section-title">
              <h2 className="interests-title">Interests</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                 <img src={Bootstrap} alt="Boostrap logo" style={{ width: "30px", height: "30px"}}></img>
                 <h3>Bootstrap</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box longer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/64px-Tailwind_CSS_Logo.svg.png" alt="Tailwind logo" style={{ width: "30px", height: "30px"}}></img>
                  <h3>Tailwind CSS</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                  <img src={Node} alt="Node js logo" style={{ width: "30px", height: "30px"}} />
                  <h3>NodeJS</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                  <img src={Rails} alt="Rails logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Rails</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box longer">
                  <img src={ReactImg} alt="React logo" style={{ width: "30px", height: "30px"}} />
                  <h3>React & Redux</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box longer">
                  <img src={Git} alt="Github logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Git & Github</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                  <img src={Swagger} alt="Swagger logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Swagger</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                  <img src={Postman} alt="Postman logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Postman</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box longer">
                  <img src={Postgres} alt="Postgres logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Pg Admin</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                  <img src={Jest} alt="Jest logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Jest</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                  <img src={JQuery} alt="JQuery logo" style={{ width: "30px", height: "30px"}} />
                  <h3>JQuery</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mb-4">
                <div className="icon-box">
                  <img src={Django} alt="Python django logo" style={{ width: "30px", height: "30px"}} />
                  <h3>Django</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills