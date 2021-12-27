import React from 'react';
import VideoListItem from './video_list_detail'

const VideoList = (props) =>{
    const videoItems = props.videos.map((video) => {
        return <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video = {video}/> //video gets passed as prop
    }); //calling map on an array automatically loops through the loop and runs the function
    return (
    <ul className="col-md-4 list-group">
        {videoItems}
    </ul>
        
    );
}

export default VideoList;