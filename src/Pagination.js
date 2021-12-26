import React from 'react';

const Pagination = ({data, pageHandler}) => {
    let pageNumbers = []

    for(let i = 1; i< Math.ceil(data.length/10)+ 1; i++){
        pageNumbers.push(i);
    }
    return(
        <div>
             {pageNumbers.map(page => 
            <span className="pagination-1" onClick={()=> pageHandler(page)}> 
           {page}
           </span>
            )} 
        </div>
    )
}
export default Pagination;