import { useEffect, useState } from 'react';
import styles from './mandira.module.css';
import { useDispatch } from 'react-redux';

const CardMandira = (props) => {
  const dispatch = useDispatch();
  const handleFile = (event) => {
    event.preventDefault();
  };
  const handleDelete = (event) => {
    event.preventDefault();
  };
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
  });

  const handleInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.product_id) {
      // dispatch(updateProduct(input));
    } else {
      // dispatch(updateReview(input));
    }
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
                {props.active === false && (
                  <button
                    className={`btn btn-primary`}
                    name={props.name}
                    value={props.id_post}
                    onClick={handleDelete}
                  >
                    Activar
                  </button>
                )}

                {props.active === true && (
                  <button
                    className={`btn btn-primary`}
                    name={props.name}
                    value={props.id_post}
                    onClick={handleDelete}
                  >
                    Eliminar
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

      <div className='card card-body'>
        <form onSubmit={handleSubmit}>
          <div></div>
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
                name='title'
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
                  name='summary'
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
                name='content'
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
        </form>
      </div>
    </section>
  );
};

export default CardMandira;
