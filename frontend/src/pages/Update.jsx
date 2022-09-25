import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {

  const [books, setBooks] = useState({
    title: "",
    desc: "",
    price: "",
    cover: ""
  });

  const navigate = useNavigate()

  const location = useLocation()

  const bookId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setBooks(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/books/"+bookId, books)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='form'>
      <h1>Update Book</h1>
      <input type="text" placeholder='Enter title' onChange={handleChange} name='title' />
      <input type="text" placeholder='Enter Description' onChange={handleChange} name='desc' />
      <input type="number" placeholder='Enter Price' onChange={handleChange} name='price' />
      <input type="text" placeholder='Enter Cover' onChange={handleChange} name='cover' />
      <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update