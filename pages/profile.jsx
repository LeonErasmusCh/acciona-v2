import React, { useContext } from 'react';
import Link from 'next/link';
import { Store } from '../utils/Store'; //store

export default function UserInfo() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state; // userInfo state
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          {/* sidebar */}
          <div className="col-2 sidebar text-cente">
            <div className="row text-center menu">
              <Link href={'/'} passHref>
                <p>Home</p>
              </Link>
              <Link href={'/profile'} passHref>
                <p className="active">Mi prefil</p>
              </Link>
            </div>
          </div>
          {/* sidebar end */}

          <div className="col-10 d-flex justify-content-center">
            <form className="col-8">
              <h3 className="my-5">Datos personales</h3>

              <div className="row">
                {/*  
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="nombre"
                placeholder={userInfo.user.email}
                value={userInfo.user.email}
              />
            </div>
 */}
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
                      id="country"
                      placeholder="Pais"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    aria-describedby="Cuidad"
                    placeholder="Cuidad"
                  />
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="Address"
                      aria-describedby="Address"
                      placeholder="Dirección"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="telephone"
                    aria-describedby="telephone"
                    placeholder="Telefono"
                  />
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="celular"
                      placeholder="Celular"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="profession"
                    aria-describedby="profession"
                    placeholder="Profesión"
                  />
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="job"
                      placeholder="Cargo"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="employer-name"
                    aria-describedby="employer-name"
                    placeholder="Nombre empleador"
                  />
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="Bank"
                      placeholder="Banco"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="account-type"
                    aria-describedby="account-type"
                    placeholder="Tipo de cuenta"
                  />
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="account-number"
                      placeholder="Número de cuenta"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="spouse-name"
                    aria-describedby="spouse-name"
                    placeholder="Nombre Conyuge"
                  />
                </div>

                <div className="col-6">
                  <div className="mb-3"></div>
                </div>
              </div>

              {/* <div className="d-grid gap-2 col-6 mx-auto my-4"> */}
              <div className="">
                <Link href="/sociedades" passHref>
                  <button className="btn save-btn" type="submit">
                    Guardar
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
