import { useState } from 'react';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmarks = blog =>{
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleReadingTime = time =>{
    const newReadingTimes = readingTime + time;
    setReadingTime(newReadingTimes);
  }
  return (
    <>
    <Header></Header>
    <div className='grid lg:grid-cols-5 grid-cols-1 gap-5'>
    <div className='col-span-3'>
    <Blogs handleAddToBookmarks = {handleAddToBookmarks} handleReadingTime={handleReadingTime}></Blogs>
    </div>
    <div className='col-span-2'>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </div>
    </>
  )
}

export default App;
