import React from 'react';
import Header from '../../common/header/Header';
import LoginForm from '../../components/loginForm/LoginForm';
import Heading from '../../common/heading/Heading';
import Helmet from '../../common/helmet/Helmet';

function Login() {
  return (
    <Helmet title='LogIn'>
      <div className='fg'>
        <Header />
        <div className="mt container">
          <Heading title='loGin'/>
        </div>
        <LoginForm />
      </div>
    </Helmet>
  )
}

export default Login