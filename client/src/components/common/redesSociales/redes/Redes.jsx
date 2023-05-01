import RedesSociales from '../RedesSociales';
import style from './Redes.module.css';
import { useSelector } from 'react-redux';




//llega el array de redes sociales (socialmedia) por props, desde cada componente (establecimiento-shops).

const Redes = () => {
  const facebook = "https://icongr.am/entypo/facebook.svg?size=16&color=currentColor"
  const instagram = "https://icongr.am/entypo/instagram.svg?size=16&color=currentColor"
  const twitter = "https://icongr.am/entypo/twitter-with-circle.svg?size=16&color=currentColor"
  const youtube = "https://icongr.am/entypo/youtube.svg?size=16&color=currentColor"



  const shopData = useSelector((state) => state.shops.shopData);

    return (
/*       <div className={style.boxSocialMedia}>
        {socialmedia?.map(({logo, name, enlace, id }) => (
          <RedesSociales key={id} logo={logo} enlace={enlace} name={name} />
        ))}
      </div>
       */
      <div className={style.boxSocialMedia}>
        {shopData.facebook &&  <RedesSociales key={facebook} logo={facebook} enlace={shopData.facebook} name="facebook"/>}  
        {shopData.instagram &&  <RedesSociales key={instagram} logo={instagram} enlace={shopData.instagram}  name="instagram"/>}  
        {shopData.twitter &&  <RedesSociales key={twitter} logo={twitter} enlace={shopData.twitter} name="twitter"/>}  
        {shopData.youtube &&  <RedesSociales key={youtube} logo={youtube} enlace={shopData.youtube} name="youtube"/>}  
      </div>
    )
  }
export default Redes;