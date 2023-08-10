import { Home } from "./Home/Home"
import { About } from "./About/About"
import { React } from "./React/React"
import { CSS } from "./CSS/CSS"
import { Python } from "./Python/Python"
import { VideoEditing } from "./VideoEditing/VideoEditing"
import { VisualArt } from "./VisualArt/VisualArt"
import './Professional.css'
import Fade from 'react-reveal/Fade'
import CV from '../assets/pdfs/Lee Ting Kiu Resume Aug 2023.pdf'
import { useEffect, useState } from "react"
import arrow from '../assets/images/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.png'

export const Professional = () => {
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollY(position)
    document.documentElement.style.setProperty('--scroll-position', scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollY < 1200) {
      document.documentElement.style.setProperty('--opa', '0')
    }
    if (scrollY > 1200 && scrollY < 9000) {
      document.documentElement.style.setProperty('--opa', '1')
    }
    if (scrollY > 9000) {
      document.documentElement.style.setProperty('--opa', '0.2')
    }
  }, [scrollY])

  return (
      <div className="professional-div">
        <Fade>
          <Home />
        </Fade>
        <div className="main-content">
          <div className="cv-div">
            <h1>CV</h1>
            <div className="cv-item">
              <img src={arrow} />
              <object 
              data={CV} 
              type="application/pdf" 
              width="80%" height="80%"></object>
              <p>Wanna look up my CV? <br/>Find the downlaod button!</p>
            </div>
          </div>
          <Fade>
            <About />
            <React />
            <CSS />
            <Python />
            <VideoEditing />
            <VisualArt />
          </Fade>
        </div>
      </div>
  )
}
