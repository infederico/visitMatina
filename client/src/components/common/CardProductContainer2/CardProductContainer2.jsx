import { useEffect } from "react"
import CardProduct2 from "./CardProduct2/CardProduct2"

import styles from "./CardProductContainer2.module.css"


const CardProductContainer2 = () => {
    const mockApi = require("./mock.json").response

    
    // useEffect(() => {
    //     dispatch(getAdventures())
    // },[])

    return(
        <div >
            <div className={ styles.wrapCards }>            
                {mockApi.map(paq => {
                    return(
                        <CardProduct2
                        key={paq.id}
                        id={paq.id}
                        name= {paq.name}
                        price= {paq.price}
                        image= {paq.image}
                        description= {paq.description}
                        idModal= {paq.idModal}                    
                        />
                    )   
                })}
            </div>
            
        </div>
    )
}

export default CardProductContainer2