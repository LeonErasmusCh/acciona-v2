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
                type="text"
                className="form-control"
                id="nombre"
                aria-describedby="nombre"
                placeholder="Nombre"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="apellidoPaterno"
                  placeholder="Apellido Paterno"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="apellidoMaterno"
                aria-describedby="apellidoMaterno"
                placeholder="Apellido Materno"
              />
            </div>

            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="rut"
                  placeholder="RUT"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="nacionalidad"
                aria-describedby="nancionalidad"
                placeholder="Nacionalidad"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="estadoCivil"
                  placeholder="Estado Civil"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="regimenDeBienes"
                aria-describedby="regimenDeBienes"
                placeholder="Regimen de bienes (solo casado)"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="tipeDeTrabajador"
                  aria-describedby="tipeDeTrabajador"
                  placeholder="Tipo de Trabajador"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="carge"
                aria-describedby="carge"
                placeholder="Cargo"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nombreDeEmpleador"
                  placeholder="Nombre del empleador"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="direccionParticular"
                aria-describedby="direccionParticular"
                placeholder="Dirección particular"
              />
            </div>
            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  placeholder="Teléfono / Celular"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="banco"
                aria-describedby="banco"
                placeholder="Banco"
              />
            </div>

            <div className="col-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="numeroDeCuenta"
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
