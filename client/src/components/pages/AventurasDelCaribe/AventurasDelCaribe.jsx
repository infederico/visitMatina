import { Link } from "react-router-dom"

export default function AventurasDelCaribe() {
    return(
        <>
            <h1>Aventuras del Caribe</h1>
            <h2>Ir a Artesanías Mar y Luna</h2>
            <Link to="/artesaniasMarYLuna">
                <button type="button" className="btn btn-primary">Vamos!</button>
            </Link>       
        </>
    )
}