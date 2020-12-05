// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import exampleVideoData from './data/exampleVideoData.js';
import YOUTUBE_API_KEY from '/src/config/youtube.js';


var searchedVideos = [];


// create options {}
var options = {
  key: YOUTUBE_API_KEY,
  query: 'react',
  maxSearchedVideos: 5,
  part: 'snippet'
};

// searchYoutube() callback
var getSearchedData = function(data) {

  data.items.forEach(function(current) {
    searchedVideos.push(current);

  });

};

searchYouTube(options, getSearchedData);
console.log('searchedVideos = ', searchedVideos);
console.log('exampleVideoData = ', exampleVideoData);

// ReactDOM.render(<App data={esearchedVideosampleVideoData}/>, document.getElementById('app'));
ReactDOM.render(<App data={searchedVideos} seachFunction={searchYouTube}/>, document.getElementById('app'));