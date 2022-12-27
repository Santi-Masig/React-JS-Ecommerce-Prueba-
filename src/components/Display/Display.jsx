import React from 'react'


function Display() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1664575196644-808978af9b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className="max-w-full h-auto rounded-lg shadow-2x1"
          />
          <div>
            <h1 className="text-5xl font-bold">Bienvenido a Take Tech!</h1>
            <p className="py-6">
              ¡Aprovecha nuestros descuentos en efectivo o transferencia!
            </p>
            <p className="py-2">
              Te asesoramos para conseguir la mejor notebook al mejor precio.
            </p>
            <a href="#prod" className="btn btn-primary">
              Ver productos
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display