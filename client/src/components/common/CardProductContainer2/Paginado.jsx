import style from "./Paginado.module.css"
const Paginado = ({productsPerPage, products, paginado, currentPage, setCurrentPage}) => {
    let pageNumbers = []

    for(let i= 1; i <= Math.ceil(products / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    
    return(
       
  

            <div className={style.container_list}>
                {currentPage === 1
                ?   
                        <button className={`${style.buttonPage} ${style.left}  "page-link"`} > Left</button>
                    
                :   
                        <button className={`${style.buttonPage} ${style.left}  "page-link"`} onClick={() => paginado(currentPage - 1)}> Left</button>
                    }
                
                {pageNumbers && pageNumbers.map(page =>( 
                  
                        <button key = {page} className={`${style.buttonPage2} "page-link"`} onClick={() => paginado(page)}>{page }</button> 
                   
                ))}

                {currentPage === Math.ceil(products / productsPerPage)
                ?  
                        <button className={`${style.buttonPage} ${style.right}  "page-link"`} disabled={true} >Next</button>
                    
                :  
                        <button className={`${style.buttonPage} ${style.right}  "page-link"`}  onClick={() => paginado(currentPage + 1)}>Next</button>
                    }
            </div>

    )
}

export default Paginado