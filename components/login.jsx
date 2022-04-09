import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form'; //validation

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('email'));
  console.log(watch('password'));
  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <button className="btn loginBtn" type="submit">
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
