import HlsVideoPlayer from "@/components/HlsVideoPlayer";

const VideoStreamScreen = () => {

  const HLS_URL = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

  return <HlsVideoPlayer hlsUrl={HLS_URL} />;
};

export default VideoStreamScreen;
