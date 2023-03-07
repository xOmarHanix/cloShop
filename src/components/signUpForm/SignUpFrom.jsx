import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth, db, storage } from '../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

function SignUpFrom() {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [file,setFile] = useState(null);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        const storgeRef = ref(storage, `images/${Date.now() + username}`);
        const uploadTask = uploadBytesResumable(storgeRef, file);

        uploadTask.on((error) => {
          toast.error(error.message)
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName : username,
              photoURL : downloadURL
            })

            // store user data in firestore database
            await setDoc(doc(db, 'users', user.uid), {
              uid : user.uid,
              displayName :username,
              email,
              photoURL : downloadURL,
              password
            })
          })
        })

        setLoading(false);
        toast.success('Acount Added Successfully');
        navigate('/login'); 
        
      } catch (error) {
        setLoading(false);
        toast.error('Something Went Wrong');
      }

    }

    // const signup = async (e) => {
    //   e.preventDefault();
    //   setLoading(true);
      
    //   try {
    //     const userCredential = await createUserWithEmailAndPassword(
    //       auth,
    //       email,
    //       password
    //     );
        
    //     const user = userCredential.user;
    //     const storageRef = ref(storage, `images/${Date.now() + username}`);
    //     const uploadTask = uploadBytesResumable(storageRef, file); 
        
    //     uploadTask.on((error) => {
    //       toast.error(error.message)
    //     } , () => {
    //       getDownloadURL(uploadTask.snapshot.ref).then(async(downlaodURL) => {
            
    //         // update user profile
    //         await updateProfile(user, {
    //           displayName: username,
    //           photoURL : downlaodURL
    //         })

    //         // store user data in firestore database
    //         await setDoc(doc(db, 'users', user.uid), {
    //           uid : user.uid,
    //           displayName : username,
    //           email,
    //           photoURL : downlaodURL,
    //         })

    //       })
    //     })

    //     setLoading(false);
    //     toast.success('Account Added Successfully');
    //     navigate('/login');

    //   } catch (error) {
    //     setLoading(false);
    //     toast.error('Something Went Wrong')
    //   }
    // }

  return (
    <div className='signup-form'>
      {
        loading ? <h2 className='loading'>Loading...</h2> : (
          <>
            <form onSubmit={signup}>
              <input type="text" placeholder='Enter Your Username' value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button type='submit'>Create An Account</button>
          </form>
          <p>Do You have an account ? <Link to='/login'>Login</Link></p>
        </>
        )
      }
    </div>
  )
}

export default SignUpFrom