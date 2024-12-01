import React, { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { AnimateLetters } from '../AnimateLetters'
import { Logo } from './Logo';



export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['m', 'a', 'r', 'n', 'a', 't', 'h']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1 >
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src='src/assets/images/logo-s.png' alt='developer' />
          <AnimateLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimateLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend developer /JavaScript Expert</h2>
        <Link className='flat-button' to='/contact'>
          CONTACT ME
        </Link>
      </div>


    </div>
  );
}