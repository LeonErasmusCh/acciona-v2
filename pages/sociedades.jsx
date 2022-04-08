import React from 'react';
import Link from 'next/link';

export default function Sociedades() {
  return (
    <>
      <div className="container user-info-container">
        <div className="row">
          <Link href={'/sociedad1'} passHref>
            <div className="col-5 mx-auto sociedad">
              <h5 className="sociedadHeading">sociedad 1</h5>
            </div>
          </Link>
          <Link href={'/sociedad2'} passHref>
            <div className="col-5 mx-auto sociedad">
              <h5 className="sociedadHeading">sociedad 2</h5>
            </div>
          </Link>
        </div>
        <div className="row my-3">
          <Link href={'/sociedad3'} passHref>
            <div className="col-5 mx-auto sociedad">
              <h5 className="sociedadHeading">sociedad 3</h5>
            </div>
          </Link>
          <Link href={'/sociedad4'} passHref>
            <div className="col-5 mx-auto sociedad">
              <h5 className="sociedadHeading">sociedad 4</h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
