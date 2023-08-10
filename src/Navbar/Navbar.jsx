import './Navbar.css'
import { useContext } from 'react'
import { InterchangeContext } from '../App'

export const Navbar = () => {
  const {pro, setPro} = useContext(InterchangeContext)
  return (
    <div className='navbar-div'>
      { pro ?
        <div className='pro-navbar'>
        <a href="#contact">
          <li className='contact'>Contact Me</li>
        </a>
          <button onClick={() => setPro(false)} className='change-button'>
            Change to Personal Page</button>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#react">
            <li>React</li>
          </a>
          <a href="#css">
            <li>CSS</li>
          </a>
          <a href="#python">
            <li>Python</li>
          </a>
          <a href="#video">
            <li>Video Editing</li>
          </a>
          <a href="#va">
            <li>Visual Art</li>
          </a>
        </div>
      :
        <div className='personal-navbar'>
        <a href="#contact">
          <li className='contact'>Contact Me</li>
        </a>
          <button onClick={() => setPro(true)} className='change-button'>
            Change to Professional Page</button>
          <li>Home</li>
          <li>About</li>
          <li>Youtube</li>
          <li>Chess</li>
          <li>Gym</li>
          <li>Coding</li>
          <li>Tarot</li>
        </div>
      }
    </div>
  )
}
