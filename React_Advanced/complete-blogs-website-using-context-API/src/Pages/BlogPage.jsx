import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import Header from '../Components/Header';
import BlogDetails from '../Components/BlogDetails'
import { AppContext } from '../Context/AppContext';
import { baseUrl } from '../baseUrl';

function BlogPage() {

    const [blog, setBlog] = useState(null)
    const [relatedBlogs, setRelatedblog] = useState([])
    const navigation = useNavigate();
    const location = useLocation();
    const blogId = location.pathname.split('/').at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const {setLoading, loading} = useContext(AppContext)

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const result = await fetch(url)
            const data = await result.json();
            setBlog(data.blog);
             setRelatedblog(data.relatedBlogs);
        } catch (error) {
            console.log("Error occured in blogId")
            setBlog(null)
            setRelatedblog([])
        }
        setLoading(false)
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])
  return (
    <div>
        <Header/>
        <div>
            <button onClick={()=>{
                navigation(-1)
            }}>
                Back
            </button>
        </div>
        {
            loading ? (<p>Loading...</p>) : 
                blog ? <div>
                    <BlogDetails post = {blog}/>
                    <h2>Related Blogs</h2>
                    {
                        relatedBlogs.map((post)=>{
                            return <div key={post.id}>
                                <BlogDetails post = {post}/>
                            </div>
                        })
                    }
                </div> : <div>
                    <p>No Blogs Found</p>
                </div>
            
        }
    </div>
  )
}

export default BlogPage