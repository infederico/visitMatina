import style from './RedesSociales.module.css';

const RedesSociales = ({enlace,logo,name }) => {
  return (
    <div className={style.cajaredes}>
      <a href={enlace} target="_blank">
        <img className={style.imagen} src={logo} alt={name} />
      </a>
    </div>
  );
};

export default RedesSociales;