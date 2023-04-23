import { getAllUsers } from "../../../../redux/userActions";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";

const AdminUsuarios = () => {
    
    const dispatch = useDispatch();
    const {users}= useSelector(state => state.user)

    useEffect (() => {
        dispatch(getAllUsers());
    }, []);

    console.log(users);

    return(
        <section>
            <div>
                <h1>AdminUsuarios</h1>
            </div>

            <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Administrador</th>
      <th scope="col">Estado</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => {
        return(
            <tr>
      <th scope="row">{user.id_user}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.admin === true ? "Si" : "No"}</td>
      <td>{user.active === true ? "Activo" : "Inactivo"}</td>
      <td>
        <button type="button" class="btn btn-primary">Admin</button>
        <button type="button" class="btn btn-secondary">Usuario</button>
        <button type="button" class="btn btn-success">Activo</button>
        <button type="button" class="btn btn-danger">Inactivo</button>
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