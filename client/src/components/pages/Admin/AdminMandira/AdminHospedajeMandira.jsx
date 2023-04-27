import { useSelector, useDispatch } from 'react-redux';
import { getBase64 } from '../../../../assets/helpers/fileTo64';
import { useState, useEffect } from 'react';
import styles from './mandira.module.css';
import { getProductsByShopId } from '../../../../redux/productActions';
import { getAllApprovedReviewsByShopId } from '../../../../redux/reviewsActions';
import CardMandira from './CardMandira';

const AdminHospedajeMandira = () => {
  const products = useSelector((state) => state.product.product);
  const reviews = useSelector((state) => state.reviews.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const [errors, setErrors] = useState();

  const handleSubmit = () => {};
  const handleInput = () => {};
  const handleFile = () => {};

  useEffect(() => {
    dispatch(getProductsByShopId(3));
    dispatch(getAllApprovedReviewsByShopId(3));
    console.log(reviews);
  }, []);
  return (
    <section>
      <div>
        <h1 className='display-6 text-left my-2'>Finca Mandira(id:3)</h1>
        <p>
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseExample'
            aria-expanded='false'
            aria-controls='collapseExample'
          >
            Crear Producto
          </button>
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseExample2'
            aria-expanded='false'
            aria-controls='collapseExample2'
          >
            Modificar Producto
          </button>
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseExample3'
            aria-expanded='false'
            aria-controls='collapseExample2'
          >
            Control de reviews
          </button>
        </p>
      </div>

      {/*  */}
      <section>
        <div>
          <div className='collapse' id='collapseExample'>
            <div className='card card-body'>
              <form onSubmit={handleSubmit}>
                <div>
                  <h3>Crear Producto</h3>
                </div>
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
                      value={input}
                      onChange={handleInput}
                      placeholder='Ingresa el titulo del post'
                    />
                    {errors && <p>{errors}</p>}
                  </div>
                </div>
                <div className='row mb-3'>
                  <label
                    for='inputPassword3'
                    className='col-sm-2 col-form-label'
                  >
                    Precio
                  </label>
                  <div className='col-sm-10'>
                    <input
                      type='text'
                      className='form-control'
                      id='inputPassword3'
                      name='summary'
                      value={input}
                      onChange={handleInput}
                      placeholder='Breve descripción del post'
                    />
                    {errors && <p>{errors}</p>}
                  </div>
                </div>
                <div className='row mb-3'>
                  <label
                    for='inputPassword3'
                    className='col-sm-2 col-form-label'
                  >
                    Descripcion
                  </label>
                  <div className='col-sm-10'>
                    <textarea
                      className='form-control'
                      id='exampleFormControlTextarea1'
                      rows='5'
                      name='content'
                      value={input}
                      onChange={handleInput}
                      placeholder='Texto del post'
                    ></textarea>
                    {errors && <p>{errors}</p>}
                  </div>
                </div>
                <div className='row mb-3'>
                  <label
                    for='inputPassword3'
                    className='col-sm-2 col-form-label'
                  >
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

                <button type='submit' className='btn btn-primary'>
                  Crear
                </button>
              </form>
            </div>
          </div>

          <div className='collapse' id='collapseExample2'>
            <form>
              <div className='card card-body'>
                <h3>Modificar Producto</h3>
              </div>
              <div className={styles.divCardsBlog}>
                {products.map((item) => {
                  return (
                    <CardMandira
                      key={item.id_product}
                      id_product={item.id_product}
                      name={item.name ? item.name : null}
                      description={item.description ? item.description : null}
                      price={item.price ? item.price : null}
                      image={item.image ? item.image : null}
                      shop_id={item.shop_id ? item.shop_id : null}
                      active={item.active ? item.active : null}
                    />
                  );
                })}
              </div>
            </form>
          </div>
          <div className='collapse' id='collapseExample3'>
            <div className='card card-body'>
              <h3>Control de Reviews</h3>
            </div>
            <div className={styles.divCardsBlog}>
              {reviews.map((item) => {
                return (
                  <CardMandira
                    key={item.description}
                    name={item.user.name ? item.user.name : null}
                    description={item.description ? item.description : null}
                    image={item.user.image ? item.user.image : null}
                    shop_id={item.shop_id ? item.shop_id : null}
                    rating={item.rating ? item.rating : null}
                    active={item.active ? item.active : null}
                    approved={item.active ? item.active : null}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default AdminHospedajeMandira;
