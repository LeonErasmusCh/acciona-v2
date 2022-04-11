import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'; //validation
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase-config';

export default function Login() {
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
      console.log('user', user);
      router.push('/user-info');
    } catch (error) {
      console.log(error.message);
    }
  };

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
  );
}
