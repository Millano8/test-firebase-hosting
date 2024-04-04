//import React, {useState, useEffect} from "react"
const React = require('react')
const useState = React.useState
const useEffect = React.useEffect
import { Link } from "react-router-dom"

function Page2 (){
    return <div>
        <h1>Page2</h1>
        <Link to="otro">Link a otro lado</Link>
        </div>
}


export {Page2}