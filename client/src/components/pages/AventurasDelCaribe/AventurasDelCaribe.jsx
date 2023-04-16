
import CardShop from '../../common/shops/cardShop/Shop';
import CardActivities from '../../common/CardActivities/CardActivities';
import Reviews from '../../common/Reviews/Reviews';
import RedesSociales from '../../common/redesSociales/RedesSociales';

export default function AventurasDelCaribe() {
    return (
        <>
            <CardShop />

            <CardActivities />

            <Reviews memberId={1} />   

            <RedesSociales />
        </>
    );
};