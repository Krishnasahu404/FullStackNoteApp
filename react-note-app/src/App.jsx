import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AddNotePage from "./pages/AddNotePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import EditNotePage from "./pages/EditNotePage";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const App = () => {

  const [notes,setNotes] = useState([])
  const [IsLoading,setIsLoading]=useState(false)
  const [filterText,setfilterText] = useState("")
  const [searchText , setSearchText] = useState("")


  
  const handlesearchText=(val)=>{
    setSearchText(val)
  }
  const handleFilterText =(val)=>{
    setfilterText(val)
  }

  const filterNotes = 
    filterText === "BUSINESS"
      ?notes.filter(note=>note.category=="BUSINESS")
      :filterText === "PERSONAL" ? notes.filter(note=>note.category=="PERSONAL")
      :filterText === "IMPORTANT" ? notes.filter(note=>note.category=="IMPORTANT")
      :notes

  useEffect(()=>{
    if(searchText.length<3)return;
    axios.get(`http://127.0.0.1:8000/notes-search/?search=${searchText}`)
    .then(res=>{
      console.log(res.data)
      setNotes(res.data)
    }).catch(err=>{
      console.log(err.message)
    })
  },[searchText])

  useEffect(function(){
    setIsLoading(true)
    axios.get("http://127.0.0.1:8000/notes/")
    .then(res=>{
      console.log(res.data)
      setNotes(res.data)
      setIsLoading(false)
    })
    .catch(err=>{
      console.log(err.message)

    })

  },[])


  const addNote =(data)=>{
      axios.post('http://localhost:8000/notes/',data)
      .then(res=>{
        setNotes([...notes,data])
        toast.success("New note has been added")
        console.log(res.data)
      }).catch(err=>{
        console.log(err.response.data); // Log the full error response
        console.log(err.message);
      })
  }


  const Updatenote =(data,slug)=>{
    axios.put(`http://localhost:8000/notes/${slug}/`,data)
    .then(res=>{
      console.log(res.data)
      toast.success("Notes Updates successfully")
      console.log(res.data)
    }).catch(err=>{
      console.log(err.response.data); // Log the full error response
      console.log(err.message);
    })
  }


  const deleteNotes=(slug)=>{
    axios.delete(`http://localhost:8000/notes/${slug}/`).then(res=>{
      setNotes([...notes])
    }).catch(err=>{
      console.log(err.message)
    })
  }

  const router =  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout searchText={searchText} handlesearchText={handlesearchText}/>}>

      <Route index element={<HomePage  notes={filterNotes} loading = {IsLoading} handleFilterText={handleFilterText}/>} />
      <Route path="/add-note?" element={<AddNotePage addNote={addNote}/>}/>
      <Route path="/notes/:slug" element={<NoteDetailPage deleteNotes={deleteNotes}/>}/>
      <Route path="/edit-note/:slug" element={<EditNotePage Updatenote={Updatenote}/>}/>




    </Route>
  ))
  return <RouterProvider router={router}/>
}

export default App
