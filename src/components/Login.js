import React from 'react';
import styled from "styled-components";

const Login = () => {
  return (
      <Container>
          <CTA>
              <CTALogoOne src="/images/cta-logo-one.svg" />
              <SignUp>GET ALL THERE</SignUp>  
              <Description>
                  Get premium access to all the movies and series on disney world!.
                  The subscriptions are insanely cheap!!!.
              </Description>
              <CTALogoTwo src="/images/cta-logo-two.png" />
          </CTA>
      </Container>
  );
};

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    
      
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background: url("/images/login-background.jpg") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
    }

`
const CTA = styled.div`
    max-width:650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
   align-items: center;
`

const CTALogoOne = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }

`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`

const CTALogoTwo = styled.img`
    width: 90%;
`