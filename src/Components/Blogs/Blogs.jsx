import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div>
            <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handleAddToBookmarks = {handleAddToBookmarks} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddToBookmarks : PropTypes.func.isRequired
}

export default Blogs;