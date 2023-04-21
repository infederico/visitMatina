import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postReview, getAllApprovedReviewsByShopId } from '../../../../redux/reviewsActions';
import { setBackendError, cleanSuccessMessageReview } from '../../../../redux/reviewsSlice';

import validation from './validation';

import styles from './ReviewForm.module.css';

const ReviewForm = (props) => {

    //////////////////////////// DESPEUS BORRAR Y PLANTEAR A EDU AGREGAR ESTADO GLOBAL ACCESS
    const access = true;
    /////////////////////////////////////////////////////////////////////////////////////////


    // global states
    const successMessageReview = useSelector(state => state.reviews.successMessageReview);
    const backendError = useSelector(state => state.reviews.backendError);
    //const loggedUser = useSelector(state => state.user); // aca tomo del estado global la data del user que esta loggeado
    const loggedUser = {
        id_user: 1,
        image: '',
        name: 'Ivan Federico',
        email: 'inf@gmail.com',
        password: 'ash55'
    };

    // local states
    const [ newReview, setNewReview ] = useState({
        user_id: loggedUser.id_user,
        rating: 0,
        description: '',
        approved: true, // asi apenas el usuario postea se ve su review, despues el admin lo puede bannear desde dashboard
        shop_id: props.shopId
    });
    const [ checkedStars, setCheckedStars ] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    });
    const [ submitted, setSubmitted ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const [ incompleteFormAlert, setIncompleteFormAlert ] = useState(false);

    // hooks
    const dispatch = useDispatch();

    useEffect( () => {
        switch (newReview.rating) {
            case 1: setCheckedStars({ one: true, two: false, three: false, four: false, five: false });
            break;
            case 2: setCheckedStars({ one: false, two: true, three: false, four: false, five: false });
            break;
            case 3: setCheckedStars({ one: false, two: false, three: true, four: false, five: false });
            break;
            case 4: setCheckedStars({ one: false, two: false, three: false, four: true, five: false });
            break;
            case 5: setCheckedStars({ one: false, two: false, three: false, four: false, five: true });
            break;
            default: setCheckedStars({ one: false, two: false, three: false, four: false, five: false });
            break;
        }
    }, [newReview]);
    
    useEffect( () => {
        if (newReview.rating !== 0 && errors.rating1 ) {
            setErrors({
                ...errors,
                rating1: false
            });
        }
    }, [newReview.rating]);

    // handlers
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'rating') {
            setNewReview({
                ...newReview,
                rating: parseFloat(value)
            });
        }
        if (name === 'description') {
            setNewReview({
                ...newReview,
                description: value
            });
        }
        if (submitted) {
            let err = validation({
                ...newReview,
                [name]: value
            });
            setErrors(err); 
        };
        if (successMessageReview) {
            dispatch(cleanSuccessMessageReview());
        }
        if (backendError) {
            dispatch(setBackendError(false));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //set submitted state true to allow errors rendering after first submit attemp
        setSubmitted(true);
        dispatch(cleanSuccessMessageReview());
        dispatch(setBackendError(false));
        setIncompleteFormAlert(false);

        // pass to validation f()  - errors will be logged on errors local state
        let err = validation(newReview);
        setErrors(err); 

        if ((Object.keys(err).length) !== 0) {
            setIncompleteFormAlert(true);
            return;
        }

        // if there is no errors on the process of validation
        if (Object.keys(err).length === 0) {
            dispatch(postReview(newReview));
            // vuelve a pedir todas las reviews para que actaulice y el user vea el review que acaba de postear
            dispatch(getAllApprovedReviewsByShopId(props.shopId));
            //clean local state after sending all data
            setNewReview({
                user_id: loggedUser.id_user,
                rating: 0,
                description: '',
                approved: true, // asi apenas el usuario postea se ve su review, despues el admin lo puede bannear desde dashboard
                shop_id: props.shopId
            });
            // clean error log local state
            setErrors({});
            //reset the local state once the new user was created successfully to permit a good user experience and dont show errors until first submit attemp in the next user load
            setSubmitted(false);
            return;
        }
    };

    return (
        <>
            <div>
                <div className="card-title fw-bold">Déjanos tu reseña...</div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className={styles.rate}>
                            <input type="radio" id="star5" name="rating" value='5' onChange={handleInputChange} checked={checkedStars.five} />
                            <label htmlFor="star5"></label>
                            <input type="radio" id="star4" name="rating" value='4' onChange={handleInputChange} checked={checkedStars.four} />
                            <label htmlFor="star4"></label>
                            <input type="radio" id="star3" name="rating" value='3' onChange={handleInputChange} checked={checkedStars.three} />
                            <label htmlFor="star3"></label>
                            <input type="radio" id="star2" name="rating" value='2' onChange={handleInputChange} checked={checkedStars.two} />
                            <label htmlFor="star2"></label>
                            <input type="radio" id="star1" name="rating" value='1' onChange={handleInputChange} checked={checkedStars.one} />
                            <label htmlFor="star1"></label>
                        </div>
                        <br />
                        <br />
                        {errors.rating1 && <span className={styles.errors} >{errors.rating1}</span>}
                        <br />

                        <div className="mb-3">
                            <textarea
                                type="textarea" 
                                name="description"
                                className="form-control"
                                rows="3"
                                placeholder="Cuéntanos acerca de tu experiencia con nosotros..."
                                onChange={handleInputChange}
                                value={newReview.description}>
                            </textarea>
                        </div>

                        {errors.description1 && <span className={styles.errors} >{errors.description1}</span>}
                        {errors.description2 && <span className={styles.errors} >{errors.description2}</span>}

                    </div>
                    
                    <br />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary" type="submit"><span>Enviar</span></button>
                    </div>
                    <br />
                    { incompleteFormAlert && <div class="alert alert-warning" role="alert">No se ha podido postear tu reseña, por favor sigue las indicaciones</div> }
                    { successMessageReview && <div class="alert alert-success" role="alert">Tu reseña se ha registrado con éxito</div> }
                    { backendError && <div class="alert alert-warning" role="alert">{`No se ha registrado tu reseña. Server Error ${backendError}`}</div> }
                    <br />
                </form>
            </div>
        
        </>
    );
};

export default ReviewForm;