import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

      <div className='about__container grid'>
        <img src="https://i.ibb.co/k89WFzY/about-us-pic.png" alt='' className='about__img' />

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>
              I'm a Computer Science undergrad at SIT with a strong interest in AI/ML and full-stack development. I'm an active Board Member of IEEE SIT SB and IEEE Computer Society (Technical Club, SIT), and a member of the GeeksforGeeks Student Chapter. I enjoy building practical AI-powered tools — from object detection systems to RAG-based knowledge platforms — and I've won multiple national-level hackathons.
            </p>
            <a href='https://drive.google.com/file/d/1eDc4MyuPYyaS8GRXXfXNdVVPDhcjWQ6_/view?usp=sharing' className='btn' download={"Pruthviraj's Resume"}>Download Resume</a>
          </div>

          <div className='about__skills grid'>
            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Programming Languages</h3>
                <span className='skills__number'>92%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage development'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>AI/ML</h3>
                <span className='skills__number'>88%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage ui__design'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Web Development</h3>
                <span className='skills__number'>90%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage DSA'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Developer Tools</h3>
                <span className='skills__number'>72%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage development'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Coursework</h3>
                <span className='skills__number'>84%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage ui__design'></span>
              </div>
            </div>
          </div>

          <div className='about__info'>
            <p className='about__description'>
              <strong>Experience</strong><br />
              • Board Member, IEEE SIT SB and IEEE Computer Society (Technical Club, SIT)<br />
              • Co-organized a national-level hackathon (650+ submissions) and a large-scale technical fest with 14 events attracting 3,099+ participants<br />
              • Mentored fellow students on core OOP concepts in Python<br />
              • Member, GeeksforGeeks Student Chapter (Technical Club, SIT), where I participate in and help conduct competitive programming contests
            </p>
            <p className='about__description'>
              <strong>Achievements</strong><br />
              • 2X Hackathon Winner: Young Minds (12-hour National-level Hackathon) and Duality AI (National-level Hackathon)<br />
              • Finalist, Smart India Hackathon (SIH), SIT Tumkur round
            </p>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About