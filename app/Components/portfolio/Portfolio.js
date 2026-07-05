"use client"

import React from 'react';
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  return (
    <section className='work container section' id='work'>
      <h2 className='section__title'>Recent Works</h2>

      <div className='work__container grid'>

      {Menu.map((elem) => {
        const{id, title, category} = elem;
        return (
          <div className='work__card' key={id}>
            <div className='work__card-content'>
              <span className='work__category'>{category}</span>
              <h3 className='work__title'>{title}</h3>
              <a href='https://github.com/0x1Luffy' className='work__button' aria-label={`Open ${title}`}>
                <i className='icon-link work__button-icon'></i>
              </a>
            </div>
          </div>
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio