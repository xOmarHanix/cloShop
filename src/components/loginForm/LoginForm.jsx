import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';

function LoginForm() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const login = (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        
        const userCredential = signInWithEmailAndPassword(
          auth,
          email,
          password
        )

        const user = userCredential.user

        console.log(user)
        setLoading(false);
        toast.success('Successfully Logged In');
        navigate('/checkout');

      } catch (error) {
        setLoading(false);
        toast.error('Something Went Wrong');
      }

    }

  return (
    <div className='login-form'>
      {
        loading ? <h2 className='loading'>Loading...</h2> : (
          <>
            <form onSubmit={login}>
              <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type='submit'>Login</button>
            </form>
            <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
         </>
        )
      }

    </div>
  )
}

export default LoginForm