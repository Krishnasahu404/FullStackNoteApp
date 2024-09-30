import React, { useEffect, useState } from 'react'
import './EditNotePage.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditNotePage = ({Updatenote}) => {

    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [category,setCategory] = useState("")
  

    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/notes/${slug}`)
        .then(res=>{
            console.log(res.data)
            setTitle(res.data.title)
            setBody(res.data.body)
            setCategory(res.data.category)


        }).catch(err=>{
            console.log(err.message)
        })
    },[slug])


    const updatedNotesobject = {
        title :title,
        body: body,
        category :category
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!title && !body &&  !category){
            return;
          }
        Updatenote(updatedNotesobject,slug)
        navigate(`/notes/${slug}`)

    }


  return (
    <form onSubmit={handleSubmit}>
        <h5>Update notes</h5>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Title
            </label>
            <input
                className="form-control"
                id="exampleFormControlInput1"
                value={title}
                placeholder="Enter note's title"
                onChange={(e)=>setTitle(e.target.value)}/>
                
        </div>

        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"> Content</label>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={4}
                placeholder="Enter note's content"
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            ></textarea>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Notes category
            </label>
            <select className="form-select" aria-label="Default select example" value={category} style={{height: "40px"}} onChange={(e)=>setCategory(e.target.value)}>
                <option value="">Pick a category</option>
                <option value="BUSINESS">Business</option>
                <option value="PERSONAL">Personal</option>
                <option value="IMPORTANT">Important</option>
            </select>
        </div>

        <button className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}}>Add Note</button>
   </form>
  )
}

export default EditNotePage
