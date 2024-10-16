import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'
// import Card from './Card'

function Blogs() {
    // consuming data
    const {loading, posts} = useContext(AppContext)
  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
        {
            loading? <Spinner/> : 
                posts.length=== 0 ? <div>No Posts Found</div> : posts.map((post)=>{
                    return (
                       <BlogDetails key={post.id}/>
                    )
                })
            
        }
    </div>
  )
}

export default Blogs