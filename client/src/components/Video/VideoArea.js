import React from 'react';
// import NavBar from '../NavBar/NavBar';
import youtube from '../../utils/API'
import VideoSearch from '../VideoSearch/VideoSearch';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoResults from '../VideoResults/VideoResults';
import "../video/video.css";

//Youtube API Key
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class VideoArea extends React.Component {
      
  state = { 
      videos: [],
      selectedVideo: null
    };

    onVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }
  componentDidMount = () => {
      this.onTermSubmit('concert')
  }
    
       onTermSubmit = (term) => {
        youtube.get('/search', {
          params: {
              part: 'snippet',
              maxResults: 5,
              q: term,
              key: API_KEY
     
            }
          }).then((response) => {
            this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
            console.log(this.state.videos);
        });
      };
      loadClient=() => {
        youtube.client.setApiKey(API_KEY)
        return youtube.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("loading youtube client"); },
                function(err) { console.error("Error loading youtube client", err); });
    }

      render() {
        return (
       <div className="jumbrotron container">
          <VideoSearch onFormSubmit={this.onTermSubmit} />
              <div className="table">
                  <div className="row">
                    <div className="col">
                          <VideoPlayer video = {this.state.selectedVideo} />
                   </div>
                   <div className="col">
                          <VideoResults onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                      </div>
                 </div>
            </div>
        </div>
    );

   }
};

export default VideoArea;