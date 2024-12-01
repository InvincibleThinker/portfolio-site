import React, { useRef, useEffect } from 'react';
import './index.scss'
import gsap from 'gsap-trial';


export const Logo = () => {

  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {

        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )

  }, []);



  return (
    <div className='logo-container' ref={bgRef}>
      <img
        ref={solidLogoRef}
        className='solid-logo'
        src='src/assets/images/logo.png'
        alt='Javascript, developer'
      />

    </div>
  );
}