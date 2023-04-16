import styles from "./Blog.module.css";
import CardBlog from "../../common/CardBlog/CardBlog";
import { useEffect } from "react";

export default function Blog() {
  const apiRes = require("./mock_posts.json");

  useEffect(() => {
    console.log(apiRes.response);
  }, []);

  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div className={`${styles.divCarousel} carousel-item active`}>
            <img src={apiRes.response[1].image} className={`${styles.image} "d-block w-100"`} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h2 className={styles.textCarousel}>"{apiRes.response[1].name}"</h2>
            </div>
            </div>
            <div className={`${styles.divCarousel} carousel-item`}>
            <img src={apiRes.response[2].image} className={`${styles.image} "d-block w-100"`} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h2 className={styles.textCarousel}>"{apiRes.response[2].name}"</h2>
            </div>
            </div>
            <div className={`${styles.divCarousel} carousel-item`}>
            <img src={apiRes.response[0].image} className={`${styles.image} "d-block w-100"`} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h2 className={styles.textCarousel}>"{apiRes.response[0].name}"</h2>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

      <div className={styles.divCardsBlog}>
          {apiRes.response.map((elem) => {
            return (
              <div key={elem.id}>
                <CardBlog
                  id={elem.id}
                  name={elem.name}
                  content={elem.content}
                  image={elem.image}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
