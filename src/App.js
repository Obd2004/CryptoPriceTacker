import { useEffect, useState } from 'react';
import './App.css';
import NavSec from './TikTok/NavSec';
import './TikTok/styles/style.css'
import VideoMain from './TikTok/VideoMain';
import db from './TikTok/FireBase/config';

function App() {

  const [ videos , setVideos] = useState([])

  useEffect(()=>{
    db.collection("videos").onSnapshot((snapshot)=>
      setVideos(snapshot.docs.map((doc)=> doc.data()))
    )
  })
  return (
    <div className="App">
      <NavSec/>
      <div className='tiktokVideos'>
        {videos.map(
          ({page ,description , music , likes , comments , shares , url})=>(
            <VideoMain
              page={page}
              description={description}
              music={music}
              likes={likes}
              comments={comments}
              shares={shares}
              url={url}
            />
          )
        )
          
        }
      </div>
    </div>
  );
}

export default App;
