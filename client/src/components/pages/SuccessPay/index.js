import { useParams } from 'react-router-dom';
import { cleanCart } from '../../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ejecutar } from '../../../redux/cartActions';

export default function SuccessPay() {
  const dispatch = useDispatch();
  const { collection_status, payment_id, payment_type, merchant_order_id } =
    useParams();

  useEffect(() => {
    dispatch(cleanCart());
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get('token');
    const PayerID = searchParams.get('PayerID');
    const data = { token, PayerID };
    console.log(data);
    dispatch(ejecutar(data));
  }, []);

  return (
    <section>
      <div className='container text-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100'
          height='100'
          fill='#2EC462'
          class='bi bi-check-circle'
          viewBox='0 0 16 16'
        >
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
        </svg>
        <h1>Gracias por su compra!</h1>
      </div>
    </section>
  );
}
