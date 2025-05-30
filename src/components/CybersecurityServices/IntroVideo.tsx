"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const IntroVideo: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it 
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/watch?v=rn6R4ncd2OU&ab_channel=BBCEarth",
        ]}
      />

      <div className="video-style-area">
        <div className="container-fluid">
          <div className="video-view-content">
            <button className="video-btn" onClick={() => setToggler(!toggler)}>
              <i className="ri-play-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
