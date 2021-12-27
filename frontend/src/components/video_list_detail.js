import React from 'react';
import VideoList from './video_list';
const VideoDetailItem = ({video, onVideoSelect}) =>{
    if(!video){return <div>Loading...</div>}
    //const video = props.video; you would need this command if you just called the passed argument "prop"
    //className are bootstrap elements to prettify things, READ DOCS LATER
    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li onClick ={ () => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};
//reminder that you need curly braces when passing javascript into html tags (JSX)
export default VideoDetailItem;