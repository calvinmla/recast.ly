import YOUTUBE_API_KEY from '/src/config/youtube.js';

var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max, 
    type: 'video',
    videoEmbaddable: 'true'

  }).done(({items}) => {
    if (callback) {
      callback(items);
    }

  }).fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
};


export default searchYouTube;