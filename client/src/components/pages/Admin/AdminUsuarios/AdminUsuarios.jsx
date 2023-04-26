import { getAllUsers, updateUsers, clnUpDt } from "../../../../redux/userActions";
import { useSelector , useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const AdminUsuarios = () => {
    
    const dispatch = useDispatch();
    const {users}= useSelector(state => state.user);
    const {upDtRes} = useSelector(state => state.user);

    const[check, setCheck] = useState({
      id_user:""
    });

    const[inputs, setInputs] = useState({
      id_user:"",
      admin:"",
      active:""
    });

    useEffect (() => {
        dispatch(getAllUsers());

        if (inputs.id_user !== ""){
          dispatch(updateUsers(inputs));
        }

    }, [inputs]);

    const handlerClickAdmin = (event) =>{
      setInputs({
        id_user: event.target.value,
        admin: true
      })
      
      dispatch(clnUpDt());
    };

    const handlerClickUser = (event) =>{
      setInputs({
        id_user: event.target.value,
        admin: false
      })
    };

    const handlerClickActive = (event) =>{
      setInputs({
        id_user: event.target.value,
        active: true
      })
      
    };
    const handlerClickInactive = (event) =>{
      setInputs({
        id_user: event.target.value,
        active: false
      })
    };

    const handlerCheck = (event) => {
      if (event.target.checked) {
        setCheck({
          [event.target.name]: true,
        })
      } else{
        setCheck({
          [event.target.name]: false,
        })
      }
    }

    return(
        <section>
            <div>
                <h1>AdminUsuarios</h1>
            </div>

            <div>
            <table class="table">
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
      <input class="form-check-input" type="checkbox"  name="id_user" value={user.id_user} onChange={handlerCheck} id="flexCheckDefault"></input>
      <th scope="row">{user.id_user}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.admin === true ? "Si" : "No"}</td>
      <td>{user.active === true ? "Activo" : "Inactivo"}</td>

      <td>
        <button type="button" class="btn btn-primary" name="id_user" value={user.id_user} onClick={handlerClickAdmin}>Admin</button>
        <button type="button" class="btn btn-secondary" name="id_user" value={user.id_user} onClick={handlerClickUser}>Usuario</button>
        <button type="button" class="btn btn-success" name="id_user" value={user.id_user} onClick={handlerClickActive}>Activo</button>
        <button type="button" class="btn btn-danger"name="id_user" value={user.id_user} onClick={handlerClickInactive}>Inactivo</button>
      </td>
      
    </tr>
        )
    })}
    
  </tbody>
</table>
            </div>
        </section>
    );
}
export default AdminUsuarios;