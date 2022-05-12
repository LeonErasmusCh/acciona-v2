import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Documents() {
  const [date, setDate] = useState("");

  useEffect(() => {
    let thisMonth = () => {
      let newDate = new Date();
      let day = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      setDate(day + "/" + month + "/" + year);
    };
    thisMonth();
  }, []);

  return (
    <>
      {/* Navbar2  */}
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar2">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse d-flex justify-content-center"
              id="navbarNav"
            >
              <Link href={"resumen-frigo"} passHref>
                <p className="" aria-current="page" href="#">
                  Resumen
                </p>
              </Link>
              <Link href={"datos-fondo-frigo"} passHref>
                <p className="" href="#">
                  Datos Fondo
                </p>
              </Link>
              <Link href={"documents-frigo"} passHref>
                <p className="active" href="#">
                  Documentos
                </p>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar2 End */}
      <div className="container-fluid mainsection">
        <div className="row">
          {/* sidebar */}
          <div className="col-2 sidebar text-center">
            <div className="row text-center menu">
              <Link href={'sociedades'} passHref>
                <p className='mb-5'>Home</p>
              </Link>
                <Link href={'resumen-frigo'} passHref>
                <p className="active">Fondo Frigorificos Unidos II</p>
              </Link>
              <Link href={'resumen-parcelas'} passHref>
                <p className="">Fondo Parcelas de TaguaTagua</p>
              </Link>
              <Link href={'/profile'} passHref>
                <p className='mt-5'>Mi prefil</p>
              </Link>
            </div>
          </div>

          {/* sidebar end */}
          <div className="col-10 d-flex justify-content-end">
            <div className="col-8 mb-5">
              <div className="row my-3">
                <Link href={"contract"} passHref>
                  <p className=" text-center m-3 data-display">Contrato</p>
                </Link>
                <Link href={"cartola"} passHref>
                  <p className=" text-center m-3 data-display">
                    Cartola {date}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
