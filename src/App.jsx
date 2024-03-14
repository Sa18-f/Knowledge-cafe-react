import { useState } from 'react';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = blog =>{
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
    <Header></Header>
    <div className='grid lg:grid-cols-5 grid-cols-1 gap-5'>
    <div className='col-span-4'>
    <Blogs handleAddToBookmarks = {handleAddToBookmarks}></Blogs>
    </div>
    <div className='col-span-1'>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    </div>
    </>
  )
}

export default App;
