import { useSelector, useDispatch } from 'react-redux';
import { getBase64 } from '../../../../assets/helpers/fileTo64';
import { useState, useEffect } from 'react';
import styles from './parcela.module.css';
import { getProductsByShopId } from '../../../../redux/productActions';
import { getAllApprovedReviewsByShopId } from '../../../../redux/reviewsActions';

const AdminParcela = () => {
  const productos = useSelector((state) => state.product.product);
  const reviews = useSelector((state) => state.reviews.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const [errors, setErrors] = useState();

  const handleSubmit = () => {};
  const handleInput = () => {};
  const handleFile = () => {};
  useEffect(() => {
    dispatch(getProductsByShopId(4));
    dispatch(getAllApprovedReviewsByShopId(4));
  }, []);

  return (
    <section>
      <div>
        <h1 className='display-6 text-left my-2'>Hospedaje Parcela(id:4)</h1>
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
        </p>
        <h5>Productos </h5>
        {productos.map((item) => {
          if (item.shop_id === 4) {
            return (
              <div>
                <p key={item.name}>{item.name}</p>
              </div>
            );
          }
          return null;
        })}
        <h5>Reviews</h5>
        {reviews.map((item) => {
          if (item.shop_id === 4) {
            return (
              <div>
                <p key={item.description}>{item.description}</p>
              </div>
            );
          }
          return null;
        })}
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
                    Titulo
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
                    Resumen
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
                    Texto
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
            <div className='card card-body'>
              <h3>Modificar Producto</h3>
            </div>
            <div className={styles.divCardsBlog}>
              {/* {allAllPosts.map((ele) => {
                return (
                  <CardBlog
                    id_post={ele.id_post}
                    title={ele.title}
                    summary={ele.summary}
                    content={ele.content}
                    image={ele.image}
                    date={ele.date}
                    active={ele.active}
                  ></CardBlog>
                );
              })} */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default AdminParcela;
