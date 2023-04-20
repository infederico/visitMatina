import { useState } from 'react';

import validation from './validation';

import styles from './ReviewForm.module.css';

const ReviewForm = () => {

    // global states
    //const loggedUser = useSelector(state => state.user); // aca tomo del estado global la data del user que esta loggeado
    const loggedUser = {
        id_user: 1,
        image: '',
        name: 'Ivan Federico',
        email: 'inf@gmail.com',
        password: '·ash55'
    };

    // local states
    const [ newReview, setNewReview ] = useState({
        name: '',
        email: '',
        rating: 5, // por defecto esta seteado en la maxima calificacion
        description: ''
    });
    const [ submitted, setSubmitted ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const [ successMessage, setSuccessMessage ] = useState(false);

    // handlers
    const handleInputChange = (event) => {
        const { name, type, value } = event.target;
        if (type === 'radio') {
            setNewReview({
                ...newReview,
                [name]: parseFloat(value)
            });
        }
        if (type === 'text') {
            setNewReview({
                ...newReview,
                [name]: value
            });
        }
        if (submitted) {
            let aux = validation(newReview);
            setErrors(aux); 
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //set submitted state true to allow errors rendering after first submit attemp
        setSubmitted(true);
        setSuccessMessage(false)
        // pass to validation f()  - errors will be logged on errors local state
        let aux = validation(newReview);
        setErrors(aux); 
        if ((Object.keys(aux).length) !== 0) {
            alert('No se ha podido postear su reseña, por favor siga las instrucciones para corregir los errores');
            return;
        }
        // if there is no errors on the process of validation
        if (Object.keys(aux).length === 0) {
            //action dispatch - crate new recipe in DB

            // dispatch(postReview(newReview)); ///////////////////////////////// descomentar al configurar actions de redux
            setSuccessMessage(true);
            //clean local state after sending all data
            setNewReview({
                name: '',
                email: '',
                rating: 5,
                description: ''
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
                        <div className="mb-3">
                            <input className="form-control" name='name' type="text" placeholder="Nombre" aria-label="default input example" onChange={handleInputChange} value={newReview.name} />
                        </div>  
                            {errors.name1 && <span className={styles.errors} >{errors.name1}</span>}
                            {errors.name2 && <span className={styles.errors} >{errors.name2}</span>}
                            {errors.name3 && <span className={styles.errors} >{errors.name3}</span>}

                        <div className="mb-3">  
                            <input type='text' name='email' className="form-control" placeholder="Email - opcional" onChange={handleInputChange} value={newReview.email} />
                        </div>
                            {errors.email1 && <span className={styles.errors} >{errors.email1}</span>}
                            {errors.email2 && <span className={styles.errors} >{errors.email2}</span>}

                        <div className={styles.rate}>
                            <input type="radio" id="star5" name="rate" value={newReview.rating} onChange={handleInputChange} />
                            <label htmlFor="star5">5 stars</label>
                            <input type="radio" id="star4" name="rate" value={newReview.rating} onChange={handleInputChange} />
                            <label htmlFor="star4">4 stars</label>
                            <input type="radio" id="star3" name="rate" value={newReview.rating} onChange={handleInputChange} />
                            <label htmlFor="star3">3 stars</label>
                            <input type="radio" id="star2" name="rate" value={newReview.rating} onChange={handleInputChange} />
                            <label htmlFor="star2">2 stars</label>
                            <input type="radio" id="star1" name="rate" value={newReview.rating} onChange={handleInputChange} />
                            <label htmlFor="star1">1 star</label>
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
                    <br />
                </form>
            </div>
        
        </>
    );
};

export default ReviewForm;