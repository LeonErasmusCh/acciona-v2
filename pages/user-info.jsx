import React from 'react';
import Link from 'next/dist/client/link';

export default function UserInfo() {
  return (
    <>
      <div className="container user-info-container">
        <form>
          <h3 className="my-4">Ingresa con tu cuenta</h3>

          <div className="row">
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nombre"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="Apellido Paterno"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Apellido Paterno"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Apellido Materno"
              />
            </div>

            <div className="col-6">
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="RUT"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nacionalidad"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Estado Civil"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Regimen de bienes (solo casado)"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Tipo de Trabajador"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Cargo"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Nombre empleador"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Dirección particular"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Teléfono / Celular"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Banco"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Numero de cuenta"
                />
              </div>
            </div>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto my-4">
            <Link href="/sociedades" passHref>
              <button className="btn loginBtn" type="submit">
                Actualizar mis datos
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
