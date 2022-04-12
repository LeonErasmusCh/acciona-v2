import React, { useContext } from 'react';
import Link from 'next/link';
import { Store } from '../utils/Store'; //store

export default function Navbar() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state; // userInfo state
  return (
    <nav className="navbar fixed-top navBar">
      <div className="container-fluid">
        <Link href={'/'} passHref>
          <p className=" navbar-brand navLogo mb-1">Acciona | Capital</p>
        </Link>
        <div className="text-white">
          {userInfo ? <span>{userInfo.user.email}</span> : ''}
        </div>
      </div>
    </nav>
  );
}
