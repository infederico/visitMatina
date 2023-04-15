import { Link } from "react-router-dom";

const CardBlog = (props) => {
  return (
    <div class="card mb-3" style={{ width: "540px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={props.image} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.content}</p>
            <a href="#" class="btn btn-primary">
              Leer mas ...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
