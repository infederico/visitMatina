import styles from './AdminBlog.module.css';
import { getBase64 } from '../../../../assets/helpers/fileTo64';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardBlog from './CardBlog/CardBlog';
import validate from './validate';
import AlertContact from '../../Contact/AlertContact';

import {
  addPost,
  getAllPostsSF,
  clnPostPost,
} from '../../../../redux/postActions';

import {} from '../../../../redux/userActions';

const AdminBlog = () => {
  const dispatch = useDispatch();
  const { allAllPosts } = useSelector((state) => state.post);
  const { resPostPost } = useSelector((state) => state.post);
  const { resUpPost } = useSelector((state) => state.post);
  const { resDel } = useSelector((state) => state.post);

  const loggedUser = useSelector((state) => state.user.user);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handlerCloseAlert = () => {
    setShowAlert(false);
  };

  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    title: '',
    summary: '',
    content: '',
    image: '',
    id_user: loggedUser.id_user,
  });

  useEffect(() => {
    dispatch(getAllPostsSF());

    //dispatch(getAllPostsSF());

    if (resPostPost !== "") {
      dispatch(clnPostPost());
    }
  }, [resPostPost, resUpPost, resDel]);

  useEffect(() => {
    setErrors(validate(inputs));
  }, [inputs]);

  const handlerInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handlerSubmitCreate = async (event) => {
    event.preventDefault();
    const numErrors = Object.keys(errors).length;
    if (numErrors === 0) {
      const res = await dispatch(addPost(inputs));
      setShowAlert(true);
      setAlertMessage(res.payload);
      setErrors({});
      setInputs({
        ...inputs,
        title: '',
        summary: '',
        content: '',
        image: null,
      });
    } else {
      setShowAlert(true);
      setAlertMessage('Completa todos los campos');
    }
  };

  const handlerFile = async (event) => {
    if (event.target.files[0]) {
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
        <h1 className='display-6 text-left my-2'>Administrar Blog</h1>
        <p>
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseExample'
            aria-expanded='false'
            aria-controls='collapseExample'
          >
            Crear Post
          </button>
          <button
            className='btn btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseExample2'
            aria-expanded='false'
            aria-controls='collapseExample2'
          >
            Modificar Post
          </button>
        </p>
        <div className='collapse show' id='collapseExample'>
          <div className='card card-body'>
            <form onSubmit={handlerSubmitCreate}>
              <div>
                <h3>Crear Post</h3>
              </div>
              <div className='row mb-3'>
                <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
                  Titulo
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='inputEmail3'
                    name='title'
                    value={inputs.title}
                    onChange={handlerInputs}
                    placeholder='Ingresa el titulo del post'
                  />
                  {errors.title && <p>{errors.title}</p>}
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
                  Resumen
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='inputPassword3'
                    name='summary'
                    value={inputs.summary}
                    onChange={handlerInputs}
                    placeholder='Breve descripción del post'
                  />
                  {errors.summary && <p>{errors.summary}</p>}
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
                  Texto
                </label>
                <div className='col-sm-10'>
                  <textarea
                    className='form-control'
                    id='exampleFormControlTextarea1'
                    rows='5'
                    name='content'
                    value={inputs.content}
                    onChange={handlerInputs}
                    placeholder='Texto del post'
                  ></textarea>
                  {errors.content && <p>{errors.content}</p>}
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
                  Imagen
                </label>
                <div className='col-sm-10'>
                  <input
                    type='file'
                    className='form-control'
                    id='inputPassword3'
                    name='image'
                    onChange={handlerFile}
                  />
                </div>
              </div>

              <button type='submit' className='btn btn-primary'>
                Crear
              </button>
              {showAlert && <AlertContact message={alertMessage} show={showAlert} onClose={handlerCloseAlert} />}
            </form>
          </div>
        </div>

        <div className='collapse' id='collapseExample2'>
          <div className='card card-body'>
            <h3>Modificar Post</h3>
          </div>
          <div className={styles.divCardsBlog}>
            {allAllPosts?.map((ele) => {
              return (
                <CardBlog
                  key={ele.id_post}
                  id_post={ele.id_post}
                  title={ele.title}
                  summary={ele.summary}
                  content={ele.content}
                  image={ele.image}
                  date={ele.date}
                  active={ele.active}
                ></CardBlog>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBlog;
