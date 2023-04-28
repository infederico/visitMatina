import styles from "./QueHacer.module.css";
import Footer from "../../common/Footer/Footer"
import { arrayRedes } from "./arrayRedes";
import { Link } from "react-router-dom";
import locationLogo from "../../../assets/images/locationLogo.png";
import { caminatas, kayaking, camping1, camping2, rioZent, canales, cacao, caprina } from "./data";
import nl2br from 'react-nl2br';
const QueHacer = () => {
    return(
        <div>
            <div>
                <section className={styles.sec}>
                  <img className={styles.imageFull} src ="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682627194/QueHacer/riozent_inecow.jpg"></img>
                  <h5 className={styles.nombre}>Actividades que no te puedes perder</h5>
                </section>
            </div>
            
            <div className={styles.divMain}>
                <section>
                <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className= {`${styles.colorBackgroundRow} accordion-item`}>
    <h2 className="accordion-header" id="flush-headingOne">
      <button className={`${styles.color} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Caminatas, senderismo y avistamiento de aves
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
     
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682627194/QueHacer/pozapuma_cvne7l.jpg" className="img-fluid rounded-start" alt="..."/>
      <p className="card-text"><small className="text-muted">Poza del puma, quebrada Surubre, Parque Nacional Barbilla, Sector Matina.</small></p>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className={`${styles.text} card-text`}>{nl2br(caminatas)}</p>
      </div>
    </div>
  </div>

      </div>
    </div>
  </div>
  <div className= {`${styles.colorBackgroundRow} accordion-item`}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className={`${styles.color} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Kayaking en los canales
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">


      <div className="row g-0">
    <div className="col-md-4">
      <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682627194/QueHacer/kayak_wszi5a.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className={`${styles.text} card-text`}>{nl2br(kayaking)}</p>
      </div>
    </div>
  </div>


</div>
    </div>
  </div>
  <div className= {`${styles.colorBackgroundRow} accordion-item`}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button className={`${styles.color} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Camping
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">

      <div className="row g-0">
    <div className="col-md-4">
      <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682627194/QueHacer/claroluna_t3f7ho.jpg" className="img-fluid rounded-start" alt="..."/>
      <p className="card-text"><small className="text-muted">Hospedaje Claro de Luna.</small></p>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className={`${styles.text} card-text`}>{nl2br(camping1)}</p>
      </div>
      <div className={styles.divLocation}>
        <Link to ={`/hopedajeClaroDeLuna`} className={styles.link}><img className={styles.image} src={locationLogo}></img><button className={`btn btn-primary`}>
              Visitanos
            </button></Link>
        </div>
    </div>
  </div>
<br />
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682627194/QueHacer/jardinmandira_dknan9.jpg" className="img-fluid rounded-start" alt="..."/>
      <p className="card-text"><small className="text-muted">Jardín Mandira.</small></p>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className={`${styles.text} card-text`}>{nl2br(camping2)}</p>
      </div>
      <div className={styles.divLocation}>
        <Link to ={`/fincaMandira`} className={styles.link}><img className={styles.image} src={locationLogo}></img><button className={`btn btn-primary`}>
              Visitanos
            </button></Link>
        </div>
    </div>
  </div>


 </div>
    </div>
  </div>
  <div className= {`${styles.colorBackgroundRow} accordion-item`}>
    <h2 className="accordion-header" id="flush-headingFour">
      <button className={`${styles.color} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Tubbing en Río Zent
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">


      <div className="row g-0">
    <div className="col-md-4">
      <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682627194/QueHacer/riozent_inecow.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className={`${styles.text} card-text`}>{nl2br(rioZent)}</p>
        <div className={styles.divLocation}>
        <Link to ={`/fincaMandira`} className={styles.link}><img className={styles.image} src={locationLogo}></img><button className={`btn btn-primary`}>
              Visitanos
            </button></Link>
        </div>
      </div>
    </div>
  </div>

        
      </div>
    </div>
  </div>
  <div className= {`${styles.colorBackgroundRow} accordion-item`}>
    <h2 className="accordion-header" id="flush-headingFive">
      <button className={`${styles.color} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      Tour por los canales
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">

    <div className={`${styles.divFullCanales} col-md-8`}>
      <div className="card-body">
        <p className={`${styles.text} card-text`}>{nl2br(canales)}</p>
        <div className={styles.divLocation}>
        <Link to ={`/AventurasDelCaribe`} className={styles.link}><img className={styles.image} src={locationLogo}></img><button className={`btn btn-primary`}>
              Visitanos
            </button></Link>
        </div>
      </div>
    </div>

      </div>
    </div>
  </div>
  <div className= {`${styles.colorBackgroundRow} accordion-item`}>
    <h2 className="accordion-header" id="flush-headingSix">
      <button className={`${styles.color} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      Tour del cacao
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">

      <div className="row g-0">
    <div className="col-md-4">
      <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682627194/QueHacer/cacao_tyiiyq.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className={`${styles.text} card-text`}>{nl2br(cacao)}</p>
        <div className={styles.divLocation}>
        <Link to ={`/fincaMandira`} className={styles.link}><img className={styles.image} src={locationLogo}></img><button className={`btn btn-primary`}>
              Visitanos
            </button></Link>
        </div>
      </div>
    </div>
  </div>


      </div>
    </div>
  </div>
  <div className= {`${styles.colorBackgroundRow} accordion-item`}>
    <h2 className="accordion-header" id="flush-headingSeven">
      <button className={`${styles.color} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      Tour agroecológico de producción caprina y bioinsumos
      </button>
    </h2>
    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">


      <div className="row g-0">
    <div className="col-md-4">
      <img src="https://res.cloudinary.com/dfnw2l08x/image/upload/v1682627195/QueHacer/caprina_gaemzu.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className={`${styles.text} card-text`}>{nl2br(caprina)}</p>
        <div className={styles.divLocation}>
        <Link to ={`/fincaLaParcela`} className={styles.link}><img className={styles.image} src={locationLogo}></img><button className={`btn btn-primary`}>
              Visitanos
            </button></Link>
        </div>
      </div>
    </div>
  </div>

      </div>
    </div>
  </div>
</div>
                </section>
            </div>
            
            <div>
              <Footer socialmedia={arrayRedes}></Footer>
            </div>
            
        </div>

    );
}
export default QueHacer;