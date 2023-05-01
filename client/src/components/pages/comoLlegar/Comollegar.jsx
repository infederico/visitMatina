import style from './Comollegar.module.css';
import Footer from '../..//common/Footer/Footer';
import {
  sanjosematina1,
  sanjosematina2,
  puertoviejomatina,
} from './descripciones';
import { useState } from 'react';
import mapa from './imgMaps/mapa.png';
import mapa2 from './imgMaps/mapa2.png';
import { arrayRedes } from './arrayRedes';


const Comollegar = () => {
  
  const [state,setState] = useState(true);

  const handleclick = () => {
    if (state === true) {
      setState(false);
    }
    if (state === false) {
      setState(true);
    }
  };

  return (
    <div className={style.pagina}>
      <div className={style.cajacentro}>
        <p className={style.titulo1}>San Jose - Matina</p>
        <div className={style.cajafoto}>
          {state?<p className={style.texto}>Para llegar de San José a Matina, hay tres 
opciones de transporte disponibles:<br></br>

En automóvil o taxi: Si prefiere conducir, puede tomar la autopista Ruta 32
hacia el este desde San José, pasando por Guápiles y llegando a Matina
después de aproximadamente 2 horas de viaje. También puede tomar un taxi
desde San Jose, lo cual puede ser más conveniente si no tiene acceso a un
vehículo propio. <br></br>  En autobus: Los autobuses salen de la 
Terminal de Autobuses del Caribe en
San José.
Hay 3 opciones: <br></br>
1. Tomar el autobús de Matina que lo dejará en el centro de Bataan, o bien
sobre la ruta 32 al frente de Restaurante Sol y Luna.<br></br>
2. Tomar el autobús de San José - Siquirres, y de ahí tomar el de Siquirres –
Limón y pedir parada frente a Restaurante Sol y Luna.<br></br>
3. Tomar el autobús San José – Limón y pedir parada frente a Restaurante
Sol y Luna.<br></br>
El viaje dura aproximadamente 3 horas y hay varios horarios disponibles
durante el día.</p>
    :<p>
    En avión: Si desea llegar a Matina desde San
José en avión, la aerolínea
SANSA   ofrece   vuelos   directos   desde   el   Aeropuerto   Internacional   Juan
Santamaría   en   San   José   hasta   el   Aeropuerto   de   Limón,   que   está   a
aproximadamente 45 minutos en coche de Matina.Una   
vez   que   llegue   al   Aeropuerto   de   Limón,   hay   varias   opciones   de	

transporte disponibles para llegar a Matina, como tomar un taxi o alquilar un
coche en el aeropuerto. También hay servicios de autobuses que salen
desde el centro de Limón.<br></br><br></br>
-Es importante tener en cuenta que los vuelos de SANSA pueden tener
horarios limitados y pueden tener un costo más elevado que otras opciones
de transporte. Sin embargo, si desea ahorrar tiempo y disfrutar de una vista
aérea impresionante de Costa Rica, tomar un vuelo puede ser una buena
opción para llegar a Matina desde San José
    </p>}
          <div className={style.continua} onClick={handleclick}>
            {state?"Continua >>":"<< Atras"}
          </div>
        </div>
        <div className={style.cajatexto}>
          <img className={style.foto} src={mapa} alt='' />
        </div>
        
      </div>
      <div className={style.cajacentro}>
        <p className={style.titulo1}>Puerto Viejo - Matina</p>
        <div className={style.cajafoto}>
          <p >Para llegar desde Puerto Viejo de Limón a Matina, hay dos opciones de transporte
disponibles:<br></br><br></br>
En automóvil o taxi: Si prefiere conducir, puede tomar la carretera 36 hacia el
norte desde Puerto Viejo, pasando por Limón, y llegando a Matina después
de aproximadamente 2 horas de viaje. También puede tomar un taxi desde
Puerto Viejo, lo cual puede ser más conveniente si no tiene acceso a un
vehículo propio.<br></br>
En autobús: Hay varias compañías de autobuses que ofrecen servicio desde Puerto
Viejo a Matina. Los autobuses salen de la estación de autobuses de MEPE de Puerto
Viejo.<br></br>
1. Puede tomar el autobús Puerto Viejo - San José y pedir parada frente a
Restaurante Sol y Luna. <br></br>
2. Puede tomar el autobús Puerto Viejo – Limón. Una vez en Limón, en la
Terminal del Caribe tomar autobús Limón – Siquirres. <br></br>
3. El viaje dura aproximadamente 3 horas y hay varios horarios disponibles
durante el día.</p>
          
          {/* <div className={style.continua} onClick={handleclick} >continua...</div> */}
        </div>
        <div className={style.cajatexto}>
          <img className={style.foto} src={mapa2} alt='' />
        </div>
      </div>
      <div className={style.mapaRes}>
          <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            fontSize:"50px",
            alignItems:"center",
            marginBottom:"30px",
            color:""}}>Mapas de lugares de interes</div>
          <iframe className={style.mapRestaurante} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.317678671051!2d-83.37255128949795!3d10.073034989994548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa73bb0f6f6238f%3A0xdd0f2c4333c75e49!2sRestaurante%20Sol%20y%20Luna!5e0!3m2!1ses-419!2sco!4v1682896838376!5m2!1ses-419!2sco"
          width="500"
          height="350"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31413.457088417366!2d-83.2724448!3d10.2064475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa741df32644617%3A0xd07c0618b180f0ea!2sAventuras%20del%20Caribe!5e0!3m2!1ses-419!2sco!4v1682897142514!5m2!1ses-419!2sco"
          width="500"
          height="350"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.310776368818!2d-83.37274108949799!3d10.073601689994014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa73b56675fe9a3%3A0xc5fc3669c08fce7b!2sHospedaje%20Claro%20de%20Luna!5e0!3m2!1ses-419!2sco!4v1682898232828!5m2!1ses-419!2sco" 
          width="500" 
          height="350" 
          style={{ border: "0",marginTop:"20px" }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          />
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82810.31783912817!2d-83.37121319039366!3d10.08472226967239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa73c4d25e1941b%3A0x4330e9167e94655d!2sLim%C3%B3n%2C%20Matina%2C%20Costa%20Rica!5e0!3m2!1ses-419!2sco!4v1682898942824!5m2!1ses-419!2sco" 
          width="500" 
          height="350" 
          style={{ border: 0,marginTop:"20px" }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Limón, Matina, Costa Rica"
          ></iframe>
        </div>
      
      <Footer socialmedia={arrayRedes} />
    </div>
  );
};

export default Comollegar;
