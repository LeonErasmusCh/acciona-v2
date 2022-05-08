import React from 'react';
import Link from 'next/link';

export default function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar2">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <Link href={'/'} passHref>
              <p className="active" aria-current="page" href="#">
                Resumen
              </p>
            </Link>
            <p className="" href="#">
              Datos Fondo
            </p>

            <p className="" href="#">
              Documentos
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
