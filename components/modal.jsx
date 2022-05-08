import React from 'react';

export default function Modal() {
  return (
    <div>
      <button
        type="button"
        className="btn save-btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Guardar
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content p-4">
            <div className="row">
              <div>
                <button
                  type="button"
                  className="btn-close float-end mt-2 me-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <h5
              className="modal-title text-center mb-3"
              id="staticBackdropLabel"
            >
              Declaración
            </h5>

            <div className="modal-body text-center">
              Declaro que la información proporcionada en este formulario es
              completa y veraz.
              <br></br>
              <br></br>
              Por otra parte, declaro que NO estoy involucrado en actividades
              criminales, de lavado de dinero o ilegales. Tamnién confirmo que
              los fondos están libres de cualquier reclamo y deuda y en caso de
              ser requerido, estoy obligado a proporcionar cualquier otro
              información en el futuro a solicitud de Acciona Capital S.A
            </div>

            <button
              type="button"
              className="btn btn-primary w-25 m-auto mt-3 mb-5"
            >
              Acepto
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
