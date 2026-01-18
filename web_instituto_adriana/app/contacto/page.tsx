"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div>
      <h2 className="mb-3">Contacto</h2>
      <p className="text-muted">
        Puedes ponerte en contacto con el centro a través del siguiente
        formulario o mediante los datos que aparecen a continuación.
      </p>

      <div className="row g-4">
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Datos del centro</h5>

              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <strong>Centro:</strong> IES Cura Valera
                </li>
                <li className="mb-2">
                  <strong>Dirección:</strong> Avda. Guillermo Reyna, 35
                </li>
                <li className="mb-2">
                  <strong>Localidad:</strong> Huércal-Overa (Almería)
                </li>
                <li className="mb-2">
                  <strong>Teléfono:</strong> 950 451 905
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Formulario de contacto</h5>

              {enviado && (
                <div className="alert alert-success" role="alert">
                  Mensaje enviado correctamente (ejemplo).
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="correo@email.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Asunto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej. Información matrícula"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Escribe aquí tu mensaje..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
