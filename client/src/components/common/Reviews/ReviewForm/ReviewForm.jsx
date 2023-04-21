import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postReview } from '../../../../redux/reviewsActions';
import { addBackendError, cleanSuccessMessage } from '../../../../redux/reviewsSlice';

import validation from './validation';

import styles from './ReviewForm.module.css';

const ReviewForm = (props) => {

    //////////////////////////// DESPEUS BORRAR Y PLANTEAR A EDU AGREGAR ESTADO GLOBAL ACCESS
    const access = true;
    /////////////////////////////////////////////////////////////////////////////////////////


    // global states
    const successMessage = useSelector(state => state.reviews.successMessage);
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

    // handlers
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'rating') {
            setNewReview({
                ...newReview,
                [name]: parseFloat(value)
            });
        }
        if (name === 'description') {
            setNewReview({
                ...newReview,
                [name]: value
            });
        }
        if (submitted) {
            let aux = validation(newReview);
            setErrors(aux); 
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //set submitted state true to allow errors rendering after first submit attemp
        setSubmitted(true);
        dispatch(cleanSuccessMessage);
        // pass to validation f()  - errors will be logged on errors local state
        let aux = validation(newReview);
        setErrors(aux); 
        if ((Object.keys(aux).length) !== 0) {
            alert('No se ha podido postear su reseña, por favor siga las instrucciones para corregir los errores');
            return;
        }
        // if there is no errors on the process of validation
        if (Object.keys(aux).length === 0) {
            dispatch(postReview(newReview));
            //clean local state after sending all data
            setNewReview({
                userId: loggedUser.id_user,
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
                <div className="card-title fw-bold">Deja tu reseña...</div>
                
                <form onSubmit={handleSubmit}>

                    <div>
                        {/* <div className="mb-3">
                            <input className="form-control" name='name' type="text" placeholder="Nombre" aria-label="default input example" onChange={handleInputChange} value={newReview.name} />
                        </div>  
                            {errors.name1 && <span className={styles.errors} >{errors.name1}</span>}
                            {errors.name2 && <span className={styles.errors} >{errors.name2}</span>}
                            {errors.name3 && <span className={styles.errors} >{errors.name3}</span>}

                        <div className="mb-3">  
                            <input type='text' name='email' className="form-control" placeholder="Email - opcional" onChange={handleInputChange} value={newReview.email} />
                        </div>
                            {errors.email1 && <span className={styles.errors} >{errors.email1}</span>}
                            {errors.email2 && <span className={styles.errors} >{errors.email2}</span>} */}  

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
                        {errors.rating1 && <span className={styles.errors} >{errors.rating1}</span>}

                        <div className="mb-3">
                            <textarea type="textarea" name="description" className="form-control" rows="4" placeholder="Cuéntanos acerca de tu experiencia con nosotros..." onChange={handleInputChange}  value={newReview.description}></textarea>
                        </div>
                            {errors.description1 && <span className={styles.errors} >{errors.description1}</span>}
                            {errors.description2 && <span className={styles.errors} >{errors.description2}</span>}

                    </div>
                    
                    <br />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary" type="submit"><span>Enviar</span></button>
                    </div>
                    <br />
                    {successMessage && <span className={styles.success} >Tu reseña se ha registrado con éxito</span>}
                    {backendError && <span className={styles.success} >{`No se ha registrado tu reseña. Server Error ${backendError}`}</span>}
                    <br />
                </form>
            </div>
        
        </>
    );
};

export default ReviewForm;