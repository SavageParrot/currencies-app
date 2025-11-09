import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


/**
 * Props para el componente HlsVideoPlayer
 * @property {string} hlsUrl - URL del stream HLS
 */
interface HlsVideoPlayerProps {
  hlsUrl: string;
}

/**
 * Componente para reproducir video HLS.
 * @param {HlsVideoPlayerProps} props
 * @returns {JSX.Element}
 */
const HlsVideoPlayer = ({ hlsUrl }: HlsVideoPlayerProps) => {
  const player = useVideoPlayer({
    uri: hlsUrl,
    contentType: 'hls',
  }, (player) => {
    player.loop = true;
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Listen to playing state
  useEffect(() => {
    if (isPlaying) {
      player.play();
    } else {
      player.pause();
    }
  }, [isPlaying, player]);

  // Actualizar el tiempo actual cada 1000ms
  useEffect(() => {
    let interval: number | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(Math.floor(player.currentTime));
      }, 1000);
    }
    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [isPlaying, player]);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HLS Player</Text>
      <VideoView
        player={player}
        style={styles.video}
        nativeControls={false}
        contentFit="contain"
      />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
          <Text style={styles.buttonText}>{isPlaying ? "Pause" : "Play"}</Text>
        </TouchableOpacity>
        <Text style={styles.timeText}>
          {currentTime}s
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    color: '#424242ff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  video: {
    width: '100%',
    maxWidth: 400,
    height: 220,
    backgroundColor: '#000',
    borderRadius: 12,
    marginBottom: 16,
  },
  controls: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3a7fe6',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeText: {
    color: '#292929ff',
    fontSize: 14,
    marginTop: 2,
  },
});

export default HlsVideoPlayer;
