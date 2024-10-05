"use client";
import useScreenSize from "@/hooks/useScreenSize";

const VideoPlayer = ({ id }: { id: string }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${id}?rel=0&amp;fs=0&amp;showinfo=0`;

  const { width } = useScreenSize();
  return (
    <iframe
      className="aspect-video rounded-md"
      src={youtubeUrl}
      allowFullScreen
      width={width > 766 ? 766 : width > 512 ? 510 : width }
    />
  );
};

export default VideoPlayer;
