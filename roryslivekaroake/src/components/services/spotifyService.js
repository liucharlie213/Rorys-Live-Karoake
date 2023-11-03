// require('dotenv').config({ path: '/Users/charlesliu/Documents/RLK/Rorys-Live-Karoake/roryslivekaroake/.env' });
require('dotenv').config({ path: '../../../.env' });
const axios = require('axios');
const qs = require('qs');

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

// authenticate with Spotify API and retrieve an access token using client credentials
const getAccessToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${credentials}` // Basic auth header with client ID and client secret
  };

  const data = qs.stringify({ grant_type: 'client_credentials' });

  try {
    const response = await axios.post(tokenUrl, data, { headers });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting token', error);
    return null;
  }

};

const searchTrack = async (trackName, artistName, accessToken) => {
  const searchUrl = 'https://api.spotify.com/v1/search';
  const query = encodeURIComponent(`${trackName} artist:${artistName}`);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await axios.get(`${searchUrl}?q=${query}&type=track&limit=1`, { headers });
    // Assuming we want only the first match
    const track = response.data.tracks.items[0];
    if (track) {
      return {
        name: track.name,
        artist: track.artists.map(artist => artist.name).join(', '),
        albumCoverUrl: track.album.images[0].url, // Highest resolution image
      };
    }
  } catch (error) {
    console.error('Error searching for track', error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

module.exports = {
  getAccessToken,
  searchTrack
};