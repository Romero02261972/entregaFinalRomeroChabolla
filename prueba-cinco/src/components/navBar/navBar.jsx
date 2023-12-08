import { CarWidget } from "../CarWidget/CarWidget"

export const NavBar = () => {
  return (
    <>
    <h1 className="text-center">Mi tienda Verde</h1>
    <nav className="d-flex justify-content-around p-4">
<div>
<button className="btn btn-success mx-2">Nosotros</button>
<button className="btn btn-success mx-2">Arreglos Florales</button>
<button className="btn btn-success mx-2">Plantas en Maceta</button>
</div>
<div>
    <CarWidget/>
    <p>Total: $1,280.00</p>
</div>

    </nav>
    </>
  )
}
