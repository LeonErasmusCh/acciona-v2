import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Modal from "../components/modal";
import { Store } from "../utils/store"; //store
import { useRouter } from 'next/router';


export default function UserInfo() {
  
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state; // userInfo state
  const router = useRouter();


  useEffect(() => {
    if (!userInfo) {
       router.push('/'); 
    }
  }, [userInfo]);


  //Datos personales
  const [firstName, setFirstName] = useState("");
  const [lastNameFather, setLastNameFather] = useState("");
  const [lastNameMother, setLastNameMother] = useState("");
  const [rut, setRut] = useState("");
  const [nationality, setNationality] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [celular, setCelular] = useState("");
  const [profession, setProfession] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [bank, setBank] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [spousName, setSpouseName] = useState("");

  //Bottom half
  const [publicWorker, setPublicWorker] = useState(false);
  const [isFamily, setIsFamily] = useState(false);
  const [isUsaCitizen, setIsUsaCitizen] = useState(false);

  // Declaración fuente de fondos
  const [toggleSalary, setToggleSalary] = useState("on");
  const [toggleInvestment, setToggleInvestment] = useState("on");
  const [toggleBusiness, setToggleBusiness] = useState("on");
  const [toggleInheritance, setToggleInheritance] = useState("on");
  const [toggleOthers, setToggleOthers] = useState("on");

  /* Salario checkbox toggle */
  let checkSalary = (e) => {
    if (toggleSalary === "off") {
      setToggleSalary("on");
    } else if (toggleSalary === "on") {
      setToggleSalary("off");
    }
  };

  /* Investment checkbox toggle */
  let checkInvestment = (e) => {
    if (toggleInvestment === "off") {
      setToggleInvestment("on");
    } else if (toggleInvestment === "on") {
      setToggleInvestment("off");
    }
  };

  /* Business checkbox toggle */
  let checkBusiness = (e) => {
    if (toggleBusiness === "off") {
      setToggleBusiness("on");
    } else if (toggleBusiness === "on") {
      setToggleBusiness("off");
    }
  };

  /* Inheritance checkbox toggle */
  let checkInheritance = (e) => {
    if (toggleInheritance === "off") {
      setToggleInheritance("on");
    } else if (toggleInheritance === "on") {
      setToggleInheritance("off");
    }
  };

  /* Others checkbox toggle */
  let checkOthers = (e) => {
    if (toggleOthers === "off") {
      setToggleOthers("on");
    } else if (toggleOthers === "on") {
      setToggleOthers("off");
    }
  };


  return (
    <>
      <div className="container-fluid mainsection">
        <div className="row">
          {/* sidebar */}
          <div className="col-2 sidebar text-center">
            <div className="row text-center menu">
              <Link href={"sociedades"} passHref>
                <p className="mb-5">Home</p>
              </Link>
              <p className=""></p>
              <p className=""></p>
              <Link href={"/profile"} passHref>
                <p className="mt-5 active">Mi perfil</p>
              </Link>
            </div>
          </div>
          {/* sidebar end */}

          {/* navbar2 */}
          <nav className="navbar navbar-expand-lg fixed-top navbar2">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse d-flex justify-content-center"
                id="navbarNav"
              ></div>
            </div>
          </nav>
          {/* navbar2 end */}

          <div className="col-10 d-flex justify-content-end ">
            <form className="col-8 mb-5">
              <h3 className="my-5">Datos personales</h3>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    aria-describedby="nombre"
                    placeholder="Nombre"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="apellidoPaterno"
                      placeholder="Apellido Paterno"
                      onChange={(e) => {
                        setLastNameFather(e.target.value);
                      }}
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
                    onChange={(e) => {
                      setLastNameMother(e.target.value);
                    }}
                  />
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="rut"
                      placeholder="RUT"
                      onChange={(e) => {
                        setRut(e.target.value);
                      }}
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
                    onChange={(e) => {
                      setNationality(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Pais"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
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
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
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
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
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
                    onChange={(e) => {
                      setTelephone(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="celular"
                      placeholder="Celular"
                      onChange={(e) => {
                        setCelular(e.target.value);
                      }}
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
                    onChange={(e) => {
                      setProfession(e.target.value);
                    }}
                  />
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="job"
                      placeholder="Cargo"
                      onChange={(e) => {
                        setJobTitle(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="EmployerName"
                    aria-describedby="EmployerName"
                    placeholder="Nombre empleador"
                    onChange={(e) => {
                      setEmployerName(e.target.value);
                    }}
                  />
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="bank"
                      placeholder="Banco"
                      onChange={(e) => {
                        setBank(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="accountType"
                    aria-describedby="accountType"
                    placeholder="Tipo de cuenta"
                    onChange={(e) => {
                      setAccountType(e.target.value);
                    }}
                  />
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="accountNumber"
                      placeholder="Número de cuenta"
                      onChange={(e) => {
                        setAccountNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="spousName"
                    aria-describedby="spousName"
                    placeholder="Nombre Conyuge"
                    onChange={(e) => {
                      setSpouseName(e.target.value);
                    }}
                  />
                </div>

                <div className="col-6">
                  <div className="mb-3"></div>
                </div>
              </div>

              {/* checkbox questions - 1 */}
              <div className="question mt-5">
                <p>
                  ¿Ocupa o han ocupado posiciones en el sector público o estatal
                  en cualquier pais?
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={() => {
                      setPublicWorker(true);
                    }}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onClick={() => {
                      setPublicWorker(false);
                    }}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    no
                  </label>
                </div>
                {publicWorker && (
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Especificar cargo, pais y fechas
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      autoFocus
                    ></textarea>
                  </div>
                )}
              </div>

              {/* checkbox questions - 2 */}
              <div className="question mt-5">
                <p>
                  ¿Es cónyuge o pariente hasta el segundo grado de consanguinidad
                  de alguna de estas personas? (hermanos, abuelos y nietos)?
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={() => {
                      setIsFamily(true);
                    }}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onClick={() => {
                      setIsFamily(false);
                    }}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    no
                  </label>
                </div>
                {isFamily && (
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                    Especificar cargo, pais y fechas
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      autoFocus
                    ></textarea>
                  </div>
                )}
              </div>

              {/* checkbox questions - 3 */}
              <div className="question mt-5">
                <p>
                  ¿Eres cuidano de los Estados Unidos o residente de tal pais
                  para fines impositivos?
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={() => {
                      setIsUsaCitizen(true);
                    }}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onClick={() => {
                      setIsUsaCitizen(false);
                    }}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    no
                  </label>
                </div>
                {isUsaCitizen && (
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                    Especificar cargo, pais y fechas
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      autoFocus
                    ></textarea>
                  </div>
                )}
              </div>

              {/* Declaración fuente de fondos */}
              <div className="question mt-5">
                <h5>Declaración fuente de fondos</h5>
                <p>Origen del dinero de la suscripción</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={checkSalary}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    Salario / Empleo
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onChange={checkInvestment}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    Inversiones
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    onChange={checkBusiness}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    Actividades de Negocios
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    onChange={checkInheritance}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    Herencias y/o Regalos
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault5"
                    onChange={checkOthers}
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckIndeterminate"
                  >
                    Otros
                  </label>
                </div>

                {/* Salario Empleo */}
                {toggleSalary !== "on" && (
                  <>
                    <div className="question mt-5">
                      <div className="row mt-3 mb-3">
                        <h5 className="mb-3">Salario / Empleo</h5>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            id="lugarDeEmpleo"
                            aria-describedby="lugarDeEmpleo"
                            placeholder="Lugar de Empleo"
                            autoFocus
                          />
                        </div>

                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            id="negocioDelEmpleador"
                            aria-describedby="negocioDelEmpleador"
                            placeholder="Negocio del Empleador"
                          />
                        </div>
                      </div>

                      <div className="row my-3">
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            id="permanencia"
                            aria-describedby="permanencia"
                            placeholder="Permanencia / Años de Empleo"
                          />
                        </div>

                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            id="sitioWeb"
                            aria-describedby="sitioWeb"
                            placeholder="Sitio web si aplica"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Inversiones */}

                {toggleInvestment !== "on" && (
                  <div className="question mt-5">
                    <h5>Inversiones</h5>

                    <div className="row my-3">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Venta de propiedad(es) (Dirección, fecha de venta y
                          valor de propiedad(es) vendida(s))
                        </label>
                        <textarea
                          className="form-control"
                          id="propertySales"
                          rows="3"
                          autoFocus
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actividades del negocio */}
                {toggleBusiness !== "on" && (
                  <div className="question mt-5">
                    <h5>Actividades del negocio</h5>

                    <div className="row my-3">
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="legalAddress"
                          aria-describedby="legalAddress"
                          placeholder="Dirección Legal"
                          autoFocus
                        />
                      </div>

                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="comercialAddress"
                          aria-describedby="comercialAddress"
                          placeholder="Dirección Comercial"
                        />
                      </div>
                    </div>

                    <div className="row my-3">
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="Giro"
                          aria-describedby="Giro"
                          placeholder="Giro"
                        />
                      </div>

                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="positionInversionista"
                          aria-describedby="positionInversionista"
                          placeholder="Posición de Inversionista"
                        />
                      </div>
                    </div>

                    <div className="row my-3">
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="anualInvoice"
                          aria-describedby="anualInvoice"
                          placeholder="Facturación anual"
                        />
                      </div>

                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="businessAge"
                          aria-describedby="businessAge"
                          placeholder="Años del Negocio"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {toggleInheritance !== "on" && (
                  <div className="question mt-5">
                    <h5>Herencia / Donaciones / Regalos</h5>

                    <div className="row my-3">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Nombre del Fallecido / Donante
                        </label>
                        <textarea
                          className="form-control"
                          id="donorName"
                          rows="3"
                          autoFocus
                        ></textarea>
                      </div>
                    </div>

                    <div className="row my-3">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Relación con el Fallecido / Donante
                        </label>
                        <textarea
                          className="form-control"
                          id="donorRelationship"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>

                    <div className="row my-3">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Dinero recibido
                        </label>
                        <textarea
                          className="form-control"
                          id="moneyReceived"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>

                    <div className="row my-3">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Activos recibidos
                        </label>
                        <textarea
                          className="form-control"
                          id="assetsReceived"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>

                    <div className="row my-3">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Lugar de origen de la riqueza
                        </label>
                        <textarea
                          className="form-control"
                          id="wealthSource"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>

                    <div className="row my-3">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Fecha de la Transferencia
                        </label>
                        <textarea
                          className="form-control"
                          id="propertySales"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {toggleOthers !== "on" && (
                  <div className="question mt-5">
                    <h5>Otros</h5>

                    <div className="row my-3">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          ¿De donde provienen los fondos invertidos?
                        </label>
                        <textarea
                          className="form-control"
                          id="others"
                          rows="3"
                          autoFocus
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="d-grid gap-2 col-6 mx-auto my-4"> */}
              <div className="">
                <Link href="/sociedades" passHref>
                  <Modal />
                  {/* <button className="btn save-btn" type="submit">
                    Guardar
                  </button> */}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
