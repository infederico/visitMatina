import styles from "./RestaurantSolYLuna.module.css"

export default function RestauranteSolYLuna() {
    
    let DB = require("./imagenes.json")
    DB = DB.response
    
    
    return(
        <>
        {console.log(DB)}
            <h1>Restaurante Sol y Luna</h1>
            <div className={styles.gallery}>
                {DB.map(image => {
                    return(
                        <img src={image.img} alt="AGREGAR ALT" />
                    )
                })}
            </div>       
        </>
    )
}