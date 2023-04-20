import styles from "./Blog.module.css";
import CardBlog from "../../common/CardBlog/CardBlog";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../../redux/postActions";

import AdminBlog from "../Admin/AdminBlog/AdminBlog";

export default function Blog() {
  const apiRes = require("./mock_posts.json");

  const dispatch = useDispatch();
  const {allPosts} = useSelector(state => state.post);

  useEffect(() => {
    dispatch (getPosts());
  }, []);

  return (
    <section>
    <div className={styles.divMain}>
        <div id="carouselExampleCaptions" className={`carousel slide`} data-bs-ride="carousel">
        <div className={`carousel-indicators`}>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className={`active`} aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className={`carousel-inner`}>
            <div className={`${styles.divCarousel} carousel-item active`}>
            <img src={apiRes.response[1].image} className={`${styles.image} "d-block w-100"`} alt="..."/>
            <div className={`carousel-caption d-none d-md-block`}>
                <h2 className={styles.textCarousel}>"{apiRes.response[1].name}"</h2>
            </div>
            </div>
            <div className={`${styles.divCarousel} carousel-item`}>
            <img src={apiRes.response[2].image} className={`${styles.image} "d-block w-100"`} alt="..."/>
            <div className={`carousel-caption d-none d-md-block`}>
                <h2 className={styles.textCarousel}>"{apiRes.response[2].name}"</h2>
            </div>
            </div>
            <div className={`${styles.divCarousel} carousel-item`}>
            <img src={apiRes.response[0].image} className={`${styles.image} "d-block w-100"`} alt="..."/>
            <div className={`carousel-caption d-none d-md-block`}>
                <h2 className={styles.textCarousel}>"{apiRes.response[0].name}"</h2>
            </div>
            </div>
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
      <div className={styles.divCardsBlog}>
          {allPosts.map((elem) => {
            return (
              <div key={elem.id_post}>
                <CardBlog
                  id={elem.id_post}
                  title={elem.title}
                  summary={elem.summary}
                  content={elem.content}
                  date={elem.date}
                />
              </div>
            );
          })}
      </div>
      </section>
    </div>
    <section>
          <AdminBlog></AdminBlog>
    </section>
    </section>
  );
}
