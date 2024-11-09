const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const ytdl = require('ytdl-core');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('videoLink'), async (req, res) => {
    const videoLink = req.body.videoLink;
  
    try {
      if (!videoLink) {
        return res.status(400).json({ error: 'No video link provided' });
      }
  
      // Download the video from the link
      const videoFilePath = await downloadVideo(videoLink);
  
      // Call Whisper API to process the downloaded video file
      const whisperResponse = await axios.post('https://api.openai.com/v1/whisper', {
        file: fs.createReadStream(videoFilePath),
        model: 'whisper-1',
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      const transcribedText = whisperResponse.data.text;
  
      // Clean up the downloaded video file
      fs.unlinkSync(videoFilePath);
  
      // Call GPT-3/GPT-4 API to fact-check the transcribed text
      const gptResponse = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `summarize and fact-check the following text: ${transcribedText}`,
        max_tokens: 1000,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      });
  
      // Send the fact-checked text back to the client
      res.json({ text: gptResponse.data.choices[0].text });
    } catch (error) {
      console.error('Error processing video:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Error processing video' });
    }
  });
  
  async function downloadVideo(videoLink) {
    const videoFilePath = path.join('uploads', 'downloaded_video.mp4');
    const videoStream = ytdl(videoLink, { quality: 'highest' })
  
    return new Promise((resolve, reject) => {
      const fileStream = fs.createWriteStream(videoFilePath);
      videoStream.pipe(fileStream);
  
      videoStream.on('error', (error) => {
        reject(new Error(`Failed to download video: ${error.message}`));
      });
  
      fileStream.on('finish', () => {
        resolve(videoFilePath);
      });
  
      fileStream.on('error', (error) => {
        reject(new Error(`Failed to write video file: ${error.message}`));
      });
    });
  }

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});