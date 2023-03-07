import React, { useRef, useEffect } from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './header.css';
import { BsCart } from 'react-icons/bs';
import UserImg from '../../assets/images/user-icon.png';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase.config';
import { signOut } from 'firebase/auth';
import useAuth from '../../useAuth';
function Header() {

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const profileActionRef = useRef(null);
  const headerRef = useRef(null);

  const toggleProfileAction = () => {
    profileActionRef.current.classList.toggle('show-profile-action');
  }

  const { currentUser } = useAuth();

  const logout = () => {
    signOut(auth).then(() => {
      toast.success('Loged Out Successfully')
      navigate('/home');
    }).catch(err => {
      toast.error(err.message);
    })
  }

  const stickyHeaderFunction = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky-header')
      } else {
        headerRef.current.classList.remove('sticky-header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunction();

    return () => window.removeEventListener('scroll' , stickyHeaderFunction);
  },[])

  return (
    <div className='header' ref={headerRef}>
      <span className='logo'>CloShop.</span>
      <ul>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Cart</NavLink>
        </li>
      </ul>
      <div className="icons">
        <div className="cart-icon">
          <span>{totalQuantity}</span>
          <BsCart onClick={() => navigate('/cart')} />
        </div>
        <div className="user-icon">
          <img src={currentUser ? currentUser.photoURL : UserImg} onClick={toggleProfileAction} alt='user' />
        </div>
        <div className="profile-action" ref={profileActionRef} onClick={toggleProfileAction}>
          {
            currentUser ? <h4 onClick={logout} >Logout</h4> : (
              <div className="link-choices">
                <Link to='/signup'>
                  <h4>Signup</h4>
                </Link>
                <Link to='/login'>
                  <h4>Login</h4>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header