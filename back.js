const express = require('express');
const axios = require('axios');
const app = express();
const path=require('path');
const API_KEY = 'd9b07f6dd2db85620804980d2f0d4e5a'; 

app.get('/weather', async (req, res) => {
  const { location } = req.query;
  try {
    const response = await axios.get(
       `https://api.openweathermap.org/data/2.5/=${location}&appid=${API_KEY}`
    );

      console.log(response.data)
    const { temperature, humidity } = response.data;

    res.json({ temperature, humidity });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to fetch weather data' });
  }
});

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'weather.html'))
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
 

