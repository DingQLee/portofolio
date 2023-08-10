import { useEffect, useRef, useState } from 'react'
import './Footer.css'
import emailjs from '@emailjs/browser'

export const Footer = () => {

  const [sendable, setSendable] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (name != '' && email != '' && msg != '') {
      setSendable(true)
    }
    else {
      setSendable(false)
    }
  }, [name, email, msg])

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sxmjart', 'template_hd2r3nd', form.current, '813ikR3VrVlQn67oJ')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent!")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='footer' id="contact">
      <div className='contact-div'>
        <h1>Contact Me!</h1>
        <div className='interactive-div'>
          <div className='interactive-item email'>
            <form ref={form} onSubmit={sendEmail}>
              <div className='name-email'>
                <label>Name</label>
                <input type="text" name="user_name" onChange={(event) => setName(event.target.value)}/>
                <label>Email</label>
                <input type="email" name="user_email" onChange={(event) => setEmail(event.target.value)}/>
                <label>Message</label>
                <textarea name="message" onChange={(event) => setMsg(event.target.value)}/>
              </div>
              {sendable && <input type="submit" value="Send" className='send-button'/>}
            </form>
          </div>
          <h1>OR</h1>
          <div className='interactive-item media'>
            <a href="https://www.fiverr.com/tingkiulee?up_rollout=true">
              <h2 className='contact-link'>Fiverr</h2>
            </a>
            <a href="https://www.upwork.com/freelancers/~016d15b955826c0bfa">
              <h2 className='contact-link'>Upwork</h2>
            </a>
            <a href="https://github.com/DingQLee">
              <h2 className='contact-link'>Github</h2>
            </a>
          </div>
        </div>
      </div>
      <div className='outro'>
        <h1>Conroy Lee's Portfolio</h1>
        <h1>Thank you for reviewing!</h1>
      </div>
    </div>
  )
}
