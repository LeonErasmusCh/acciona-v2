import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Documents() {

    const router = useRouter()

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
                <Link href={'datos-fondo-frigo'} passHref>
                <p className="active">Fondo Frigorificos Unidos II</p>
              </Link>
              <Link href={'datos-fondo-parcelas'} passHref>
                <p className="">Fondo Parcelas de TaguaTagua</p>
              </Link>
              <Link href={'/profile'} passHref>
                <p className='mt-5'>Mi perfil</p>
              </Link>
            </div>
          </div>
          {/* sidebar end */}

          <div className="col-10 d-flex justify-content-end">
            <div className="col-8 mb-5">
              <h3 className="mt-5 mb-0">Contrato</h3>
              <div className="row">
                <p className=" text-center m-3"></p>
                <p className=" text-center m-3 data-display">
                  {date}
                  <br></br>
                  <br></br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a elit lacinia, volutpat diam sit amet, blandit nisl. Aenean
                  est lorem, ultricies quis nisi sit amet, tempus venenatis
                  eros. Cras molestie a metus eu accumsan. Sed ut semper odio,
                  eget ullamcorper lectus. In hac habitasse platea dictumst.
                  Pellentesque non consequat leo, at tempor augue. Proin
                  elementum condimentum erat, a ultrices lectus commodo id.
                  <br></br>
                  <br></br>
                  Suspendisse in condimentum felis. Interdum et malesuada fames
                  ac ante ipsum primis in faucibus. In dignissim lectus orci,
                  vitae sodales mauris mattis ut. Praesent id turpis hendrerit,
                  sodales est vel, condimentum leo. Praesent ut neque quis eros
                  vehicula facilisis. Nullam volutpat placerat metus, in
                  suscipit dolor tempor in. Nam lacus dolor, cursus ut lacus in,
                  sagittis aliquet libero.
                  <br></br>
                  <br></br>
                  Phasellus vel tortor vitae lectus consectetur fringilla nec
                  nec erat. Pellentesque et semper velit, sed ullamcorper diam.
                  Mauris euismod id nibh at efficitur. Phasellus blandit
                  convallis tellus, ac finibus urna venenatis eu. Integer sit
                  amet rutrum nunc, venenatis semper diam. Nam feugiat, diam sit
                  amet vestibulum scelerisque, ex felis finibus libero, et
                  vehicula dolor libero a risus. Etiam vulputate tristique nunc,
                  vel egestas odio posuere non. Vivamus ut aliquet ipsum. Ut
                  porta lorem ac dui sollicitudin iaculis. Aenean in suscipit
                  tortor. Etiam elementum sem nec tempor sagittis. Praesent
                  vitae vulputate tellus. Quisque consectetur convallis purus,
                  sit amet porta libero sodales ut. Quisque ac convallis velit.
                </p>
              </div>
            </div>
          </div>
          <button className="btn firmar-btn" type="submit" onClick={() => router.push('documents-frigo')}>
            firmar
          </button>
        </div>
      </div>
    </>
  );
}
