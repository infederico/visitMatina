import styles from "./AdminBlog.module.css";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addPost, getPostId, updatePost, deletePost } from "../../../../redux/postActions";

const AdminBlog = () => {

  const {postDetail} = useSelector(state => state.post);

  

  const [inputs, setInputs] = useState({
    title: "",
    summary: "",
    content: ""
  })

  const [inputsM, setInputsM] = useState({
    id_post: 0,
    title: "",
    summary: "",
    content: "",
    active: null
  })

  const [inputsD, setInputsD] = useState({
    id_post: 0,
  })


console.log(inputsD);

  const dispatch = useDispatch();
  
  const handlerInputs = (event) =>{
    setInputs({
      ...inputs,
      [event.target.name] : event.target.value
    })
  }
  const handlerInputsM = (event) =>{
    setInputsM({
      ...inputsM,
      [event.target.name] : event.target.value
    })
  }
  const handlerInputsD = (event) =>{
    setInputsD({
      ...inputsM,
      [event.target.name] : event.target.value
    })
  }

  const handlerSubmitCreate = (event) => {
    event.preventDefault();
      dispatch(addPost(inputs));
  };

  const handlerSubmitModify = (event) => {
    event.preventDefault();
      dispatch(updatePost(inputsM));
  };

  const handlerSubmitDelete = (event) => {
    event.preventDefault();
      dispatch(deletePost(inputsD.id_post));
  };

  const handlerSearch = (event) => {
    event.preventDefault();
    dispatch(getPostId(inputsM.id_post));
  };

    return (
        <section>
            <div>
            <p>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Crear Post
  </button>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
    Modificar Post
  </button>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
    Eliminar Post
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
  <form onSubmit={handlerSubmitCreate}>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Titulo</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputEmail3" name="title" onChange={handlerInputs}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Resumen</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword3" name="summary" onChange={handlerInputs} />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Texto</label>
    <div className="col-sm-10">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="content" onChange={handlerInputs}></textarea>
    </div>
  </div>



  <button type="submit" className="btn btn-primary">Crear</button>
</form>
  </div>
</div>




<div className="collapse" id="collapseExample2">
  <div className="card card-body">
  <form onSubmit={handlerSubmitModify}>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Id Post</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputEmail3" name="id_post" onChange={handlerInputsM}/>
    </div>
  </div>
  <button onClick={handlerSearch} className="btn btn-primary">Buscar Post</button>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Titulo</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputEmail3" name="title"  onChange={handlerInputsM}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Resumen</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword3" name= "summary" onChange={handlerInputsM}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Texto</label>
    <div className="col-sm-10">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="content"  onChange={handlerInputsM}></textarea>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Active</label>
    <div className="col-sm-10">
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="active" onChange={handlerInputsM}></textarea>
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary">Modificar</button>
</form>
  </div>
</div>



<div className="collapse" id="collapseExample3">
  <div className="card card-body">
  <form onSubmit={handlerSubmitDelete}>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Id Post</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputEmail3" name="id_post" onChange={handlerInputsD}/>
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary">Eliminar</button>
</form>
  </div>
</div>



            </div>


      
        </section>
    )
}

export default AdminBlog;