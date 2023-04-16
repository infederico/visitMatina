import { useState } from 'react';

import validation from './validation';

import styles from './ReviewForm.module.css';

const ReviewForm = () => {

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
        if (type === 'range') {
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
                <span>Deja tu reseña...</span>
                <br />
                <br />
                <form onSubmit={handleSubmit}>

                    <label>Nombre: </label>
                    <input type='text' name='name' onChange={handleInputChange} value={newReview.name} style={{outline: "none"}} />
                    {errors.name1 && <span className={styles.errors} >{errors.name1}</span>}
                    {errors.name2 && <span className={styles.errors} >{errors.name2}</span>}
                    {errors.name3 && <span className={styles.errors} >{errors.name3}</span>}
                    <br />
                    <br />

                    <label>Email: </label>
                    <input type='text' name='email' onChange={handleInputChange} value={newReview.email} style={{outline: "none"}} placeholder='opcional'/>
                    {errors.email1 && <span className={styles.errors} >{errors.email1}</span>}
                    {errors.email2 && <span className={styles.errors} >{errors.email2}</span>}
                    <br />
                    <br />
git 
                    {/* <input
                    name="rating"
                    type="range"
                    min="0"
                    max="5"
                    value={newReview.rating}
                    onChange={handleInputChange}
                    /> */}
                    <div className={styles.rate}>
                        <input type="radio" id="star5" name="rate" value={newReview.rating} onChange={handleInputChange} />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value={newReview.rating} onChange={handleInputChange} />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value={newReview.rating} onChange={handleInputChange} />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value={newReview.rating} onChange={handleInputChange} />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value={newReview.rating} onChange={handleInputChange} />
                        <label for="star1" title="text">1 star</label>
                    </div>
                    {errors.rating1 && <span className={styles.errors} >{errors.rating1}</span>}
                    <br />
                    <br />
                    
                    <label>Reseña: </label>
                    <input type='text' name='description' onChange={handleInputChange} value={newReview.description} className={styles.reviewDescription} />
                    {errors.description1 && <span className={styles.errors} >{errors.description1}</span>}
                    {errors.description2 && <span className={styles.errors} >{errors.description2}</span>}
                    <br />
                    <br />

                    <br />
                    <br />
                    <button type='submit'><span>enviar</span></button>
                    <br />
                    <br />
                    {successMessage && <span className={styles.success} >Tu reseña se ha registrado con éxito</span>}
                    <br />
                </form>
            </div>
        
        </>
    );
};

export default ReviewForm;