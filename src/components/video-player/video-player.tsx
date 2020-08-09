import * as React from 'react';

interface VideoPlayerProps {
  children: React.ReactNode;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  children
}: VideoPlayerProps) => {

  return (
    <>
      {children}
    </>
  );
};

export default VideoPlayer;
