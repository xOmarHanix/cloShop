import React from 'react';
import Helmet from '../../common/helmet/Helmet';
import Header from '../../common/header/Header';
import Heading from '../../common/heading/Heading';
import SignUpFrom from '../../components/signUpForm/SignUpFrom';

function Signup() {
  return (
    <Helmet title='SignUp'>
        <div className="fg">
          <Header />
        <div className="mt container">
          <Heading title='SignUp' />
        </div>
        <SignUpFrom />
      </div>
    </Helmet>
  )
}

export default Signup