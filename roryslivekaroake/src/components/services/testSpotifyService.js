const { getAccessToken, searchTrack } = require('./spotifyService');

const testSearchFunctionality = () => {
  getAccessToken()
    .then(accessToken => {
      if (!accessToken) {
        console.log('Failed to retrieve access token.');
        return;
      }

      console.log('Access Token:', accessToken);

      return searchTrack('Jayu', 'SE SO NEON', accessToken);
    })
    .then(trackResults => {
      console.log(trackResults);
    })
    .catch(error => {
      console.error('Error in testSearchFunctionality:', error);
    });
};

testSearchFunctionality();
