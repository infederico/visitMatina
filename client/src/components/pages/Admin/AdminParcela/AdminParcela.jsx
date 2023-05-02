import { useSelector, useDispatch } from 'react-redux';
import { getBase64 } from '../../../../assets/helpers/fileTo64';
import { useState, useEffect } from 'react';
import styles from './parcela.module.css';
import {
  getProductsByShopId,
  postProduct,
} from '../../../../redux/productActions';
import { getReviews, getAllApprovedReviewsByShopId, clnResUpdtReview } from '../../../../redux/reviewsActions';
import { cleanDeleteProduct, cleanUpdateProduct, cleanPostProduct } from "../../../../redux/productActions"
import CardParcela from './CardParcela';
import validate from './validate';
import AlertContact from '../../Contact/AlertContact';

const AdminParcela = () => {
  const products = useSelector((state) => state.product.product);
  const {resDel,resUpdt, resPostProduct} =useSelector ((state) => state.product);
  const reviews = useSelector((state) => state.reviews.value);
  const {resUpdtReview} = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    id_product: '',
    shop_id: 4,
    user_id: '',
    rating: '',
    approved: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handlerCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    dispatch(getProductsByShopId(4));
    //dispatch(getAllApprovedReviewsByShopId(4));
    dispatch(getReviews(4))
    if (resUpdtReview !== ""){
      dispatch(clnResUpdtReview())
    }

    if (resDel !== ""){
      dispatch(cleanDeleteProduct())
    }
    if (resUpdt !== ""){
      dispatch(cleanUpdateProduct());
    }
    if(resPostProduct !== ""){
      dispatch(cleanPostProduct());
    }

  }, [resUpdtReview, resDel, resUpdt, resPostProduct]);

  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
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
    if (Object.keys(errors).length === 0) {
      const res = await dispatch(postProduct(input));
      setAlertMessage(res.payload);
      setShowAlert(true);
      setErrors({});
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
    } else {
      setAlertMessage('Completa todos los campos');
      setShowAlert(true);
    }
  };

  return (
    <section>
      <div>
        <h1 className='display-6 text-left my-2'>Administrar Finca La Parcela</h1>
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
          <div className='collapse show' id='collapseExample'>
            <div className='card card-body'>
              <form onSubmit={handleSubmit}>
                <div>
                  <h3>Crear Producto</h3>
                </div>
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
                      placeholder='Ingresa el nombre del producto'
                    />
                    {errors.name && <p>{errors.name}</p>}
                  </div>
                </div>
                <div className='row mb-3'>
                  <label
                    htmlFor='inputPassword3'
                    className='col-sm-2 col-form-label'
                  >
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
                      placeholder='Precio'
                    />
                    {errors.price && <p>{errors.price}</p>}
                  </div>
                </div>
                <div className='row mb-3'>
                  <label
                    htmlFor='inputPassword3'
                    className='col-sm-2 col-form-label'
                  >
                    Descripcion
                  </label>
                  <div className='col-sm-10'>
                    <textarea
                      className='form-control'
                      id='exampleFormControlTextarea1'
                      rows='5'
                      name='description'
                      value={input.description}
                      onChange={handleInput}
                      placeholder='Descripcion del producto'
                    ></textarea>
                    {errors.price && <p>{errors.price}</p>}
                  </div>
                </div>
                <div className='row mb-3'>
                  <label
                    htmlFor='inputPassword3'
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
                {showAlert && <AlertContact message={alertMessage} show={showAlert} onClose={handlerCloseAlert} />}
              </form>
            </div>
          </div>

          <div className='collapse' id='collapseExample2'>
            <div className='card card-body'>
              <h3>Modificar Producto</h3>
            </div>
            <div className={styles.divCardsBlog}>
              {products.map((item) => {
                return (
                  <CardParcela
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
          </div>
          <div className='collapse' id='collapseExample3'>
            <div className='card card-body'>
              <h3>Control de Reviews</h3>
            </div>
            <div className={styles.divCardsBlog}>
              {reviews.map((item) => {
                return (
                  <CardParcela
                    key={item.review_id}
                    review_id={item.review_id ? item.review_id : null}
                    name={item.user.name ? item.user.name : null}
                    description={item.description ? item.description : null}
                    image={item.user.image ? item.user.image : null}
                    shop_id={item.shop_id ? item.shop_id : null}
                    rating={item.rating ? item.rating : null}
                    active={item.active ? item.active : null}
                    approved={item.approved ? item.approved : null}
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
export default AdminParcela;
