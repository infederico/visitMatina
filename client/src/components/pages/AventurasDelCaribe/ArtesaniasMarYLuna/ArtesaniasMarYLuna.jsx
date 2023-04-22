import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getShops, getShopId } from '../../../../redux/shopActions';
import { resetShopId } from '../../../../redux/shopSlice';

import CardProductContainer from "../../../common/CardProductContainer/CardProductContainer"
import Reviews from '../../../common/Reviews/Reviews';

export default function ArtesaniasMarYLuna() {

    const shopId = useSelector(state => state.shops.shopId);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect( () => {
        dispatch(getShopId(location.pathname));
        return () => {
            dispatch(resetShopId(0));
        };
    }, []);

    return(
        <>
            <h1>Artesanias Mar y Luna</h1>
            <CardProductContainer/>
            <section>
                <div className='container'>
                    <h4>Nuestros clientes</h4>
                    <span>conoce la opinión de nuestros clientes</span>
                </div>
                { shopId && <Reviews shopId={shopId}/> }
            </section>
        </>
    )
}