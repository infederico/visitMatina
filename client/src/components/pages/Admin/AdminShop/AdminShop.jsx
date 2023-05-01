import styles from "./AdminShop.module.css";
import { useState, useEffect } from "react";
import { getBase64 } from "../../../../assets/helpers/fileTo64";
import { useSelector, useDispatch } from "react-redux";
import validate from "./validate";
import validateM from "./validateM";
import { getFullShops, postShop, deleteShop, clnDel, updateShop, clnUpdt, clnPost } from "../../../../redux/shopActions";
import AlertContact from "../../Contact/AlertContact";

const AdminShop = () => {
  const dispatch = useDispatch();
  const { shops } = useSelector((state) => state.shops);
  
  const { resCrateShop } = useSelector((state => state.shops));
  const { resDelShop } = useSelector((state => state.shops));
  const { resUpdateShop } = useSelector((state) => state.shops)

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handlerCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    dispatch(getFullShops());

    if (resCrateShop !== ""){
      dispatch(clnPost());
    }

    if (resDelShop !== ""){
      dispatch(clnDel());
    }
    if (resUpdateShop !== ""){
      dispatch(clnUpdt());
    }
  }, [resDelShop, resUpdateShop, resCrateShop]);



  const [check, setCheck] = useState({
    id_shop: null,
    hand: null,
  });

  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    name: "",
    summary: "",
    path: "",
    email: "",
    image: "",
    twitter: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
    youtube: "",
    location: "",
  });

  const [inputsM, setInputsM] = useState({
    id_shop: 0,
    name: "",
    summary: "",
    path: "",
    email: "",
    image: "",
    twitter: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
    youtube: "",
    location: "",
    active:  null,
  });
 
  const handlerCheck = (event) => {
    if (event.target.checked) {
      const filterShops = shops.filter(shop => shop.id_shop === Number(event.target.value))
      setCheck({
        ...check,
        [event.target.name]: event.target.value
      })
      setInputsM({
        ...inputsM,
      id_shop: filterShops[0]?.id_shop,
      name: filterShops[0]?.name,
      summary: filterShops[0]?.summary,
      path: filterShops[0]?.path,
      email: filterShops[0]?.email,
      image: filterShops[0]?.image,
      twitter: filterShops[0]?.twitter,
      instagram: filterShops[0]?.instagram,
      facebook: filterShops[0]?.facebook,
      whatsapp: filterShops[0]?.whatsapp,
      youtube: filterShops[0]?.youtube,
      location: filterShops[0]?.location,
      active: filterShops[0]?.active,
    })

    } else{
      setCheck({
        ...check,
        [event.target.name]: ""
      })
      setInputsM({
        id_shop: 0,
      })
    }
  }

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

  const handlerInputsM = (event) => {
    setInputsM({
      ...inputsM,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validateM({
        ...inputsM,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handlerSubmitCreate = async (event) => {
    event.preventDefault();
    const numErrors = Object.keys(errors).length;
    if (numErrors === 0) {
      const respuesta= await dispatch(postShop(inputs));
      setAlertMessage(respuesta.payload);
      setShowAlert(true);
      setErrors({});
      setInputs({
        ...inputs,
        name: "",
        summary: "",
        path: "",
        email: "",
        image: "",
        twitter: "",
        instagram: "",
        facebook: "",
        whatsapp: "",
        youtube: "",
        location: "",
      });
    } else {
      setShowAlert(true);
      setAlertMessage("Completa todos los campos");
    }
  };


  const handlerSubmitUpdate = async (event) => {
    event.preventDefault();
    const numErrors = Object.keys(errors).length;
    if (numErrors === 0) {
      const res = await dispatch(updateShop(inputsM));
      setAlertMessage(res.payload);
      setShowAlert(true);
      setErrors({});
      setInputs({
        ...inputs,
        id_shop: 0,
        name: "",
        summary: "",
        path: "",
        email: "",
        image: "",
        twitter: "",
        instagram: "",
        facebook: "",
        whatsapp: "",
        youtube: "",
        location: "",
      });
      setCheck({
        id_shop: null,
        hand: false
      })
    } else {
      setShowAlert(true);
      setAlertMessage("Completa todos los campos");
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

  const handlerFileM = async (event) => {
    if (event.target.files[0]) {
      let res = await getBase64(event.target.files[0]);
      setInputsM({
        ...inputsM,
        image: res,
      });
    }
  };

  const handlerDelete = async (event) => {
    const res = await dispatch(deleteShop(event.target.value));
    setAlertMessage(res.payload);
    setShowAlert(true);
  }

  useEffect(() => {
    setErrors(validate(inputs));
  }, [inputs]);


  return (
    <section>
      <div>
        <h1 className='display-6 text-left my-2'>Administrar Emprendimientos</h1>
        <p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Crear Shop
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            Modificar Shop
          </button>
        </p>
        <div className="collapse show" id="collapseExample">
          <div className="card card-body">
            <form onSubmit={handlerSubmitCreate}>
              <div>
                <h3>Crear Shop</h3>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Nombre
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="name"
                    value={inputs.name}
                    onChange={handlerInputs}
                    placeholder="Ingresa el nombre"
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Resumen
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="summary"
                    value={inputs.summary}
                    onChange={handlerInputs}
                    placeholder="Texto del shop"
                  ></textarea>
                  {errors.summary && <p>{errors.summary}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Path
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="path"
                    value={inputs.path}
                    onChange={handlerInputs}
                    placeholder="Ingresa el path"
                  />
                  {errors.path && <p>{errors.path}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="email"
                    value={inputs.email}
                    onChange={handlerInputs}
                    placeholder="Ingresa la dirección de email"
                  />
                  {errors.email && <p>{errors.email}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Twitter
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="twitter"
                    value={inputs.twitter}
                    onChange={handlerInputs}
                    placeholder="Ingresa la dirección de twitter"
                  />
                  {errors.twitter && <p>{errors.twitter}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Instagram
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="instagram"
                    value={inputs.instagram}
                    onChange={handlerInputs}
                    placeholder="Ingresa la dirección de instagram"
                  />
                  {errors.instagram && <p>{errors.instagram}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Facebook
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="facebook"
                    value={inputs.facebook}
                    onChange={handlerInputs}
                    placeholder="Ingresa la dirección de facebook"
                  />
                  {errors.facebook && <p>{errors.facebook}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Whatsapp
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="whatsapp"
                    value={inputs.whatsapp}
                    onChange={handlerInputs}
                    placeholder="Ingresa telefono de contacto"
                  />
                  {errors.whatsapp && <p>{errors.whatsapp}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  YouTube
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="youtube"
                    value={inputs.youtube}
                    onChange={handlerInputs}
                    placeholder="Ingresa la dirección de youtube"
                  />
                  {errors.youtube && <p>{errors.youtube}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Localización
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="location"
                    value={inputs.location}
                    onChange={handlerInputs}
                    placeholder="Ingresa la localización"
                  />
                  {errors.location && <p>{errors.location}</p>}
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
              {showAlert && <AlertContact message={alertMessage} show={showAlert} onClose={handlerCloseAlert} />}
            </form>
          </div>
        </div>

        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            <h3>Modificar Shop</h3>
          </div>



          { check.id_shop > 0 ?
          <div className="card card-body">
            <form onSubmit={handlerSubmitUpdate}>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Nombre
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="name"
                    value={inputsM.name}
                    onChange={handlerInputsM}
                    placeholder="Ingresa el nombre"
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Resumen
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="summary"
                    value={inputsM.summary}
                    onChange={handlerInputsM}
                    placeholder="Texto del shop"
                  ></textarea>
                  {errors.summary && <p>{errors.summary}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Path
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="path"
                    value={inputsM.path}
                    onChange={handlerInputsM}
                    placeholder="Ingresa el path"
                  />
                  {errors.path && <p>{errors.path}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="email"
                    value={inputsM.email}
                    onChange={handlerInputsM}
                    placeholder="Ingresa la dirección de email"
                  />
                  {errors.email && <p>{errors.email}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Twitter
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="twitter"
                    value={inputsM.twitter}
                    onChange={handlerInputsM}
                    placeholder="Ingresa la dirección de twitter"
                  />
                  {errors.twitter && <p>{errors.twitter}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Instagram
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="instagram"
                    value={inputsM.instagram}
                    onChange={handlerInputsM}
                    placeholder="Ingresa la dirección de instagram"
                  />
                  {errors.instagram && <p>{errors.instagram}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Facebook
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="facebook"
                    value={inputsM.facebook}
                    onChange={handlerInputsM}
                    placeholder="Ingresa la dirección de facebook"
                  />
                  {errors.facebook && <p>{errors.facebook}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Whatsapp
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="whatsapp"
                    value={inputsM.whatsapp}
                    onChange={handlerInputsM}
                    placeholder="Ingresa telefono de contacto"
                  />
                  {errors.whatsapp && <p>{errors.whatsapp}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  YouTube
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="youtube"
                    value={inputsM.youtube}
                    onChange={handlerInputsM}
                    placeholder="Ingresa la dirección de youtube"
                  />
                  {errors.youtube && <p>{errors.youtube}</p>}
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Localización
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    name="location"
                    value={inputsM.location}
                    onChange={handlerInputsM}
                    placeholder="Ingresa la localización"
                  />
                  {errors.location && <p>{errors.location}</p>}
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
                    onChange={handlerFileM}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Modificar
              </button>
            </form>
          </div>
        :<div></div>}







          <div>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Path</th>
                  <th scope="col">Estado</th>
                  <th></th>

                  <th></th>
                </tr>
              </thead>
              {shops.map((shop) => {
                return (
                  <tbody>
                    <tr>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="id_shop"
                        value={shop.id_shop}
                        onChange={handlerCheck}
                        id="flexCheckDefault"
                        checked={check.hand}
                      ></input>
                      <th scope="row">{shop.id_shop}</th>
                      <td>{shop.name}</td>
                      <td>{shop.path}</td>
                      <td>
                        <p
                          className={
                            shop.active === true
                              ? styles.txtActive
                              : styles.txtInactive
                          }
                        >
                          {shop.active === true ? "Activo" : "Inactivo"}
                        </p>
                      </td>
                      <td>{shop.active === false && <button className={`btn btn-primary`} name={shop.name} value={shop.id_shop} onClick={handlerDelete}>
              Activar
            </button>}
            {shop.active === true && <button className={`btn btn-primary`} name={shop.name} value={shop.id_shop} onClick={handlerDelete}>
              Eliminar
            </button>}
            </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminShop;
