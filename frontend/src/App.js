import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyBmhStiPdRQi5RKgSwkKJjmyi73EC-BvEQ';

//component = anything tbat generates html
// {} = javascript variable
//test comment
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('nyan cat');
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) =>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos : videos});
        });
    }
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return(
            <div>
            <div className="title-bar"> Meiro's Website</div>
            <SearchBar onSearchTermChange = {videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
            </div>
            //onVideoSelect passes to the prop a function listener that should be implemented
        ); 
    }
    
}
export default App;// need to pass reference to DOM node, usually it is a container in the html, USUALLY A <div>

//take this components html and put it on the page (the DOM)
