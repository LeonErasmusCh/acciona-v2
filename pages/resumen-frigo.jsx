import React , { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ResumenFrigo() {


useEffect(() => {
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
            <Link href={'resumen-frigo'} passHref>
            <p className="active" aria-current="page" href="#"> 
                Resumen
              </p>
            </Link>
            <Link href={'datos-fondo-frigo'} passHref>
            <p className="" href="#">
              Datos Fondo
            </p>
            </Link>
            <Link href={'documents-frigo'} passHref>
            <p className="" href="#">
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
                <p className='mt-5'>Mi perfil</p>
              </Link>
            </div>
          </div>
          {/* sidebar end */}


          <div className="col-10 d-flex justify-content-end mt-5">
            <div className="col-8 mb-5">
              <div className="row my-3">
              <div className='col-4'>
                  <p className='text-center m-3'>Monto invertido</p>
                  <p className=' text-center m-3 data-display'>$50.000.000</p>
              </div>
              <div className='col-4'>
                  <p className='text-center m-3'>Plazo estimado</p>
                  <p className=' text-center m-3 data-display'>5 Años</p>
              </div>
              <div className='col-4'>
                  <p className='text-center m-3'>Valor cuota hoy</p>
                  <p className=' text-center m-3 data-display'>$1.500</p>
              </div>
              </div>


              <div className="row my-3">
              <div className='col-4'>
                  <p className='text-center m-3'>Rentabilidad hoy</p>
                  <p className=' text-center m-3 data-display'>$1.500</p>
              </div>
              <div className='col-4'>
                  <p className='text-center m-3'>Fecha de inversión</p>
                  <p className=' text-center m-3 data-display'>5 Diciembre 2021</p>
              </div>
              <div className='col-4'>
                  <p className='text-center m-3'>Cantidad de cuotas</p>
                  <p className=' text-center m-3 data-display'>200</p>
              </div>
              </div>

              <div className="row my-3 m-3 mt-5">
                  <p><strong>Noticias</strong></p>
                  <p><strong>1/1/2022: Comenzó la construcción </strong> Se iniciaron operaciones dentro de los principales terrenos especificados y con los presupuestos esperados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
