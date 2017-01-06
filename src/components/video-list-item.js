 'use strict';

 import React from 'react';

 // like doing const video = props.video. the first argument has a property named video... please grab it and declare a variable called video.
 const VideoListItem = ({video, onVideoSelect}) => {
   const imageUrl = video.snippet.thumbnails.default.url;
   return (
     <li onClick={() => onVideoSelect(video)} className="list-group-item">
       <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}
          </div>
        </div>
      </div>
     </li>
   );
 };

 export default VideoListItem;
