const VideoPlayer = ({ id }: { id: string }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${id}?rel=0&amp;fs=0&amp;showinfo=0`;

  return (
    <iframe
      className="aspect-video rounded-md"
      src={youtubeUrl}
      allowFullScreen
      width={766}
    />
  );
};

export default VideoPlayer;
