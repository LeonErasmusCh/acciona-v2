import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navBar">
      <div className="container-fluid">
        <Link href={'/'} passHref>
          <p className=" navbar-brand navLogo mb-1">Acciona | Capital</p>
        </Link>
      </div>
    </nav>
  );
}
