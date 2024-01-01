// index.js
const axios = require('axios');
const qs = require('qs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '/Users/charlesliu/Documents/RLK/Rorys-Live-Karoake/roryslivekaroake/.env'}
);
const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// existing function to get the access token
const getAccessToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
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

// Endpoint to get the access token
app.get('/api/token', async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    res.json({ accessToken });
  } catch (error) {
    console.error('Error getting token', error.message, error.response?.data);
  }
});

const searchTrack = async (title, artist, accessToken) => {
  const searchUrl = `https://api.spotify.com/v1/search?q=track:${encodeURIComponent(title)}%20artist:${encodeURIComponent(artist)}&type=track&limit=1`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };

  try {
    const response = await axios.get(searchUrl, { headers });
    if (response.data.tracks.items.length > 0) {
      const albumCoverUrl = response.data.tracks.items[0].album.images[0].url;
      return { albumCoverUrl };
    }
    return {};
  } catch (error) {
    console.error('Error searching track', error);
    return {};
  }
};

app.get('/api/search-track', async (req, res) => {
  const { title, artist } = req.query;
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return res.status(401).send('Could not get access token');
  }

  try {
    const trackInfo = await searchTrack(title, artist, accessToken);
    res.json(trackInfo);
  } catch (error) {
    res.status(500).send('Error searching for track');
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
