import React, {useState, useEffect} from "react"
import { SearchForm } from "../SearchForm"
import { Outlet } from "react-router-dom"
import css from "./Layout.css"

const footerStyle = {border: "solid 3px red", padding: 40} 

function Layout (){
    return (
        <div className={css.root}>
            <header style={{border: "solid 2px"}}>
                 <SearchForm style={{backgroundColor: "red"}} />
            </header>
            <Outlet />
            <footer style={footerStyle}>Soy el footer</footer>
        </div>)
}


export {Layout}