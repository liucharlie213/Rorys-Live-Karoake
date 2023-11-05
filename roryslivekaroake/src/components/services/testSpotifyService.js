// const { getAccessToken, searchTrack } = require('./spotifyService');

// const testGetAccessToken = async () => {
//   try {
//     const accessToken = await getAccessToken();
//     if (accessToken) {
//       console.log('Access Token:', accessToken);
//     } else {
//       console.log('Failed to retrieve access token.');
//     }
//   } catch (error) {
//     console.error('Error in testGetAccessToken:', error);
//   }
// };

// const testSearchTrack = async (accessToken) => {
//   const trackName = 'Shape of You'; // Replace with the track you want to search
//   const artistName = 'Ed Sheeran'; // Replace with the artist of the track
  
//   try {
//     const trackData = await searchTrack(trackName, artistName, accessToken);
//     if (trackData) {
//       console.log('Track Data:', trackData);
//     } else {
//       console.log('No track data found.');
//     }
//   } catch (error) {
//     console.error('Error in testSearchTrack:', error);
//   }
// };


// testGetAccessToken();
// testSearchTrack();

const { getAccessToken, searchTrack } = require('./spotifyService');

const testSearchFunctionality = () => {
  getAccessToken()
    .then(accessToken => {
      if (!accessToken) {
        console.log('Failed to retrieve access token.');
        return;
      }

      console.log('Access Token:', accessToken);

      // Use the access token to search for a track
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
