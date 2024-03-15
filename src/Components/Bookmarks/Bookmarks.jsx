import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='bg-gray-300 rounded-lg'>
            <div className='mb-6 bg-white'>
                <h3 className='text-2xl font-bold'>Total reading-times:{readingTime}</h3>
            </div>
            <h2 className="text-2xl font-bold p-3">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx )=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;