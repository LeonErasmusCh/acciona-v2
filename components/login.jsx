import React from 'react';
import Link from 'next/link';

export default function Login() {
  function handleSubmit() {
    console.log('handleSubmit');
  }
  return (
    <>
      <form>
        <h3 className="my-3">Ingresa con tu cuenta</h3>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="correo"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Contraseña"
          />
        </div>

        <div className="d-grid gap-2 col-12 mx-auto">
          <Link href="/user-info" passHref>
            <button className="btn loginBtn" type="submit">
              Ingresar
            </button>
          </Link>
        </div>
        <p className="my-4 text-center">Olvidé mi contraseña</p>
      </form>
    </>
  );
}
