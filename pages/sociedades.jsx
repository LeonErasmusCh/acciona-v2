import React, {useContext, useEffect} from 'react';
import Link from 'next/link';
import { Store } from "../utils/store"; //store
import { useRouter } from 'next/router';

export default function Sociedades() {

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state; // userInfo state
  const router = useRouter();


  useEffect(() => {
    if (!userInfo) {
       router.push('/'); 
    }
  }, [userInfo]);

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
                <p className='mb-5 active'>Home</p>
              </Link>
                <p className=""></p>
                <p className=""></p>
              <Link href={'/profile'} passHref>
                <p className='mt-5'>Mi perfil</p>
              </Link>
            </div>
          </div>
          {/* sidebar end */}
          <div className="col-10 d-flex justify-content-end">
            <div className="col-8 mb-5">
              <h3 className="my-5">Elige tu sociedad de inversión</h3>
              <div className="row my-3">
                <Link href={'documents-frigo'} passHref>
                  <div className="col-5 mx-auto sociedad">
                    <h5 className="sociedadHeading">sociedad 1</h5>
                  </div>
                </Link>
                <Link href={'documents-parcelas'} passHref>
                  <div className="col-5 mx-auto sociedad">
                    <h5 className="sociedadHeading">sociedad 2</h5>
                  </div>
                </Link>
              </div>
              <div className="row my-3">
                <Link href={'documents-frigo'} passHref>
                  <div className="col-5 mx-auto sociedad">
                    <h5 className="sociedadHeading">sociedad 3</h5>
                  </div>
                </Link>
                <Link href={'documents-parcelas'} passHref>
                  <div className="col-5 mx-auto sociedad">
                    <h5 className="sociedadHeading">sociedad 4</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
