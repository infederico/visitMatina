import styles from "./Blog.module.css";
import CardBlog from "../../common/CardBlog/CardBlog";
import { Link } from "react-router-dom";
import { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, cPage } from "../../../redux/postActions";
import Footer from "../../common/Footer/Footer"
import {arrayRedes} from "./arrayRedes"

export default function Blog() {
  const apiRes = require("./mock_posts.json");
  const {current} = useSelector((state) => state.post)
  const {allPosts} = useSelector(state => state.post);  
  const dispatch = useDispatch();

  const itemsPage = 4;
  const totalPages =  Math.ceil(allPosts.length / itemsPage);
  const arrayPages = [];
  const orderPosts= [...allPosts].sort((a, b) => a.id_post - b.id_post);
  const lastOne = orderPosts.slice(orderPosts.length-3)


  //console.log(lastOne);
  
  for (let i = 0; i < totalPages; i++) {
    arrayPages.push(i + 1);
  }

  const nextHandler = () => {
    const totalItems = allPosts.length;
    const nexPage = current + 1;
    const firstIndex = current * itemsPage;

    if (firstIndex >= totalItems - 6 ) {
      return;
    }

    dispatch(cPage(nexPage));

  };

  const prevHandler = () => {
    const prevPage = current -1;//1

    if (prevPage < 0){
      return;
    }

    dispatch(cPage(prevPage))

  };

  const pageHandler = (event) => {

    dispatch(cPage(event.target.name - 1))
  };

  const firstHandler = () => {
    dispatch(cPage(0));
  }

  const lastHandler = () => {
    dispatch(cPage(Math.ceil(allPosts.length / 6) - 1));
  }

  useEffect(() => {
    dispatch (getPosts());
  }, []);

  return (
    <section>
    <div className={styles.divMain}>
        <div id="carouselExampleCaptions" className={`carousel slide `} data-bs-ride="carousel">
        <div className={`${styles.divButtons} carousel-indicators`}>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className={`active`} aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className={`carousel-inner w-100 h-100`}>

          {lastOne.slice (2,3).map((elem, index) => {
            return(
              <div key={index} className={`${styles.divCarousel} carousel-item active`}>
            <Link to ={`/detailBlog/${elem.id_post}`}><img src={elem.image} className={`${styles.image} "d-block"`} alt={elem.title}/></Link>
            <div className={`carousel-caption d-none d-md-block`}>
                <h2 className={styles.textCarousel}>"{elem.title}"</h2>
            </div>
            </div>
            )
          })}
          {lastOne.slice (0,2).map((elem, index) => {
            return(
              <div key={index} className={`${styles.divCarousel} carousel-item`}>
            <Link to ={`/detailBlog/${elem.id_post}`}><img src={elem.image} className={`${styles.image} "d-block w-100"`} alt={elem.title}/></Link>
            <div className={`carousel-caption d-none d-md-block`}>
                <h2 className={styles.textCarousel}>"{elem.title}"</h2>
            </div>
            </div>
            )
          })}
        </div>
        <button className={`carousel-control-prev`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className={`carousel-control-prev-icon`} aria-hidden="true"></span>
            <span className={`visually-hidden`}>Previous</span>
        </button>
        <button className={`carousel-control-next`} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className={`carousel-control-next-icon`} aria-hidden="true"></span>
            <span className={`visually-hidden`}>Next</span>
        </button>
        </div>
        <section> 
          <div className={ styles.wrapCards }>
              {allPosts.slice(current * itemsPage, (current * itemsPage) + itemsPage).map((elem) => {
                return (
                    <CardBlog
                      key={elem.id_post}
                      id={elem.id_post}
                      title={elem.title}
                      summary={elem.summary}
                      content={elem.content}
                      image={elem.image}
                      date={elem.date}
                    />
                );
              })}
          </div>
        </section>
    </div>


          <div className={styles.divPag}>

          <button className={`${styles.buttonPage} "page-link"`}   onClick={firstHandler}>First</button>
            <button className={`${styles.buttonPage} "page-link"`} onClick={prevHandler}>Prev</button>
            <div>
            {arrayPages.slice(current - itemsPage < 0 ? 0 : current - itemsPage , current).map(ele => ele < itemsPage ? <button className={`${styles.buttonPage2} "page-link"`} name={ele} onClick={pageHandler} key = {ele}>{ele}</button>: <button className={`${styles.buttonPage2} "page-link"`} name={ele} onClick={pageHandler} key = {ele}>{ele}</button>)}
              {arrayPages.slice(current, current + (itemsPage+1)).map(ele => ele < itemsPage ? <button className={`${styles.buttonPage2} "page-link"`} name={ele} onClick={pageHandler} key = {ele}>{ele}</button>: <button className={`${styles.buttonPage2} "page-link"`} name={ele} onClick={pageHandler} key = {ele}>{ele}</button>)}
            </div>
            <button className={`${styles.buttonPage} "page-link"`} onClick={nextHandler}>Next</button>
            <button className={`${styles.buttonPage} "page-link"`} onClick={lastHandler}>Last</button>
          </div>
          {/* <div className={styles.divAux}></div> */}
          <section>
            <div>
              <Footer ></Footer>
            </div>
          </section>


    </section>
  );
}
