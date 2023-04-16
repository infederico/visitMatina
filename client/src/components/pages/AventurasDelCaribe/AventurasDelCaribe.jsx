
import CardShop from '../../common/shops/cardShop/Shop';
import CardActivities from '../../common/CardActivities/CardActivities';
import Reviews from '../../common/Reviews/Reviews';
import RedesSociales from '../../common/redesSociales/RedesSociales';

import { Link } from "react-router-dom"

export default function AventurasDelCaribe() {
    return (
        <>
            <CardShop />

            <CardActivities />

            <Reviews memberId={1} />   

            <RedesSociales />
            <h1>Aventuras del Caribe</h1>
            <h2>Ir a Artesanías Mar y Luna</h2>
            <Link to="/artesaniasMarYLuna">
                <button type="button" className="btn btn-primary">Vamos!</button>
            </Link>       
        </>
    );
};