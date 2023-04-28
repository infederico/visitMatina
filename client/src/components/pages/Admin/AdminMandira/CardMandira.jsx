import { useEffect, useState } from 'react';
import styles from './mandira.module.css';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../../../../redux/productActions';

const CardMandira = (props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
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

  const handleInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleButton = (event) => {
    event.preventDefault();
    setInput({
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

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteProduct(input.id_product));
  };

  const handleFile = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProduct(input));
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
          <div className={`col-md-4`}>
            <img
              src={props.image}
              className={`${styles.image} img-fluid rounded-start`}
              alt='...'
            />
          </div>
          <div className={`col-md-8`}>
            <div className={`card-body`}>
              <h5 className={`card-title`}>{props.title}</h5>
              <p className={`card-text`}>{props.summary}</p>
              <div className={styles.divButtons}>
                <button
                  className={`btn btn-primary`}
                  name='id_post'
                  value={props.id_post}
                  onClick={handleButton}
                >
                  Cargar Datos
                </button>

                {props.active === true ? (
                  <button
                    className={`btn btn-primary`}
                    name={props.name}
                    value={props.id_post}
                    onClick={handleDelete}
                  >
                    Eliminar
                  </button>
                ) : (
                  <button
                    className={`btn btn-primary`}
                    name={props.name}
                    value={props.id_post}
                    onClick={handleDelete}
                  >
                    Activar
                  </button>
                )}
                {props.active === true ? (
                  <p className={`${styles.txtButtonG} `}>Active</p>
                ) : (
                  <p className={`${styles.txtButtonR} `}>Inactive</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='card card-body'>
          <div>{props.rating}</div>
          <div className='row mb-3'>
            <label for='inputEmail3' className='col-sm-2 col-form-label'>
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
              <label for='inputPassword3' className='col-sm-2 col-form-label'>
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
          <div className='row mb-3'>
            <label for='inputPassword3' className='col-sm-2 col-form-label'>
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
          </div>
          {props.image ? (
            <div className='row mb-3'>
              <label for='inputPassword3' className='col-sm-2 col-form-label'>
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
      </form>
    </section>
  );
};

export default CardMandira;
