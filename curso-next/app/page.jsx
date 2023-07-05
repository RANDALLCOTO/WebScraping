"use client";
import Link from "next/link";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Busca y compara
            <br />
            <span className="orange_gradient text-center">Productos y Servicios</span>
        </h1>
        <p className="desc text-center">
            Cratosoft Price Comparator, te ayuda en la búsqueda de la mejor opción para obtener tu producto o servicio Soñado.
            Solamente define los parámetros de búsqueda y te mostraremos las mejores opciones.
        </p>
        <Link href="/search" className="black_btn mt-3 h-12" onClick={()=>{console.log("me llamaron")}}>Iniciar búsqueda</Link>
    </section>
  )
}

export default Home