import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Pagination from './Pagination'

const One = ()=>{
    const [data, setData] = useState([]);
    const [perpage, setPerpage] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res => {setData(res.data);setPerpage(res.data.slice(0,10));}
        )
    },[])

    const pageHandler =(pageNumber)=>{
        setPerpage(data.slice((pageNumber*10)-10,pageNumber*10))
    }

    return(
        <div>
            <h1> Hi One </h1>
        {data.length>=1? <div> 
            {perpage.map(post =><div> 
                <div className="post">
                     {post.title}
                </div>
               
            </div>)} <br/>
            <Pagination data={data} pageHandler={pageHandler}/>
            <br/>
            <br/>
        </div> : <div> <p> Data  Loaded</p></div> }

            
        </div>
    )
}

export default One;

//

import React from 'react'

const Pagination = ({data, pageHandler}) => {
    let pageNumbers = []

for(let i = 1; i< Math.ceil(data.length/10)+ 1; i++){
    pageNumbers.push(i);
}

    return(
        <div>
            <h1> Hi Pagination </h1>
            {pageNumbers.map(page => 
            <span className="pagination-1" onClick={()=> pageHandler(page)}> 
           {page}
           </span>
            )} 
        </div>
    )
}
export default Pagination;