import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
function Videosidebar({likes,comment,shares}) {
  return (
    <div className='videoSidebar'>
        <div className="buttons">
            <FavoriteIcon className='icon'/>
            <p>{likes}</p>
        </div>
        <div className="buttons">
            <MessageIcon className='icon'/>
            <p>{comment}</p>
        </div>
        <div className="buttons">
            <ShareIcon className='icon'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default Videosidebar