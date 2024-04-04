// import React, {useState, useEffect} from "react"
const React = require('react')
const useState = React.useState
const useEffect = React.useEffect
import { Link, useParams } from "react-router-dom"

function Search (){
    const params = useParams()

    useEffect(()=>{
        console.log("Aca harias un fetch usando el param ",params.busqueda)
    },[params])

    return (
        <div>
            Soy el buscador
            <Link to="/">Link a la home</Link>
            <Link to="/search/termo">Link a los termos</Link>
        </div>
        )
}


export {Search}