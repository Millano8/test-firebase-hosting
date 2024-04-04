import React from "react"
import { Layout } from "../components/layout";
import { Home } from "../pages/home";
import { SearchResults } from "../pages/searchResults";

import {Routes, Route } from "react-router-dom";

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/search/:query" element={<SearchResults />} />
            </Route>
        </Routes>
    )
}

export {AppRoutes}