import React from 'react'
import '../styles/About.css'
import MyImage from '../assets/IMG_7208__2_-removebg-preview.png'
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  return (
    <div className="home-div">
      <div className="trial content">
      
        <div className="heading">
          <h1 className="about-heading">LEARN MORE ABOUT ME</h1>
          <div className="row about-content">
            <div className="about-image-container">
              <img className="about-image col-lg-4" src={MyImage} alt="about" />
              <div className="about-text">
              <h3 className="about-title">Full Stack Developer</h3>
              <p class="my-text">
                 I thrive in a collaborative environment, leveraging my interpersonal skills to foster strong relationships with team members, clients, and stakeholders.
              </p>
              <div class="custom-social">
                  <ul className="custom-list">
                    <li><i className="green bi bi-chevron-right"></i> <strong>Website:</strong>&nbsp; &nbsp; <span>  url</span></li>
                    <li><i className="green bi bi-chevron-right"></i> <strong>Phone:</strong>&nbsp;  &nbsp; <span>  +27681069901</span></li>
                    <li><i className="green bi bi-chevron-right"></i> <strong>City:</strong>&nbsp;  &nbsp;<span>  Capetown, SA</span></li>
                    <li><i className="green bi bi-chevron-right"></i> <strong>Diploma:</strong>&nbsp;  &nbsp;<span>  Full Stack Development</span></li>
                    <li><i className="green bi bi-chevron-right"></i> <strong>Email:</strong>&nbsp;  &nbsp;<span>  leeegd99@gmail.com</span></li>
                    <li><i className="green bi bi-chevron-right"></i> <strong>Freelance:</strong>&nbsp;  &nbsp;<span>  Available</span></li>
                  </ul>
                   
              </div>
              <p className="about-para">
                I am passionate about leveraging technology to solve real-world problems and driven by the opportunity to make a positive impact through my work. 
                If you are seeking a dedicated full-stack software engineer who combines
                technical proficiency with a solution-oriented mindset, Shall we get to know each other better? 
              </p>
              <button className="resume-btn" type="button">
                <a href="https://drive.google.com/file/d/1SHeqNOoIEZnWC4lkV57WqqLmEKI9oxli/view?usp=sharing" download="Leslie's-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
               </a>
              </button>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default About