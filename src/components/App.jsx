import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };
  }

  componentDidMount() {
    this.retrieveSearchedVideos('dogs');
  }

  retrieveSearchedVideos(searchedString) {
    var options = {
      key: this.props.API_KEY,
      query: searchedString,
    };

    this.props.searchYouTube(options, (items) => {
      this.setState({
        videos: items,
        currentVideoIndex: 0,
        currentVideo: this.state.videos[0],
      });
    });
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search retrieveSearchedVideos={_.debounce(this.retrieveSearchedVideos.bind(this), 500)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div id="videoList" className="col-md-5">
            <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
