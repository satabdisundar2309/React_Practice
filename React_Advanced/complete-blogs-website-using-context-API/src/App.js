import React, { useContext, useEffect } from 'react'
import { AppContext } from './Context/AppContext';
import './App.css'
import {Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './Pages/Home'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import BlogPage from './Pages/BlogPage'

export const App = () => {

const {fetchBlogPosts} = useContext(AppContext)
const [searchParams, setSearchParams]= useSearchParams();
const location = useLocation();
 useEffect(()=>{
  const page = searchParams.get("page") ?? 1;
  if(location.pathname.includes('tags')){
    // show pages of that particular tag
    const tag = location.pathname.split('/').at(-1).replace('-',' ');
    fetchBlogPosts(Number(page),tag);
  }
  else if(location.pathname.includes('category')){
    // shows the page of that particular category
    const category = location.pathname.split('/').at(-1).replace('-',' ');
    fetchBlogPosts(Number(page),null,category);
  }
  else{
    // shows the page if no partcular category or tags are clicked
    fetchBlogPosts(Number(page))
  }
 },[location.pathname, location.search]) 
  
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/blog/:blogId' element = {<BlogPage/>}/>
        <Route path='/tags/:tag' element = {<TagPage/>}/>
        <Route path='/categories/:category' element = {<CategoryPage/>}/>
    </Routes>
  )
}

export default App