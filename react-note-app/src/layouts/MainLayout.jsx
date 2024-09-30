import React from 'react'
import NavBar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = ({searchText,handlesearchText}) => {
  return (
    <>
        <NavBar searchText={searchText} handlesearchText={handlesearchText} />    
        <ToastContainer />
        <Outlet/>
    </>
  )
}

export default MainLayout
