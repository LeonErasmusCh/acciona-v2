import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import { Store } from "../utils/store"; //store
import { auth } from '../utils/firebase-config'; //Firebase
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/router';

export default function Navbar() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state; // userInfo state
  const router = useRouter();


  // Cerrar seccion
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("successful logout")
        dispatch({ type: 'USER_LOGOUT', payload: null });
       // Cookies.remove('userInfo', { domain: 'http://localhost:3000/' })
        setLogedOutUser(true)
        
      })
      .catch((error) => {
        // An error happened.
        console.log("Fail logout")
      });
  };

  return (
    <nav className="navbar fixed-top navBar">
      <div className="container-fluid">
        <div className="logo">
          <Link href={"sociedades"} passHref>
            <Image alt="Acciona Capital" src={logo} width={200} height={30} />
          </Link>
        </div>
        <div className="text-white">
          {userInfo ? (
            <p>
              <span className="mx-3">{userInfo.providerData[0].uid}</span> 
              <span>|</span>
              <button className=" btn mx-3" onClick={handleLogout}>cerrar sesión</button>
            </p>
          ) : ""}
        </div>
      </div>
    </nav>
  );
}
