import { useState, useEffect } from 'react';
// eslint-disable-next-line
import { useSelector, useDispatch } from "react-redux";
import { useLocation, NavLink } from 'react-router-dom';

import { getAllApprovedReviewsByShopId } from '../../../redux/reviewsActions';
import { setShowCommentPanel , setSelectedReview } from '../../../redux/reviewsSlice';

import Review from './Review/Review'; // componente Review (card)
import ReviewForm from './ReviewForm/ReviewForm'; // componente formulario para postear una nueva review
import ReviewThread from './ReviewThread/ReviewThread'; // componente panel del hilo de la review seleccionada

import stars0 from '../../../assets/images/review-stars/0stars.png';
import stars1 from '../../../assets/images/review-stars/1stars.png';
import stars2 from '../../../assets/images/review-stars/2stars.png';
import stars3 from '../../../assets/images/review-stars/3stars.png';
import stars4 from '../../../assets/images/review-stars/4stars.png';
import stars5 from '../../../assets/images/review-stars/5stars.png';

import styles from './Reviews.module.css';

const Reviews = (props) => {

    // global states
    const reviews = useSelector(state => state.reviews.value);
    const showCommentPanel = useSelector(state => state.reviews.showCommentPanel);
    const selectedReview = useSelector(state => state.reviews.selectedReview);
   
    // local states
    const [ overallRatingNumber, setOverallRatingNumber ] = useState(0);
    const [ overallRatingWord, setOverallRatingWord ] = useState('');
    const [ filteredReviews, setFilteredReviews ] = useState([]);
    const [ filterSelectedOption, setFilterSelectedOption ] = useState('all'); // por defecto se inicializa el filtro en "mostrar: Todas"
    const [ sortedReviews, setSortedReviews ] = useState([]);
    const [ sortSelectedOption, setSortSelectedOption ] = useState('date-des'); // por defecto se inicializa el ordenamiento en mas recientes primero
    const [ paginatedReviews, setPaginatedReviews ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    
    // hooks
    const dispatch = useDispatch();

    useEffect( () => { // al montarse pide todas las reviews de este miembro en particular - identifica que adminId es pasado por props
        dispatch(getAllApprovedReviewsByShopId(props.shopId));
    // eslint-disable-next-line
    }, []);
    
    useEffect( () => { // cuando se cargan la reviews traidas del back seteo los estados locales que dependian de eso
        // primero calculo el rating global con el cociente entre la suma de todos los ratings y el numero de reviews
        let allRatingsSummation = 0;

        reviews.forEach( (review) => allRatingsSummation += review.rating);
        
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
    // eslint-disable-next-line
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
    //functions with each sorting option logic - mapped to an object for cleaner code
    function formatDate (dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);
        return `${day}/${month}/${year}`;
    };
    const sortFunctions = {
        'rating-asc': (a, b) => a.rating - b.rating,
        'rating-des': (a, b) => b.rating - a.rating,
        'date-asc': (a, b) => new Date(a.createdAt.split('/').reverse().join('-')) - new Date(b.createdAt.split('/').reverse().join('-')),
        'date-des': (a, b) => new Date(b.createdAt.split('/').reverse().join('-')) - new Date(a.createdAt.split('/').reverse().join('-')),
    };

    useEffect( () => { 
        let auxSortedReviews = sortSelectedOption ? filteredReviews.slice().sort(sortFunctions[sortSelectedOption]) : filteredReviews;
        setSortedReviews(auxSortedReviews);
        setCurrentPage(1);
    // eslint-disable-next-line
    }, [filteredReviews, sortSelectedOption]);
    

    // LOGICA PARA PAGINAR
    useEffect( () => { 
        let auxPaginatedReviews = sortedReviews.slice(((currentPage * 6) - 6), (currentPage * 6))
        setPaginatedReviews(auxPaginatedReviews);
    }, [sortedReviews, currentPage]);
    

    // handlers
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

    //aux para calcular paginado en mstrando 1 a 6 de 10 Reviews
    const reviewsPerPage = 6;
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = Math.min(startIndex + reviewsPerPage, reviews.length);

    return (
        <div className={styles.reviewContainer}>
            <br />
            <section>
                <div className='container'>
                    { reviews.length !== 0 && <p className='text-center'>calificación general: </p> }
                    { reviews.length !== 0 && <p className='text-center mb-0' style={{fontWeight:"bold"}}>{`${overallRatingWord}`}</p> }
                    { reviews.length !== 0 && <p className='text-center' style={{fontSize:"small", marginLeft:"10px"}}>{`(${reviews.length} reseñas)`}</p> }    
                    { reviews.length !== 0 && <div style={{textAlign: 'center'}} className={styles.starWrapper}>
                        {
                            (overallRatingNumber === 0 || overallRatingNumber === 0.5) && <img src={stars0} alt='0stars' />
                        }
                        {
                            (overallRatingNumber === 1 || overallRatingNumber === 1.5) && <img src={stars1} alt='1stars' />
                        }
                        {
                            (overallRatingNumber === 2 || overallRatingNumber === 2.5) && <img src={stars2} alt='2stars' />
                        }
                        {
                            (overallRatingNumber === 3 || overallRatingNumber === 3.5) && <img src={stars3} alt='3stars' />
                        }
                        {
                            (overallRatingNumber === 4 || overallRatingNumber === 4.5) && <img /* className={`${styles.generalCalifImg}`} */ src={stars4} alt='4stars' />
                        }
                        {
                            overallRatingNumber === 5 && <img src={stars5} alt='5stars' />
                        }
                    </div> }
                </div>
            </section>
            <br />
            <section>
                <div className='container'>
                    <label htmlFor="rating-filter">mostrar:  </label>   
                    <select id="rating-filter" value={filterSelectedOption} onChange={handleFilterChange} className="selectpicker " aria-label="Default select example"> 
                        <option value="all">Todas</option>
                        <option value="positives">Positivas</option>
                        <option value="negatives">Negativas</option>
                    </select>
                    <label htmlFor='sort ml-5'>ordenar por:  </label>
                    <select id='sort' value={sortSelectedOption} onChange={handleSortChange} className="selectpicker" aria-label="Default select example"> 
                        <option value=''></option>
                        <option value='date-des'>Fecha - Más recientes primero</option>
                        <option value='date-asc'>Fecha - Más antiguas primero</option>
                        <option value='rating-des'>Mejor puntuación - des.</option>
                        <option value='rating-asc'>Peor puntuación - asc.</option>
                    </select>
                </div>
            </section>

           {/*  <section>
                <div className='container'>
                    <label htmlFor='sort'>ordenar por:  </label>
                    <select id='sort' value={sortSelectedOption} onChange={handleSortChange} className="selectpicker" aria-label="Default select example"> 
                        <option value=''></option>
                        <option value='date-des'>Fecha - Más recientes primero</option>
                        <option value='date-asc'>Fecha - Más antiguas primero</option>
                        <option value='rating-des'>Mejor puntuación - des.</option>
                        <option value='rating-asc'>Peor puntuación - asc.</option>
                    </select>
                </div>
            </section> */}

            <section >
                <div className='container mt-5 mb-5 '> {/* <div className='container'> */}
                    <div className="row g-2"> {/* <div className="row mt-3">  */}
                        {
                            paginatedReviews?.map((review) => {
                                return <Review
                                    key={review.review_id}
                                    reviewId={review.review_id}
                                    image={review.user.image}
                                    name={review.user.name}
                                    date={formatDate(review.createdAt)}
                                    rating={review.rating}
                                    description={review.description}
                                />
                            })
                        }
                    </div>
                </div>
            </section>
           
            <section>
                <div className='container'>
                { reviews.length !== 0 && <span>{`Mostrando ${(startIndex + 1)} a ${endIndex} de ${reviews.length} Reseñas`}</span> }

                        <div className=" d-flex justify-content-center">
                            <NavLink className="link-dark me-1" >Previous</NavLink>
                            <NavLink className="link-dark ms-1" >Next</NavLink>
                        </div>

                </div>  
            </section>

            <section className={styles.reviewThread}>
                <div className='container'>
                    {
                        showCommentPanel && <ReviewThread reviewId={selectedReview} shopId={props.shopId} />
                    }
                </div>
            </section>

            <section>
                <div className='container'>
                    <ReviewForm shopId={props.shopId} />
                </div>
            </section>

        </div>
    );
};

export default Reviews;