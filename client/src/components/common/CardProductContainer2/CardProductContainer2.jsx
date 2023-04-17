import { useEffect } from "react"
import CardProduct2 from "./CardProduct2/CardProduct2"



const CardProductContainer2 = () => {
    const mockApi = require("./mock.json").response

    
    // useEffect(() => {
    //     dispatch(getAdventures())
    // },[])

    return(
        <div >
            <div className="col-sm-6 mb-3 mb-sm-0">            
                {mockApi.map(paq => {
                    return(
                        <CardProduct2
                        key={paq.id}
                        name= {paq.name}
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