import YOUTUBE_API_KEY from '/compiled/src/config/youtube.js';

var searchYouTube = (options, callback) => {
// TODO
  $.get('https://www.googleapis.com/youtube/v3/search', options, callback);
};


export default searchYouTube;