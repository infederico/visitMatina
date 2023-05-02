import { useEffect, useState } from 'react';
import styles from './parcela.module.css';
import { useDispatch } from 'react-redux';
import { deleteProductLeo, updateProductLeo } from '../../../../redux/productActions';
import { getBase64 } from '../../../../assets/helpers/fileTo64';
import { deleteReview } from '../../../../redux/reviewsActions';
import AlertContact from '../../Contact/AlertContact';

const CardParcela = (props) => {
 
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    review_id: '',
    name: '',
    description: '',
    price: '',
    image: '',
    id_product: '',
    shop_id: '',
    user_id: '',
    rating: '',
    approved: '',
    active: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handlerCloseAlert = () => {
    setShowAlert(false);
  };

  const handleInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleButton = (event) => {
    event.preventDefault();
    setInput({
      review_id: props.review_id ? props.review_id : null,
      name: props.name ? props.name : null,
      description: props.description ? props.description : null,
      price: props.price ? props.price : null,
      image: props.image ? props.image : null,
      id_product: props.id_product ? props.id_product : null,
      shop_id: props.shop_id ? props.shop_id : null,
      user_id: props.user_id ? props.user_id : null,
      rating: props.ratind ? props.rating : null,
      approved: props.approved ? props.approved : null,
      active: props.active ? props.active : null,
    });
  };

/*   const handleDelete = (event) => {
    event.preventDefault();
    if (input.id_product) {
      dispatch(deleteProduct(input.id_product));
    } else {
      dispatch(deleteReview(input));
    }
  }; */

  const handleDeleteProduct = async (event) => {
      const res = await dispatch(deleteProductLeo(event.target.value));
      setAlertMessage(res.payload);
      setShowAlert(true);
  };

  const handleDeleteReview = async (event) => {
    const res = await dispatch(deleteReview(event.target.value));
    setAlertMessage(res.payload);
    setShowAlert(true);
  };


  const handleFile = async (event) => {
    if (event.target.files[0]) {
      let res = await getBase64(event.target.files[0]);
      setInput({
        ...input,
        image: res,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await dispatch(updateProductLeo(input));
    setAlertMessage(res.payload);
    setShowAlert(true);
    setInput({
      name: '',
      description: '',
      price: '',
      image: '',
      id_product: '',
      shop_id: '',
      user_id: '',
      rating: '',
      approved: '',
    });
  };

  return (
    <section>
      <div className={`card mb-3`} style={{ width: '540px' }}>
        <div className={`row g-0`}>
          {props.image ? <div className={`col-md-4`}>
            <img
              src={props.image}
              className={`${styles.image} img-fluid rounded-start`}
              alt='...'
            />
          </div>: null}
          <div className={`col-md-8`}>
            <div className={`card-body`}>
              <h5 className={`card-title`}>{props.name}</h5>
              <p className={`card-text`}>{props.description}</p>
              <p className={`card-text`}>{props.price}</p>
              {props.rating && <p>Rating: {props.rating} estrellas</p>}
              <div className={styles.divButtons}>
                {props.id_product ? <button
                  className={`btn btn-primary`}
                  name='id_post'
                  value={props.id_post}
                  onClick={handleButton}
                >
                  Cargar Datos
                </button>:null}


                {props.id_product ? props.active === true ? (
                  <button
                    className={`btn btn-primary`}
                    name={props.name}
                    value={props.id_product}
                    onClick={handleDeleteProduct}
                  >
                    Eliminar
                  </button>
                ) : (
                  <button
                    className={`btn btn-primary`}
                    name={props.name}
                    value={props.id_product}
                    onClick={handleDeleteProduct}
                  >
                    Activar
                  </button>
                ):null}

                {props.review_id ? props.approved === true ? (
                  <button
                    className={`btn btn-primary`}
                    value={props.review_id}
                    onClick={handleDeleteReview}
                  >
                    Eliminar
                  </button>
                ) : (
                  <button
                    className={`btn btn-primary`}
                    value={props.review_id}
                    onClick={handleDeleteReview}
                  >
                    Activar
                  </button>
                ):null}
  
                { props.review_id ?
                (props.approved === true ? (
                  <p className={`${styles.txtButtonG} `}>Active</p>
                ) : (
                  <p className={`${styles.txtButtonR} `}>Inactive</p>
                ))
                :
                (props.active === true ? (
                  <p className={`${styles.txtButtonG} `}>Active</p>
                ) : (
                  <p className={`${styles.txtButtonR} `}>Inactive</p>
                ))
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {props.id_product ?<form onSubmit={handleSubmit}>
        <div className='card card-body'>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Nombre
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='inputEmail3'
                name='name'
                value={input.name}
                onChange={handleInput}
              />
            </div>
          </div>
          {props.price ? (
            <div className='row mb-3'>
              <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
                Precio
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  id='inputPassword3'
                  name='price'
                  value={input.price}
                  onChange={handleInput}
                />
              </div>
            </div>
          ) : null}
          {props.id_product ? <div className='row mb-3'>
            <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
              Descripcion
            </label>
            <div className='col-sm-10'>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                name='description'
                value={input.description}
                onChange={handleInput}
              ></textarea>
            </div>
          </div>:null}
          {props.image ? (
            <div className='row mb-3'>
              <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
                Imagen
              </label>
              <div className='col-sm-10'>
                <input
                  type='file'
                  className='form-control'
                  id='inputPassword3'
                  name='image'
                  onChange={handleFile}
                />
              </div>
            </div>
          ) : null}
          {props.id_product ? (
            <button type='submit' className='btn btn-primary'>
              Modificar
            </button>
          ) : null}
        </div>
      </form>: null}
      {showAlert && <AlertContact message={alertMessage} show={showAlert} onClose={handlerCloseAlert} />}
    </section>
  );
};
export default CardParcela;
