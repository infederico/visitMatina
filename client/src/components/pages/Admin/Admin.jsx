import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminAventuras from './AdminAventuras/AdminAventuras';
import AdminArtesanias from './AdminArtesanias/AdminArtesanias';
import AdminBlog from './AdminBlog/AdminBlog';
import AdminHospedaje from './AdminHospedaje/AdminHospedaje';
import AdminHospedajeMandira from './AdminMandira/AdminHospedajeMandira';
import AdminParcela from './AdminParcela/AdminParcela';
import AdminRestaurant from './AdminRestaurant/AdminRestaurant';
import AdminShop from './AdminShop/AdminShop';
import AdminUsuarios from './AdminUsuarios/AdminUsuarios';
import { useSelector } from 'react-redux';

const Admin = () => {
  const loggedUser = useSelector((state) => state.user.user);
  const [option, setOption] = useState({
    aventuras: false,
    artesanias: false,
    blog: false,
    hospedaje: false,
    hospedajeMandira: false,
    parcela: false,
    restaurant: false,
    shops: false,
    usuarios: true,
  });

  const handlerButton = (event) => {
    switch ([event.target.name]) {
      case "aventuras":
        setOption({
          aventuras: true,
          artesanias: false,
    blog: false,
    hospedaje: false,
    hospedajeMandira: false,
    parcela: false,
    restaurant: false,
    shops: false,
    usuarios: false,
        })
        break;
        case "artesanias":
          setOption({
            aventuras: false,
            artesanias: true,
      blog: false,
      hospedaje: false,
      hospedajeMandira: false,
      parcela: false,
      restaurant: false,
      shops: false,
      usuarios: false,
          })
          break;
        case "blog":
        setOption({
          aventuras: false,
          artesanias: false,
    blog: true,
    hospedaje: false,
    hospedajeMandira: false,
    parcela: false,
    restaurant: false,
    shops: false,
    usuarios: false,
        })
        break;
        case "hospedaje":
        setOption({
          aventuras: false,
          artesanias: false,
    blog: false,
    hospedaje: true,
    hospedajeMandira: false,
    parcela: false,
    restaurant: false,
    shops: false,
    usuarios: false,
        })
        break;
        case "hospedajeMandira":
        setOption({
          aventuras: false,
          artesanias: false,
    blog: false,
    hospedaje: false,
    hospedajeMandira: true,
    parcela: false,
    restaurant: false,
    shops: false,
    usuarios: false,
        })
        break;
        case "parcela":
        setOption({
          aventuras: false,
          artesanias: false,
    blog: false,
    hospedaje: false,
    hospedajeMandira: false,
    parcela: true,
    restaurant: false,
    shops: false,
    usuarios: false,
        })
        break;
        case "restaurant":
        setOption({
          aventuras: false,
          artesanias: false,
    blog: false,
    hospedaje: false,
    hospedajeMandira: false,
    parcela: false,
    restaurant: true,
    shops: false,
    usuarios: false,
        })
        break;
        case "shops":
        setOption({
          aventuras: false,
          artesanias: false,
    blog: false,
    hospedaje: false,
    hospedajeMandira: false,
    parcela: false,
    restaurant: false,
    shops: true,
    usuarios: false,
        })
        break;
        case "usuarios":
        setOption({
          aventuras: false,
          artesanias: false,
    blog: false,
    hospedaje: false,
    hospedajeMandira: false,
    parcela: false,
    restaurant: false,
    shops: false,
    usuarios: true,
        })
        break;
    
      default:
        break;
    }



    setOption({
      [event.target.name]: true,
    });
  };

  return (
    <div>
      {loggedUser.admin ? (
        <section>
          <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light '>
              <div className='container '>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false' 
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div
                  className='collapse navbar-collapse nav nav-tabs'
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav ms-auto nav nav-item '>
                    <NavLink
                      className='nav-link active aria-current="page"'
                      name='usuarios'
                      onClick={handlerButton}
                    >
                      Usuarios
                    </NavLink>
                    <NavLink
                      className='nav-link'
                      name='shops'
                      onClick={handlerButton}
                    >
                      Emprendimientos
                    </NavLink>
                    <NavLink
                      className='nav-link'
                      name='aventuras'
                      onClick={handlerButton}
                    >
                      Aventuras
                    </NavLink>
                    <NavLink
                      className='nav-link'
                      name='artesanias'
                      onClick={handlerButton}
                    >
                      Artesanías
                    </NavLink>
                    <NavLink
                      className='nav-link'
                      name='hospedaje'
                      onClick={handlerButton}
                    >
                      Hospedaje
                    </NavLink>
                    <NavLink
                      className='nav-link'
                      name='hospedajeMandira'
                      onClick={handlerButton}
                    >
                      Mandira
                    </NavLink>
                    <NavLink
                      className='nav-link'
                      name='parcela'
                      onClick={handlerButton}
                    >
                      Parcela
                    </NavLink>
                    <NavLink
                      className='nav-link'
                      name='restaurant'
                      onClick={handlerButton}
                    >
                      Restaurant
                    </NavLink>
                    <NavLink
                      className='nav-link'
                      name='blog'
                      onClick={handlerButton}
                    >
                      Blog
                    </NavLink>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div>
            <h1 className='display-6 text-center my-4'>Panel Administrador</h1>
          </div>
          <section>
            {option.blog === true ? (
              <div>
                <AdminBlog></AdminBlog>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <section>
            {option.usuarios === true ? (
              <div>
                <AdminUsuarios></AdminUsuarios>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <section>
            {option.shops === true ? (
              <div>
                <AdminShop></AdminShop>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <section>
            {option.aventuras === true ? (
              <div>
                <AdminAventuras></AdminAventuras>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <section>
            {option.artesanias === true ? (
              <div>
                <AdminArtesanias></AdminArtesanias>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <section>
            {option.hospedaje === true ? (
              <div>
                <AdminHospedaje  shopId={8}></AdminHospedaje>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <section>
            {option.restaurant === true ? (
              <div>
                <AdminRestaurant shopId={7}></AdminRestaurant>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <section>
            {option.parcela === true ? (
              <div>
                <AdminParcela></AdminParcela>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <section>
            {option.hospedajeMandira === true ? (
              <div>
                <AdminHospedajeMandira></AdminHospedajeMandira>
              </div>
            ) : (
              <div></div>
            )}
          </section>
        </section>
      ) : null}
    </div>
  );
};

export default Admin;
