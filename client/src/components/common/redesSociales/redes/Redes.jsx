import RedesSociales from '../RedesSociales';
import style from './Redes.module.css';



//llega el array de redes sociales (socialmedia) por props, desde cada componente (establecimiento-shops).

const Redes = ({socialmedia}) => {
    return (
      <div className={style.boxSocialMedia}>
        {socialmedia?.map(({logo, name, enlace, id }) => (
          <RedesSociales key={id} logo={logo} enlace={enlace} name={name} />
        ))}
      </div>
    )
  }
export default Redes;