import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import {useSearchResult} from "../hooks"
import {MainButton} from "../ui/buttons"
import { TextField } from "../ui/text-field"
import css from "./searchForm.css"

function SearchForm ({style}){
    const navigate = useNavigate()
    const results = useSearchResult()

    function handleSubmit(e){
        e.preventDefault()
        const query = e.target.query.value
        navigate("/search/"+query, {replace:true})
    }
    return (<form onSubmit={handleSubmit} className={css.root}>
        <TextField name="query" />
        <MainButton>Buscar</MainButton>
        <h4>Resultados: {results.length}</h4>
    </form>)
}


export {SearchForm}