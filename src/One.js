import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Pagination from './Pagination'

const One =()=>{
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
            <h1> Pagination  </h1>
            {perpage.map(post => <div class="post"> 
                {post.title}
            </div>)}
            <br/>
            <Pagination data={data} pageHandler={pageHandler}/>
        </div>
    )
}
export default One;