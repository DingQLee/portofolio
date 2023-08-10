import './About.css'
import CV from '../../assets/pdfs/Lee Ting Kiu Resume Aug 2023.pdf'
import Fade from 'react-reveal/Fade'

export const About = () => {
  return (
    <div className="about-div" id="about">
      <Fade>
        <h1 style={{paddingTop:"18rem"}}>About</h1>
        <p className='about-intro'>I make interactive websites that are artistic and user-friendly.
          I make light-weight effects that look good.
          <b> Time is valuable</b>. I wish to get the most information in the
          least time.
        </p>
        <div className='about-item'>
          <h3>University</h3>
          <li>University student, currently year 4, Chinese University of Hong Kong</li>
          <li>Major: Electronic Engineering</li>
        </div>
        <div className='about-item'>
          <h3>Interests</h3>
          <li>Coding, machine learning, frontend development</li>
        </div>
        <div className='about-item'>
          <h3>Programming languages</h3>
          <li>React, CSS, Python, Java, C, C++</li>
          <li>Started coding since I was in secondary school (2018 till present)</li>
          <a href="https://github.com/DingQLee?tab=overview&from=2023-07-01&to=2023-07-31">
            <li className='link-effect'><i>Github</i></li>
          </a>
        </div>
        <div className='about-item'>
          <h3>Video Editing</h3>
          <li>Davinci Resolve</li>
        </div>
        <div className='about-item'>
          <h3>Visual Art</h3>
          <li>Procreate</li>
        </div>
      </Fade>
        <h2 className='giggle'>Keep scrolling to see my work!</h2>
        <a href={CV} download="Conroy Lee CV" target='_blank' rel="noreferrer">
          <h2 className='link-effect' style={{paddingBottom:"0.5rem"}}><i>Download my CV(PDF)</i></h2>
        </a>
    </div>
  )
}
