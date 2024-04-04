import React, {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import {atom, useRecoilState, useRecoilValue, selector, useSetRecoilState} from "recoil"


const queryState = atom({
    key:'query',
    default: ""
})

const resultsState = selector({
    key:'searchResults',
    get: async({get}) =>{
        const valorDeQuery = get(queryState)
        if (valorDeQuery){
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery)
            const data = await response.json()
            return data.results
        } else {
            return []
        }
    }
})

export function useSearchResult(){
    const params = useParams()
    const query = params.query

    const setRecoilQuery = useSetRecoilState(queryState)
    const results = useRecoilValue(resultsState)

    useEffect(()=>{
        setRecoilQuery(query)
        },[query])
        

    return results
}