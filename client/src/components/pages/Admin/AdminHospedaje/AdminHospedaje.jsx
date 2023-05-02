import styles from './AdminHospedaje.module.css';
import { getBase64 } from '../../../../assets/helpers/fileTo64';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardImageAdmin from '../AdminRestaurant/CardImageAdmin/CardImageAdmin';
import validate from './validate';
import AlertContact from '../../Contact/AlertContact';
import CardRestaurant from '../AdminRestaurant/CardRestaurant';

import {
  getProductsByShopId,
  postProduct,
} from '../../../../redux/productActions';
import {
  cleanResPost,
  cleanResUpd,
  cleanResDel,
} from '../../../../redux/productSlice';

import { getReviews, getAllApprovedReviewsByShopId, clnResUpdtReview } from '../../../../redux/reviewsActions';


const AdminHospedaje = ({shopId}) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.product);
    const resPostProduct = useSelector((state) => state.product.resPostProduct);
    const resUpdProduct = useSelector((state) => state.product.resUpdProduct);
    const resDelProduct = useSelector((state) => state.product.resDelProduct);

    const reviews = useSelector((state) => state.reviews.value);
    const {resUpdtReview} = useSelector((state) => state.reviews);

    const [newImage, setNewImage] = useState({
        name: 'imagen de galería',
        description: '',
        price: 0.00,
        image: '',
        shop_id: shopId,
    });
    const [ submitted, setSubmitted ] = useState(false)
    const [ errors, setErrors ] = useState({})
    const [ showAlert, setShowAlert ] = useState(false)
    const [ alertMessage, setAlertMessage ] = useState('')

  useEffect(() => {
    dispatch(getProductsByShopId(shopId));
    dispatch(getReviews(shopId))

    if (resPostProduct !== '') { dispatch(cleanResPost()) }
    if (resUpdProduct !== '') { dispatch(cleanResUpd()) }
    if (resDelProduct !== '') { dispatch(cleanResDel()) }
  // eslint-disable-next-line
  }, [ resPostProduct, resUpdProduct, resDelProduct ]);

  useEffect(() => {

    //dispatch(getAllApprovedReviewsByShopId(shopId));
    dispatch(getReviews(shopId))
    if (resUpdtReview !== ""){
      dispatch(clnResUpdtReview())
    }

  }, [resUpdtReview]);

    const handlerInputs = (event) => {
        setNewImage({
            ...newImage,
            [event.target.name]: event.target.value,
        });
        if (submitted) {
            setErrors(
            validate({
                ...newImage,
                [event.target.name]: event.target.value,
            })
            );
        }
    };

    const handlerSubmitCreate = (event) => {
        event.preventDefault()
        
        let err = validate(newImage)
        setErrors(err)

        setSubmitted(true)
        const numErrors = Object.keys(err).length

        if (numErrors === 0) {
            dispatch(postProduct(newImage));
            setSubmitted(false)
            setErrors({});
            setNewImage({
                name: 'imagen de galería',
                description: '',
                price: 0.00,
                image: '',
                id_shop: shopId,
            });
            setShowAlert(true)
            setAlertMessage('Imagen agregada exitosamente')
            //window.alert('Imagen agregada exitosamente');
        } else {
            setShowAlert(true)
            setAlertMessage('Completa todos los campos')
            //window.alert('Completa todos los campos');
        }
    };

  const handlerFile = async (event) => {
    if (event.target.files[0]) {
      let res = await getBase64(event.target.files[0]);
      setNewImage({
        ...newImage,
        image: res,
      });
    }
  };

  const handleOnClose = () => {
    setShowAlert(false)
  };

  return (
    <section>
      <div>
        <h1 className='display-6 text-left my-2'>Administrar Hospedaje Claro de Luna</h1>
        <p><span>Galería de imágenes</span>
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#agregarImagen'
            aria-expanded='false'
            aria-controls='collapseExample'
          >
           Nueva imagen
          </button>
          { showAlert && (<AlertContact show={showAlert} message={alertMessage} onClose={handleOnClose} />) }
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#modificarImagen'
            aria-expanded='false'
            aria-controls='collapseExample2'
          >
            Modificar imagen
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


        <div className='collapse show' id='agregarImagen'>
          <div className='card card-body'>
            <form onSubmit={handlerSubmitCreate}>

              <div>
                <h3>Agregar una nueva imagen a tu galería</h3>
              </div>

              <div className='row mb-3'>
                <label htmlFor='description' className='col-sm-2 col-form-label'>
                  Título
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='description'
                    name='description'
                    value={newImage.description}
                    onChange={handlerInputs}
                    placeholder='título o breve descripción de la imagen'
                  />
                  {errors.description1 && <p>{errors.description1}</p>}
                  {errors.description2 && <p>{errors.description2}</p>}
                </div>
              </div>

              <div className='row mb-3'>
                <label htmlFor='imagen' className='col-sm-2 col-form-label'>
                  Imagen
                </label>
                <div className='col-sm-10'>
                  <input
                    type='file'
                    className='form-control'
                    id='imagen'
                    name='image'
                    onChange={handlerFile}
                  />
                  {errors.image1 && <p>{errors.image1}</p>}
                </div>
              </div>

              <button type='submit' className='btn btn-primary'>
                Agregar
              </button>

            </form>
          </div>
        </div>

        <div className='collapse' id='modificarImagen'>
          <div className='card card-body'>
            <h3>Modificar imagen de tu galería</h3>
          </div>
          <div className={styles.divCardsBlog}>
            {products.map((imagen) => {
              return (
                <CardImageAdmin
                  key={imagen.id_product}
                  productId={imagen.id_product}
                  image={imagen.image}
                  description={imagen.description}
                  active={imagen.active}
                  shopId={imagen.shop_id}
                ></CardImageAdmin>
              );
            })}
          </div>
        </div>
      </div>

      <div className='collapse' id='collapseExample3'>
            <div className='card card-body'>
              <h3>Control de Reviews</h3>
            </div>
            <div className={styles.divCardsBlog}>
              {reviews.map((item) => {
                return (
                  <CardRestaurant
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
    </section>
  );
};

export default AdminHospedaje;