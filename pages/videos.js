import React from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';



const VideoGrid = () => {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = 'AIzaSyDT6K8-ac4Ip6Prt9mDKRCmvaKUgGhtCBU';
        const channelId = 'UCA-16Iw7OnW5wARQf7zv4KQ';
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=12&key=${apiKey}&order=date`
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      <section className="gymstart-videos">
        <div className="container-space">
          <div className="video-grid">
            {videos.map((video) => (
              <div className="video-item" key={video.id.videoId}>
                <YouTube videoId={video.id.videoId} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );

};

export default VideoGrid;
