import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import Review from './Review/Review'; // componente Review (card)

import styles from './Reviews.module.css';

const Reviews = () => {

    // global states
    // const reviews = useSelector(state => state.reviews); // aca el back tiene que responder filtrado por Miembro y si esta approved
    const apiRes = require('./mock_res_back.json'); //mockeo de la response del back 
    const reviews = apiRes.response;

    // local states
    const [ overallRatingNumber, setOverallRatingNumber ] = useState(0);
    const [ overallRatingWord, setOverallRatingWord ] = useState('');
    const [ newReview, setNewReview ] = useState({
        name: '',
        email: '',
        rating: 5, // por defecto esta seteado en la maxima calificacion
        description: ''
    });
    const [ filteredReviews, setFilteredReviews ] = useState([]);
    const [ filterSelectedOption, setFilterSelectedOption ] = useState('all'); // por defecto se inicializa el filtro en "mostrar: Todas"
    const [ sortedReviews, setSortedReviews ] = useState([]);
    const [ sortSelectedOption, setSortSelectedOption ] = useState(''); // por defecto se inicializa el ordenamiento en "ordenar: " (no sort)
    const [ paginatedReviews, setPaginatedReviews ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    

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
    }, [reviews, filterSelectedOption]);

    const ratingScale = {
        // NEGATIVAS
        0: 'MUY MALO',
        0.5: 'MUY MALO',
        1: 'MALO',
        1.5: 'MALO',
        //NEUTRALES
        2: 'REGULAR',
        2.5: 'REGULAR',
        // POSITIVAS
        3: 'BUENO',
        3.5: 'BUENO',
        4: 'MUY BUENO',
        4.5: 'MUY BUENO',
        5: 'EXCELENTE'
    }
    useEffect( () => {
        setOverallRatingWord(ratingScale[overallRatingNumber]);
    }, [overallRatingNumber]);
    
    // LOGICA PARA FILTRAR
    useEffect( () => { 
        let filteredByRating = [];
        switch (filterSelectedOption) {
            case 'all':
                filteredByRating = reviews;
                break;
            case 'positives':
                filteredByRating = reviews.filter((review) => review.rating >= 3);
                break;
            case 'negatives':
                filteredByRating = reviews.filter((review) => review.rating < 3);
                break;
            default:
                filteredByRating = reviews;
                break;
        };
        setFilteredReviews(filteredByRating);
        setCurrentPage(1);
    }, [reviews, filterSelectedOption]);

    // LOGICA PARA ORDENAR
    // functions with each sorting option logic - mapped to an object for cleaner code
    const sortFunctions = {
        'rating-asc': (a, b) => a.rating - b.rating,
        'rating-des': (a, b) => b.rating - a.rating,
        'date-asc': (a, b) => new Date(a.date.split('/').reverse().join('-')) - new Date(b.date.split('/').reverse().join('-')),
        'date-des': (a, b) => new Date(b.date.split('/').reverse().join('-')) - new Date(a.date.split('/').reverse().join('-')),
    };
    useEffect( () => { 
        let auxSortedReviews = sortSelectedOption ? filteredReviews.slice().sort(sortFunctions[sortSelectedOption]) : filteredReviews;
        setSortedReviews(auxSortedReviews);
        setCurrentPage(1);
    }, [filteredReviews, sortSelectedOption]);
    

    // LOGICA PARA PAGINAR
    useEffect( () => { 
        let auxPaginatedReviews = sortedReviews.slice(((currentPage * 6) - 6), (currentPage * 6))
        setPaginatedReviews(auxPaginatedReviews);
    }, [sortedReviews, currentPage]);
    

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

    // selector de filtrado
    const handleFilterChange = (event) => {
        setFilterSelectedOption(event.target.value);
    };
    
    const handleSortChange = (event) => {
        setSortSelectedOption(event.target.value);
    };

    const pageIncrement = () => {
        let lastPage = Math.ceil(sortedReviews.length / 6);
        if (currentPage < lastPage) {
            let nextPage = currentPage + 1;
            setCurrentPage(nextPage);
        }
    };


    const pageDecrement = () => {
        if (1 < currentPage) {
            let prevPage = currentPage - 1;
            setCurrentPage(prevPage);
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
                <span>calificación </span>
                <span>{` ${overallRatingWord} - `}</span> 
                <span>{` ${overallRatingNumber} - `}</span>
                <span>{` ${reviews.length} reseñas `}</span>
            </div>
            <hr />

            <span>
                <label htmlFor="rating-filter">mostrar:  </label>
                <select id="rating-filter" value={filterSelectedOption} onChange={handleFilterChange} className={styles.select} style={{outline: "none"}}> 
                    <option value="all">Todas</option>
                    <option value="positives">Positivas</option>
                    <option value="negatives">Negativas</option>
                </select>
            </span>
                <div className={styles.pagination}>
                    <button onClick={pageDecrement}>prev</button>
                    <span>{`Page ${currentPage}`}</span>
                    <button onClick={pageIncrement}>next</button>
                </div>
            <span>

            </span>

            <span>
                <label htmlFor='sort'>ordenar por:  </label>
                <select id='sort' value={sortSelectedOption} onChange={handleSortChange} className={styles.select} style={{outline: "none"}}> 
                    <option value='date-des'>Fecha - Más recientes primero</option>
                    <option value='date-asc'>Fecha - Más antiguas primero</option>
                    <option value='rating-des'>Mejor puntuación - des.</option>
                    <option value='rating-asc'>Peor puntuación - asc.</option>
                </select>
            </span>
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
                    <input type='text' name='email' onChange={handleChange} value={newReview.email} style={{outline: "none"}} placeholder='opcional'/>
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

export default Reviews; //