import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookmarks, handleReadingTime}) => {
    const {id, title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className="mb-20">
            <img className='mb-5' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <img className='w-20 h-20 rounded-full' src={author_img} alt="" />
                    <div className='mt-4'>
                       <h4>{author}</h4>
                       <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span><button onClick={() => handleAddToBookmarks(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <div>

            </div>
            <h2 className='text-4xl my-3'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='ml-4' href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleReadingTime(id, reading_time)} className='mt-2 text-purple-700 font-bold'>Mark as read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleReadingTime : PropTypes.func.isRequired
}
export default Blog;