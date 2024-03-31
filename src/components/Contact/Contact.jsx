import React from 'react'
import { Container, Wrapper, Title, Desc, ResumeButton } from './ContactStyled';
import { useRef } from 'react';
import { Bio } from '../../data/constants';
import '../../App.css'


const Contact = () => {

  //hooks
  const form = useRef();

  return (
    <Container id="contact">
      <Wrapper>
        <Title>
          <span className='heading'>
            04.&nbsp;&nbsp;
          </span>
          Get In Touch
        </Title>
        <Desc>
          Adding Value to you and your business would make me very happy. Regarding projects, internship, and full-time employment, kindly get in touch.
        </Desc>
          <ResumeButton 
            href={Bio.mail} 
            target='display'
          >
            Mail Me
          </ResumeButton>
      </Wrapper>
    </Container>
  )
}

export default Contact
