import { PayPalButtons } from "@paypal/react-paypal-js";
import { useCallback, useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import watch from 'redux-watch';
import store from "../../../redux/store";

export default function PayPalBtn() {
    // const products = props.products;

    //const products = useSelector(state => state.cart.products)
    let products = [];

    const [paidFor,setPaidFor] = useState(false);
    const [total, setTotal] = useState(0);

    const handleApprove = (orderID) => {

        //back

        // 200
        setPaidFor(true)
        // reload
        window.location.href = "/SuccessPay"
    }
    
    if(paidFor){
        // redirect

    }

    const createOrder = useCallback((data, actions) => {
        let purchase_units = [];
        const localCart = localStorage.getItem("products");
        products = JSON.parse(localCart) || [];
        console.log('createOrder:',products);
        products.map( p => {
            let subtotal = Number(p.price) * p.quantity;
            console.log(p.quantity, subtotal);
            purchase_units.push({ reference_id: p.id, description: p.title, amount: { value: subtotal  } });
        });

        return actions.order.create({
            purchase_units
        })
    },[total]);

    const test = (newVal) => {
        setTotal(Number(newVal));
    }

    let w = watch(store.getState, 'cart.total')
    store.subscribe(w((newVal, oldVal, objectPath) => {
        test(newVal);
        return newVal;
    }))

    useEffect(() => {
        console.log('useEfect:', total, products);
    },[total,products])

    // console.log(store.getState().cart.products) 

    return  <PayPalButtons
                style={{
                    color: "gold",
                    layout: "horizontal",
                    height: 40,
                    tagline: false,
                    shape: "rect"
                }}
                createOrder= { createOrder }
                forceReRender={ createOrder }               
                onApprove={ async ( data, actions ) => {
                    const order = await actions.order.capture();
                    console.log("order", order);
                    handleApprove(data.orderID);
                }}
                onError={(error) => {
                    console.log(error);
                }}
            />
}