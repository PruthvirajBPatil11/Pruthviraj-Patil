import React from 'react'

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
      <a href='https://github.com/PruthvirajBPatil11' className='home__social-link' target='_blank' rel='noreferrer'>
        <i className='fa-brands fa-github'></i>
      </a>

      <a href='https://www.linkedin.com/in/pruthviraj-patil-197926330' className='home__social-link' target='_blank' rel='noreferrer'>
        <i className='fa-brands fa-linkedin'></i>
      </a>

      <a href='mailto:pruthvirajbasavarajpatil@gmail.com' className='home__social-link'>
        <i className='fa-solid fa-envelope'></i>
      </a>
    </div>
  )
}

export default HeaderSocials