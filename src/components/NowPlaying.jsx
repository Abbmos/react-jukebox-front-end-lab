const NowPlaying = ({ playingTrack }) => {
    if (!playingTrack) return null;
    return (
      <div className="now-playing">
        <h2>Now Playing:</h2>
        <p><strong>Title:</strong> {playingTrack.title}</p>
        <p><strong>Artist:</strong> {playingTrack.artist}</p>
      </div>
    );
  };
  export default NowPlaying;