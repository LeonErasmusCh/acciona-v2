import React, { useState, useContext, useEffect } from 'react'; //React
import Cookies from 'js-cookie'; // Cookies
import Link from 'next/link'; //Next
import { useRouter } from 'next/router'; //Next
import { useForm } from 'react-hook-form'; //validation
import { signInWithEmailAndPassword } from 'firebase/auth'; //Firebase
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

  // console.log(watch('email'));
  // console.log(watch('password'));
  /* login */

  const onSubmit = (data) => {
    //console.log(data);
    handleLogin();
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch({ type: 'USER_LOGIN', payload: user });
      Cookies.set('userInfo', JSON.stringify(user));
      //if firebase user exists - redict to /info-user
      if (user) {
        router.push('/profile');
      }
      //console.log('userInfo in state', userInfo.user);
    } catch (error) {
      console.log(error.message);
    }
  };

/*   useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_KEY);
    console.log('.env test', process.env.NEXT_PUBLIC_BASE_URL);
  }, []); */

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
          {/*    <Link href="/user-info" passHref>
            <button className="btn loginBtn" type="submit">
              Ingresar
            </button>
          </Link> */}
        </div>
        <p className="my-4 text-center">Olvidé mi contraseña</p>
      </form>
    </>
  )
}
