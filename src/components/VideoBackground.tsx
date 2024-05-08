import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted className="video">
        <source
          src="https://videos.pexels.com/video-files/10409075/10409075-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
