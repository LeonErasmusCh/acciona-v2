import React , { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Documents() {
const [date, setDate] = useState("")

useEffect(() => {
    let thisMonth = () => {
        let newDate = new Date()
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        setDate(day + "/" + month + "/" + year)
    }
    thisMonth();
}, [])




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
            <Link href={'resumen'} passHref>
            <p className="" aria-current="page" href="#"> 
                Resumen
              </p>
            </Link>
            <Link href={'datos-fondo'} passHref>
            <p className="" href="#">
              Datos Fondo
            </p>
            </Link>
            <Link href={'documents'} passHref>
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
            <p className="" aria-current="page" href="#"> 
                Home
              </p>
            </Link>
            <Link href={'resumen'} passHref>
            <p className="" aria-current="page" href="#"> 
                Resumen
              </p>
            </Link>
            <Link href={'datos-fondo'} passHref>
            <p className="" href="#">
              Datos Fondo
            </p>
            </Link>
            <Link href={'documents'} passHref>
            <p className="active" href="#">
              Documentos
            </p>
            </Link>
            </div>
          </div>
          {/* sidebar end */}
          <div className="col-10 d-flex justify-content-end">
            <div className="col-8 mb-5">
              <h3 className="my-5">Documentos</h3>
              <div className="row my-3">
              <Link href={'contract'} passHref>
                  <p className=' text-center m-3 data-display'>Contrato</p>
              </Link>
                  <p className=' text-center m-3 data-display'>Cartola {date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
