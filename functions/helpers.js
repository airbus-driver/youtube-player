const axios = require("axios");

const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/videos";

exports.getVideoInfo = async (videoId) => {
  try {
    const response = await axios.get(`${YOUTUBE_API}?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=snippet,contentDetails`);
    const items = response.data.items;
    if (items?.length) {
      const item = items[0];
      return {
        title: item?.snippet?.title,
        duration: item?.contentDetails?.duration,
      };
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};
