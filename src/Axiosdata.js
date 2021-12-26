import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Axiosform from './Axiosform';



function Axiousdata() {

    const [users, setUsers] = useState(null);
    const [userEdit, setEditUser] = useState(null);

    useEffect(() => {
        Axios.get('http://localhost:3000/usersData')
            .then(res => {
                console.log('usersData===>', res.data)
                setUsers(res.data)
            })
    }, [])

    const deleteRecord = (x) => {
        const url = `http://localhost:3000/usersData/${x.id}`
        console.log('deleteFramedUrl==>', url)
        Axios.delete(url);
        Axios.get('http://localhost:3000/usersData')
            .then(res => {
                console.log('usersData===>', res.data)
                setUsers(res.data)
            })
    }

    const editRecord = (userData) => {
        setEditUser({ ...userData, isEdit: true })
    }

    return <div>
        {users?.map(x => {
            return <React.Fragment key={x.id}>
                <div>{x.id}</div>
                <div>{x.name}</div>
                <div>{x.age}</div>
                <div>{x.marks}</div>
                <button type='button' onClick={() => deleteRecord(x)}>delete</button>
                <button type='button' onClick={() => editRecord(x)}>Edit</button>
                <hr />
            </React.Fragment>
        })}
        <Axiosform parentState={setUsers} edit={userEdit ? userEdit : ''} />
    </div>
}


export default Axiousdata;