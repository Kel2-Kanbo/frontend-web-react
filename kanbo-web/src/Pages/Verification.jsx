import React from 'react'
import styled from '@emotion/styled'
import VerifyEmail from '../assets/VerifyEmail.icon'
import Button from '../Components/Button'

export default function Verification() {
  return (
    <div className='flex justify-center'>
    <VerifyWrap className='text-center'>
        <h1 className='text-4xl'>Verify your email</h1>
        <VerifyEmail/>          
        <p>Your entered yaya@gmail.com as the email address for your account. You will need to verify your email to complete registration</p>
        <Button>Open email web</Button>
        <p>Did not recieve the email? Check your spam folder or <a href="#">Resend email</a></p>
    </VerifyWrap>
    </div>
  )
}

const VerifyWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  border: 1px solid black;
  width: 50%;
  position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
row-gap: 1rem;
padding: 1rem;
`