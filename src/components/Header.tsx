import React from 'react';
import logo from "../utils/capmac.svg";
import imagePathHandler from "../utils/imagePathHandler";

export default function Header() {
  return (
    <header className="p-4 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <a href="/The-Forest-Friends" style={{ textDecoration: 'none' }}>
              <h1 className="fw-bold text-light d-flex align-items-center">
                <img src={imagePathHandler(logo)} width="120" className="me-3" alt="Logo" />
                The Forest Friends
              </h1>
            </a>
          </div>
          <div className="col-auto text-end">
            <button className="btn btn-outline-light me-2">
              <img src={imagePathHandler(logo)} width="24" className="me-2" alt="Logo" />
              Login
            </button>
            {/*<button className="btn btn-warning" href="/create">Pedir Ajuda</button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
