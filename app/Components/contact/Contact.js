import React from 'react';
import "./Contact.css";

const Contact = () => {
  const email = 'pruthvirajbasavarajpatil@gmail.com';

  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>
      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className='contact__title'>Let's Talk About Building Something Great!</h3>
          <p className='contact__details'>Reach out for collaborations, internships, or project discussions. 👋</p>
          <p className='contact__details'>
            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a><br />
            <strong>Phone:</strong> +91 7676361896<br />
            <strong>GitHub:</strong> <a href='https://github.com/PruthvirajBPatil11' target='_blank' rel='noreferrer'>github.com/PruthvirajBPatil11</a><br />
            <strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/pruthviraj-patil-197926330' target='_blank' rel='noreferrer'>linkedin.com/in/pruthviraj-patil-197926330</a>
          </p>
        </div>

        <form action={`mailto:${email}`} method='post' encType='text/plain' className='contact__form'>
          <div className='contact__form-group'>
            <div className='contact__form-div'>
              <input type='text' name='name' className='contact__form-input' placeholder='Your Good Name Here !' />
            </div>

            <div className='contact__form-div'>
              <input type='email' name='email' className='contact__form-input' placeholder='Insert Your Email' />
            </div>
          </div>

          <div className='contact__form-div'>
            <input type='text' name='subject' className='contact__form-input' placeholder='I have an IDEA !' />
          </div>

          <div className='contact__form-div contact__form-area'>
            <textarea name='message' id='' cols={30} rows={10} className='contact__form-input' placeholder='Pruthviraj, Lets Grow Together !?' />
          </div>

          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact