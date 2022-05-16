import React, { useState, useContext } from 'react'; //React
import Cookies from 'js-cookie'; // Cookies
import Link from 'next/link'; //Next
import { useRouter } from 'next/router'; //Next
import { useForm } from 'react-hook-form'; //validation
import { signInWithEmailAndPassword, getAuth , sendPasswordResetEmail} from 'firebase/auth'; //Firebase
import { auth } from '../utils/firebase-config'; //Firebase
import { Store } from '../utils/store'; //store

export default function Login() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state; // userInfo state
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  /* form */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  /* login */

  const onSubmit = (data) => {
    console.log(data);
    handleLogin();
  };

const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user.providerData[0].uid)
      dispatch({ type: 'USER_LOGIN', payload: user });
      Cookies.set('userInfo', JSON.stringify(user));
      //if firebase user exists - redict to /info-user
      if (user) {
        router.push('/profile');
      }
      // ...
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  };

  //Send password reset email
 const handlePassowordReset = () =>{
  sendPasswordResetEmail(auth, loginEmail)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*  <form onSubmit={handleSubmit(handleLogin)}> */}
        <h3 className="my-3">Ingresa con tu cuenta</h3>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="correo"
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          {errors.email ? (
            errors.email.type === 'pattern' ? (
              <p className="error-message">Correo no es valido</p>
            ) : (
              <p className="error-message">Correo requerido </p>
            )
          ) : (
            ''
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Contraseña"
            {...register('password', { required: true, minLength: 8 })}
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          {errors.password ? (
            errors.password.type === 'minLength' ? (
              <p className="error-message">Contraseña minimo 8 caracteres</p>
            ) : (
              <p className="error-message">Contraseña requerida </p>
            )
          ) : (
            ''
          )}
        </div>

        <div className="d-grid gap-2 col-12 mx-auto">
          <button className="btn loginBtn" type="submit" onClick={handleLogin}>
            Ingresar
          </button>
        </div>
        <button className="btn loginBtn my-4 w-100" onClick={handlePassowordReset}>Olvidé mi contraseña</button>
      </form>
    </>
  )
}
