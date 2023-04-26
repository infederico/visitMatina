import { useState, useEffect } from "react";
import { getBase64 } from "../../../../assets/helpers/fileTo64";
import { useSelector, useDispatch } from "react-redux";
import validate from "./validate"
import { postShop, clnResPost } from "../../../../redux/shopActions";

const AdminShop = () => {

    const dispatch = useDispatch();
    const {resCrateShop} = useSelector(state => state.shops)

    const [errors, setErrors] = useState({});
    const[inputs, setInputs] = useState({
        name:"",
        summary:"",
        path:"",
        email:"",
        image:"",
        twitter:"",
        instagram:"",
        facebook:"",
        whatsapp:"",
        youtube:"",
        location:"",
      });

      console.log(inputs);

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
        )
      };

      const handlerSubmitCreate = (event) => {
        event.preventDefault();
        const numErrors = Object.keys(errors).length;
        if (numErrors === 0){
         dispatch(postShop(inputs));
         setErrors({});
         setInputs({
          ...inputs,
          name:"",
        summary:"",
        path:"",
        email:"",
        image:"",
        twitter:"",
        instagram:"",
        facebook:"",
        whatsapp:"",
        youtube:"",
        location:"",
      })
    } else {
      window.alert("Completa todos los campos");
    }
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

      useEffect(() => {
        setErrors(validate(inputs));
        
      }, [inputs]);

/*       useEffect(() => {

        if (resCrateShop !== ""){
            dispatch(clnResPost);
        }

      }, [resCrateShop]) */
    

    return(
        <section>
            <div>
                <h1>Admin Shops</h1>
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
        <div className="collapse" id="collapseExample">
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
            </form>
          </div>
        </div>


        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
          <h3>Modificar Shop</h3>
          </div>
        </div>

       
        
      </div>


        </section>
    )
}

export default AdminShop;





/* import { getAllUsers, updateUsers, clnUpDt } from "../../../../redux/userActions";
import { useSelector , useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const AdminUsuarios = () => {
    
    const dispatch = useDispatch();
    const {users}= useSelector(state => state.user);
    const {upDtRes} = useSelector(state => state.user);

    

    const filterUser = users.filter(user => user.id_user === Number(check.id_user));

    const[inputs, setInputs] = useState({
      id_user: 0,
      admin:null,
      active:null
    });

    useEffect (() => {
        dispatch(getAllUsers());

        if (upDtRes !== ""){
          dispatch(clnUpDt());
        }

    }, [upDtRes]);

    console.log(inputs)

    const handlerCheckAdmin = (event) =>{
      console.log(filterUser[0].id_user)
      if (event.target.checked) {
        setInputs({
          ...inputs,
          [event.target.name]: event.target.value,
          active: filterUser[0].active.toString(),
          id_user: Number(filterUser[0]?.id_user)
        })
      } else{
        setInputs({
          ...inputs,
          [event.target.name]: filterUser[0].admin.toString(),
          id_user: Number(filterUser[0]?.id_user)
        })
      }
    };

    const handlerCheckActive = (event) =>{

      if (event.target.checked) {
        setInputs({
          ...inputs,
          [event.target.name]: event.target.value,
          admin: filterUser[0].admin.toString(),
          id_user: Number(filterUser[0]?.id_user)
        })
      } else{
        setInputs({
          ...inputs,
          [event.target.name]: filterUser[0].active.toString(),
          id_user: Number(filterUser[0]?.id_user)
        })
      }
    };


    const handlerCheck = (event) => {
      if (event.target.checked) {
        setCheck({
          ...check,
          [event.target.name]: event.target.value
        })
      } else{
        setCheck({
          ...check,
          [event.target.name]: ""
        })
        setInputs({
          id_user: 0,
      admin:null,
      active:null
        })
      }
    }

    const handlerUpdate = () => {
      dispatch(updateUsers(inputs));
      setCheck({
        id_user: null,
        hand: false
      })
    }

    return(
        <section>
            <div>
                <h1>AdminUsuarios</h1>
            </div>


          
    {filterUser.map(user => {
        return(  
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Administrador</th>
      <th scope="col">Estado</th>
      <th scope="col">Admin</th>
      <th scope="col">Usuario</th>
      <th scope="col">Activar</th>
      <th scope="col">Inactivar</th>
      <th></th>
      
      <th></th>
    </tr>
  </thead>
  <tbody>
            <tr>
      <th scope="row">{user.id_user}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.admin === true ? "Si" : "No"}</td>
      <td>{user.active === true ? "Activo" : "Inactivo"}</td>
      <td><input className="form-check-input" type="checkbox"  name="admin" value="true" onChange={handlerCheckAdmin} id="flexCheckDefault"></input></td>
      <td><input className="form-check-input" type="checkbox"  name="admin" value="false" onChange={handlerCheckAdmin} id="flexCheckDefault"></input></td>
      <td><input className="form-check-input" type="checkbox"  name="active" value="true" onChange={handlerCheckActive} id="flexCheckDefault"></input></td>
      <td><input className="form-check-input" type="checkbox"  name="active" value="false" onChange={handlerCheckActive} id="flexCheckDefault"></input></td>
      <td>
        <button type="button" className="btn btn-primary" name="id_user" value={user.id_user} onClick={handlerUpdate}>Modificar Usuario</button>
      </td>
      
    </tr>
          </tbody>
</table>
            </div>)
    })}
    










            <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Administrador</th>
      <th scope="col">Estado</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => {
        return(
            <tr>
      <input className="form-check-input" type="checkbox"  name="id_user" value={user.id_user} onChange={handlerCheck} id="flexCheckDefault" checked={check.hand}></input>
      <th scope="row">{user.id_user}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.admin === true ? "Si" : "No"}</td>
      <td>{user.active === true ? "Activo" : "Inactivo"}</td>
      
    </tr>
        )
    })}
    
  </tbody>
</table>
            </div>
        </section>
    );
}
export default AdminUsuarios; */