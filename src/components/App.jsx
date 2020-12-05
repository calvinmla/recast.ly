import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // initial default video
    this.state = {
      currentVideoIndex: 0
    };

    console.log('this.props = ', this.props);
    console.log('this.props.data = ', this.props.data);
    console.log('this.props.data[1] = ', this.props.data[1]);
    console.log('this.state.currentVideoIndex = ', this.state.currentVideoIndex);

  }



  getClickedTitleIndex(clickedTitle) {
    for (let i = 0; i < this.props.data.length; i++) {
      let currentVidObj = this.props.data[i];
      if (currentVidObj.snippet.title === clickedTitle) { return i; }
    }
  }

  // Event handler
  onVideoListEntryClick(clickedTitle) {

    let clickedIndex = this.getClickedTitleIndex(clickedTitle);

    this.setState({
      currentVideoIndex: clickedIndex
    });
  }

  componentWillMount() {
    console.log('before');
  }


  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this));
    console.log('this.props.data[1] = ', this.props.data[1]);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em>view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.props.data[this.state.currentVideoIndex]}/>
          </div>
          <div id="videoList" className="col-md-5">
            <VideoList videos={this.props.data} onVideoTitleClick={this.onVideoListEntryClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
