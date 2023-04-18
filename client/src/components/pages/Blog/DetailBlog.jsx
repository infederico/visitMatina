import styles from "./DetailBlog.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CardBlogDetail from "../../common/CardBlogDetail/CardBlogDetail";

const DetailBlog = () => {
  const apiRes = require("./mock_posts.json");
  const { id } = useParams();
  const post = apiRes.response.filter((elem) => elem.id === id);

  useEffect(() => {}, []);

  return (
    <section>
    <div className={styles.divSection}>
      <CardBlogDetail
        name={post[0].name}
        image={post[0].image}
        content={post[0].content}
        date={post[0].date}
      />
    </div>
    </section>
  );
};
export default DetailBlog;
