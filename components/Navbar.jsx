import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../utils/Store'; //store

export default function Navbar() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state; // userInfo state
  return (
    <nav className="navbar fixed-top navBar">
      <div className="container-fluid">
        <div className="logo">
          <Link href={'/'} passHref>
            <Image
              alt="Acciona Capital"
              src="/../public/logo.png"
              width={200}
              height={30}
            />
          </Link>
        </div>
        <div className="text-white">
          {userInfo && (
            <p>
              <span>{userInfo.user.email}</span>
              <span className="mx-3">cerrar session</span>
            </p>
          )}
        </div>
      </div>
    </nav>
  )
}
