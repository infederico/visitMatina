import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  postReview,
  getAllApprovedReviewsByShopId,
} from '../../../../redux/reviewsActions'
import {
  setBackendError,
  cleanSuccessMessageReview,
} from '../../../../redux/reviewsSlice'

import useLocalStorage from '../../../localStorage/useLocalStorage'
import validation from './validation'

import styles from './ReviewForm.module.css'

const ReviewForm = (props) => {
  
  // global states
  const loggedUser = useSelector((state) => state.user.user); // aca tomo del estado global la data del user que esta loggeado

  const successMessageReview = useSelector(
    (state) => state.reviews.successMessageReview
  )
  const backendError = useSelector((state) => state.reviews.backendError)

  // local states
  const [newReview, setNewReview] = useState({
    user_id: loggedUser.id_user,
    rating: 0,
    description: '',
    approved: true, // asi apenas el usuario postea se ve su review, despues el admin lo puede bannear desde dashboard
    shop_id: props.shopId,
  })
  const [reviewLocalStorage, setReviewLocalStorage] = useLocalStorage(
    'reviewLocalStorage',
    ''
  ); // para persistencia de datos mientras estas completando el form si salis y vovles mantiene lo que llevava ingresado
  const [checkedStars, setCheckedStars] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [incompleteFormAlert, setIncompleteFormAlert] = useState(false)

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (successMessageReview) {
      dispatch(getAllApprovedReviewsByShopId(props.shopId))
    }
  }, [successMessageReview])

  useEffect(() => {

    setNewReview((prevState) => ({
      ...prevState,
      rating: reviewLocalStorage.rating,
      description: reviewLocalStorage.description,
    }))
     
    return () => {
      setTimeout( () => {
        setReviewLocalStorage({
          ...reviewLocalStorage,
          rating: 0,
          description: '',
        });
        //console.log('holi soy el time out');
      }, 15 * 60 * 1000);
    }

  }, []);

  useEffect(() => {
    switch (newReview.rating) {
      case 1:
        setCheckedStars({
          one: true,
          two: false,
          three: false,
          four: false,
          five: false,
        })
        break;
      case 2:
        setCheckedStars({
          one: false,
          two: true,
          three: false,
          four: false,
          five: false,
        })
        break;
      case 3:
        setCheckedStars({
          one: false,
          two: false,
          three: true,
          four: false,
          five: false,
        })
        break;
      case 4:
        setCheckedStars({
          one: false,
          two: false,
          three: false,
          four: true,
          five: false,
        })
        break;
      case 5:
        setCheckedStars({
          one: false,
          two: false,
          three: false,
          four: false,
          five: true,
        })
        break;
      default:
        setCheckedStars({
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
        })
        break;
    }
  }, [newReview]);

  useEffect(() => {
    if (newReview.rating !== 0 && errors.rating1) {
      setErrors({
        ...errors,
        rating1: false,
      })
    }
  }, [newReview.rating])
  
   // handlers
  const handleInputChange = (event) => {
    if (!loggedUser.access) {
      window.alert('Debes estar registrado e iniciar sesión para poder postear una reseña');
      navigate('/login');
    };

    let { name, value } = event.target
    if (name === 'rating') {
      value = parseFloat(value)
    }
    setNewReview({
      ...newReview,
      [name]: value,
    })

    setReviewLocalStorage({
      ...reviewLocalStorage,
      [name]: value,
    })

    // setTimeout( () => {
    //     setReviewLocalStorage({
    //       ...reviewLocalStorage,
    //       rating: 0,
    //       description: '',
    //     });
    //     console.log('holi soy el time out');
    // }, 1 * 60 * 1000);

    if (submitted) {
      let err = validation({
        ...newReview,
        [name]: value,
      })
      setErrors(err)
    }
    if (successMessageReview) {
      dispatch(cleanSuccessMessageReview())
    }
    if (backendError) {
      dispatch(setBackendError(false))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!loggedUser.access) {
      window.alert('Debes estar registrado e iniciar sesión para poder postear una reseña');
      navigate('/login');
    };
    //set submitted state true to allow errors rendering after first submit attemp
    setSubmitted(true)
    dispatch(cleanSuccessMessageReview())
    dispatch(setBackendError(false))
    setIncompleteFormAlert(false)

    // pass to validation f()  - errors will be logged on errors local state
    let err = validation(newReview)
    setErrors(err)

    if (Object.keys(err).length !== 0) {
      setIncompleteFormAlert(true)
      return
    }

    // if there is no errors on the process of validation
    if (Object.keys(err).length === 0) {
      dispatch(postReview(newReview))
      //clean local state after sending all data
      setNewReview({
        user_id: loggedUser.id_user,
        rating: 0,
        description: '',
        approved: true, // asi apenas el usuario postea se ve su review, despues el admin lo puede bannear desde dashboard
        shop_id: props.shopId,
      })
      // clean error log local state
      setErrors({})
      //reset the local state once the new user was created successfully to permit a good user experience and dont show errors until first submit attemp in the next user load
      setSubmitted(false)
      setReviewLocalStorage({
        user_id: loggedUser.id_user,
        rating: 0,
        description: '',
        approved: true,
        shop_id: props.shopId,
      })
      
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit} /*className={styles.form}*/>
      <div className={styles.formContainer}>
        <div className={styles.rate}>
          <input
            type='radio'
            id='star5'
            name='rating'
            value='5'
            onChange={handleInputChange}
            checked={checkedStars.five}
          />
          <label htmlFor='star5'></label>
          <input
            type='radio'
            id='star4'
            name='rating'
            value='4'
            onChange={handleInputChange}
            checked={checkedStars.four}
          />
          <label htmlFor='star4'></label>
          <input
            type='radio'
            id='star3'
            name='rating'
            value='3'
            onChange={handleInputChange}
            checked={checkedStars.three}
          />
          <label htmlFor='star3'></label>
          <input
            type='radio'
            id='star2'
            name='rating'
            value='2'
            onChange={handleInputChange}
            checked={checkedStars.two}
          />
          <label htmlFor='star2'></label>
          <input
            type='radio'
            id='star1'
            name='rating'
            value='1'
            onChange={handleInputChange}
            checked={checkedStars.one}
          />
          <label htmlFor='star1'></label>
       <div> { errors.rating1 && ( <span className={styles.errors}>{errors.rating1}</span> ) } </div>
        </div>
        
        <div className={styles.reviewBox}>
          <textarea
            type='textarea'
            name='description'
            className='form-control'
            rows='2'
            placeholder='Cuéntanos tu experiencia con nosotros...'
            onChange={handleInputChange}
            value={newReview.description}
          ></textarea>
          { errors.description1 && ( <span className={styles.errors}>{errors.description1}</span> ) }
          { errors.description2 && ( <span className={styles.errors}>{errors.description2}</span> ) }
          <br />
          
        </div>
          <div className={styles.submitSection}>
            <button className={styles.submitButton} type='submit'>Enviar</button>
          </div>
      </div> 

      <span className={styles.alertSection}>
        {incompleteFormAlert && (
          <span class="alert alert-warning d-flex align-items-center" role="alert" style={{ height: "12px" }}>
            No se ha podido postear tu reseña, por favor sigue las
            indicaciones
          </span>
        )}
        {successMessageReview && (
          <span class="alert alert-success d-flex align-items-center" role="alert" style={{ height: "12px" }}>
            Tu reseña se ha registrado con éxito
          </span>
        )}
        {backendError && (
          <span
          class="alert alert-warning d-flex align-items-center" role="alert" style={{ height: "12px" }}
          >{`No se ha registrado tu reseña. Server Error ${backendError}`}</span>
        )}
      </span>  
    </form>
  );
};

export default ReviewForm;
