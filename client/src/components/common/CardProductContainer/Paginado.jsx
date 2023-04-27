import style from "./Paginado.module.css"
const Paginado = ({productsPerPage, products, paginado, currentPage, setCurrentPage}) => {
    let pageNumbers = []

    for(let i= 1; i <= Math.ceil(products / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    
    return(
       
        <nav>

            <ul className={style.container_list}>
                {currentPage === 1
                ?   <li>
                        <button className={style.left} disabled={true}> &lt; </button>
                    </li>
                :   <li>
                        <button className={style.left} onClick={() => paginado(currentPage - 1)}> &lt;</button>
                    </li>}
                
                {pageNumbers && pageNumbers.map(page =>( 
                     <li className={style.numbers} key = {page}> 
                        <button onClick={() => paginado(page)}>{page }</button> 
                     </li>
                ))}

                {currentPage === Math.ceil(products / productsPerPage)
                ?   <li>
                        <button className={style.right} disabled={true} >&gt;</button>
                    </li>
                :   <li>
                        <button className={style.right} onClick={() => paginado(currentPage + 1)}>&gt;</button>
                    </li>}
            </ul>
        </nav>
    )
}

export default Paginado