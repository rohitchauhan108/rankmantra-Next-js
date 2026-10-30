import React from "react";

const VideoBtn = ({ text = "Watch Video" }) => {
  return (
    <button className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5h4V7h2v5h4l-5 5z" />
      </svg>
      {text}
    </button>
  );
};

export default VideoBtn;
