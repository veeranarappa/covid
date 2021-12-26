import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function Axiosforms(props) {

    const [userData, setUserData] = useState({ name: '', age: '', marks: '' });

    useEffect(() => {
        setUserData({
            name: props.edit.name ? props.edit.name : '',
            age: props.edit.age ? props.edit.age : '',
            marks: props.edit.marks ? props.edit.marks : ''
        })
    }, [props.edit])

    const handleFistName = (e) => {
       // console.log('eventObject===>', e.target.value, e.target.checked)

        setUserData((preState) => {
            // let list = preState.hobbies;
            // let selectedValue = e.target.checked ? [...preState.hobbies, e.target.value] : list.filter(x => x !== e.target.value)
            return {
                ...preState,
                [e.target.name]: e.target.value
            }
        })
    }



    const handleSubmitForm = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(userData, null, 3))
        if (!props.edit.isEdit) {
            Axios.post('http://localhost:3000/usersData', { id: uuidv4(), ...userData })
                .then(res => console.log('usersDataPosted===>', res))
            Axios.get('http://localhost:3000/usersData')
                .then(res => {
                    console.log('usersData===>', res.data)
                    props.parentState(res.data)
                })
            setUserData({ name: '', age: '', marks: '' })
            console.log('submittedForm===>', userData)
        } else {
            const url = `http://localhost:3000/usersData/${props.edit.id}`
            Axios.put(url, userData)
                .then(res => console.log('updatedUsersData===>', res));
            Axios.get('http://localhost:3000/usersData')
                .then(res => {
                    console.log('usersData===>', res.data)
                    props.parentState(res.data)
                })
        }
    }
    return <form onSubmit={handleSubmitForm}>
        <label htmlFor='name'>Name</label>
        <input type='text' placeholder='name' name='name' id='name' value={userData.name} onChange={handleFistName} />
       
        <br />
        <label htmlFor='age'>Age</label>
        <input type='text' placeholder='Age' name='age' id='age' value={userData.age} onChange={handleFistName} required />
        
        <br />
        <label htmlFor='marks'>Marks</label>
        <input type='text' placeholder='Marks' name='marks' id='marks' value={userData.marks} onChange={handleFistName} />
        
        <br />
         <button type='submit'>Submit</button>
    </form>
}

export default Axiosforms;