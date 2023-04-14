import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import Review from './Review/Review';

import styles from './Reviews.module.css';

const Reviews = () => {

    // global states
    // const reviews = useSelector(state => state.reviews); // aca el back tiene que responder filtrado por Miembro y si esta approved
    const apiRes = require('./mock_res_back.json'); //mockeo de la response del back 
    const reviews = apiRes.response;

    // local states
    const [ overallRatingWord, setOverallRatingWord ] = useState('');
    const [ overallRatingNumber, setOverallRatingNumber ] = useState(0);

    const [ newReview, setNewReview ] = useState({
        name: '',
        email: '',
        rating: 5,
        description: ''
    });

    const [ filteredReviews, setFilteredReviews ] = useState([]);
    const [ sortedReviews, setSortedReviews ] = useState([]);
    const [ paginatedReviews, setPaginatedReviews ] = useState([]);

    const [ errors, setErrors ] = useState({});


    // hooks
    const dispatch = useDispatch();
    const location = useLocation();
  
    // al montarse pide todas las reviews de este miembro en particular - identifica que memberId es usando el pathname
    const path = location.pathname;
    const identifyMember = () => {
        switch (path) {
            case '/aventurasdelcaribe':
                return 1;
            case '/fincamandira':
                return 2;
            case '/fincalaparcela':
                return 3;
            case '/restaurantsolyluna':
                return 4;
            case '/hospedajeclarodeluna':
                return 5;
            default:
                return false;
        }
    };

    useEffect( () => {
        const memberId = identifyMember();
        if (memberId) {
        //dispatch(getReviewsById(memberId))
        }
    }, []);

    
    useEffect( () => { // cuando se cargan la reviews traidas del back seteo los estados locales que dependian de eso
        // primero calculo el rating global con el cociente entre la suma de todos los ratings y el numero de reviews
        let allRatingsSummation = 0;
        reviews.forEach( review => allRatingsSummation += review.rating);
        let quotient = allRatingsSummation / reviews.length;
        // lo redondeo para que vaya de 0.5 en 0.5
        let roundedOverallRating = Math.round(quotient * 2) / 2;
        setOverallRatingNumber(roundedOverallRating);
    }, [reviews]);

    const ratingScale = {
        0: 'PESIMO',
        0.5: 'MUY MALO',
        1: 'MUY MALO',
        1.5: 'MALO',
        2: 'MALO',
        2.5: 'MALO',
        3: 'BUENO',
        3.5: 'BUENO',
        4: 'MUY BUENO',
        4.5: 'MUY BUENO',
        5: 'EXCELENTE'
    }
    useEffect( () => {
        setOverallRatingWord(ratingScale[overallRatingNumber]);
    }, [overallRatingNumber]);
    
    useEffect( () => { // FALTA LA LOGICA PARA FILTRAR
        setFilteredReviews(reviews);
    }, [reviews]);

    useEffect( () => { // FALTA LA LOGICA PARA ORDENAR
        setSortedReviews(filteredReviews);
    }, [filteredReviews]);
    
    useEffect( () => { // FALTA LA LOGICAPAGINAR
        setPaginatedReviews(sortedReviews);
    }, [sortedReviews]);
    

    // handlers
    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
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
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div>
                <h1>Nuestros clientes</h1>
                <span>conoce la opinión de nuestros clientes</span>
            </div>
            <hr />
            <div>
                <span>{` ${overallRatingWord} - `}</span> 
                <span>{` ${overallRatingNumber} - `}</span>
                <span>{` ${reviews.length} reseñas `}</span>
            </div>
            <hr />
            <div className={styles.reviewCards}>
                {
                    paginatedReviews?.map((review) => {
                        return <Review
                            key={review.id}
                            id={review.id}
                            name={review.name}
                            date={review.date}
                            rating={review.rating}
                            description={review.description}
                        />
                    })
                }
            </div>
            <hr />
            <div>
                <span>Deja tu reseña...</span>
                <br />
                <br />
                <form onSubmit={handleSubmit}>

                    <label>Nombre: </label>
                    <input type='text' name='name' onChange={handleChange} value={newReview.name} style={{outline: "none"}} />
                    {errors.name && <span className={styles.errors} >{errors.name}</span>}
                    <br />
                    <br />

                    <label>Email: </label>
                    <input type='text' name='email' onChange={handleChange} value={newReview.email} style={{outline: "none"}} placeholder='optional'/>
                    {errors.email && <span className={styles.errors} >{errors.email}</span>}
                    <br />
                    <br />

                    <label>Rating:</label>
                    <input
                    name="rating"
                    type="range"
                    min="0"
                    max="5"
                    value={newReview.rating}
                    onChange={handleChange}
                    />
                    <span>{newReview.rating}</span>
                    <br />
                    <br />
                    
                    <label>Reseña: </label>
                    <input type='text' name='description' onChange={handleChange} value={newReview.description} className={styles.reviewDescription} />
                    {errors.description && <span className={styles.errors} >{errors.description}</span>}
                    <br />
                    <br />

                    <br />
                    <button type='submit'><span>enviar</span></button>
                    <br />
                </form>
            </div>
            <hr />
        </>
    );
};

export default Reviews;