import styles from "./AdminBlog.module.css";
import { getBase64 } from "../../../../assets/helpers/fileTo64";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validate"

import {
  addPost,
  getPostId,
  updatePost,
  deletePost,
} from "../../../../redux/postActions";

const AdminBlog = () => {
  const dispatch = useDispatch();
  const { postDetail } = useSelector((state) => state.post);
  const [errors, setErrors] = useState({});

  const [inputs, setInputs] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
  });
console.log(inputs);
  const [inputsM, setInputsM] = useState({
    id_post: 0,
    title: "",
    summary: "",
    content: "",
    active: null,
  });

  const [inputsD, setInputsD] = useState({
    id_post: 0,
  });
  
  useEffect(() => {
    if (Object.keys(postDetail).length){
      setInputsM({
        ...inputsM,
        title: postDetail.title,
        summary: postDetail.summary,
        content: postDetail.content,
        active: postDetail.active,
      });
    }
    setErrors(validate(inputs));

  },[postDetail, inputs, ])

  const handlerInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const handlerInputsM = (event) => {
    setInputsM({
      ...inputsM,
      [event.target.name]: event.target.value,
    });
  };
  const handlerInputsD = (event) => {
    setInputsD({
      ...inputsM,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmitCreate = (event) => {
    event.preventDefault();
    const numErrors = Object.keys(errors).length;
    if (numErrors === 0){
      dispatch(addPost(inputs));
      window.alert("Post creado con exito");
      setErrors({});
      setInputs({
        title: "",
        summary: "",
        content: "",
        image: "",
      })
    } else {
      window.alert("Completa todos los campos");
    }
  };

  const handlerSubmitModify = (event) => {
    event.preventDefault();
    dispatch(updatePost(inputsM));
  };

  const handlerSubmitDelete = (event) => {
    event.preventDefault();
    dispatch(deletePost(inputsD.id_post));
  };

  const handlerSearch = async (event) => {
    event.preventDefault();
    dispatch(getPostId(inputsM.id_post));
  };

  const handlerFile = async (event) => {
    if (event.target.files[0]){
      let res = await getBase64(event.target.files[0]);
      setInputs({
        ...inputs,
        image: res,
      });
    }
  };

  return (
    <section>
      <div>
        <h1>AdminBlog</h1>
        <p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Crear Post
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            Modificar Post
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample3"
            aria-expanded="false"
            aria-controls="collapseExample3"
          >
            Eliminar Post
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <form onSubmit={handlerSubmitCreate}>
              <div>
                <h3>Crear Post</h3>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Titulo
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="title"
                    onChange={handlerInputs}
                    placeholder="Ingresa el titulo del post"
                  />
                   {errors.title && <p>{errors.title}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Resumen
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    name="summary"
                    onChange={handlerInputs}
                    placeholder="Breve descripción del post"
                  />
                  {errors.summary && <p>{errors.summary}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Texto
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="content"
                    onChange={handlerInputs}
                    placeholder="Texto del post"
                  ></textarea>
                  {errors.content && <p>{errors.content}</p>}
                </div>
                
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Imagen
                </label>
                <div className="col-sm-10">
                <input
                    type="file"
                    className="form-control"
                    id="inputPassword3"
                    name="image"
                    onChange={handlerFile}
                  />
                </div>
                
              </div>

              <button type="submit" className="btn btn-primary">
                Crear
              </button>
            </form>
          </div>
        </div>

        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            <form onSubmit={handlerSubmitModify}>
              <div>
                <h3>Modificar Post</h3>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Id Post
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="id_post"
                    onChange={handlerInputsM}
                  />
                </div>
              </div>
              <button onClick={handlerSearch} className="btn btn-primary">
                Buscar Post
              </button>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Titulo
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="title"
                    value={inputsM.title}
                    onChange={handlerInputsM}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Resumen
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    name="summary"
                    value={inputsM.summary}
                    onChange={handlerInputsM}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Texto
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="content"
                    value={inputsM.content}
                    onChange={handlerInputsM}
                  ></textarea>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Active
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="active"
                    value={inputsM.active}
                    onChange={handlerInputsM}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Modificar
              </button>
            </form>
          </div>
        </div>

        <div className="collapse" id="collapseExample3">
          <div className="card card-body">
            <form onSubmit={handlerSubmitDelete}>
              <div>
                <h3>Eliminar Post</h3>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Id Post
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="id_post"
                    onChange={handlerInputsD}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Eliminar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBlog;
