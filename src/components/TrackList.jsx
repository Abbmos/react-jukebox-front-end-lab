const TrackList = (props) => {
    return (
      <div className="track-list-container">
        <button className="add-track-btn" onClick={props.handleFormView}>Add New Track</button>
        <h2>Track List</h2>
        <div className="track-grid">
          {props.trackList.length === 0 ? (
            <h3>No tracks yet!</h3>
          ) : (
            props.trackList.map((track) => (
              <div key={track._id} className="track-card">
                <p>{track.title} by <span className="artist">{track.artist}</span></p>
                <div className="buttons">
                  <button className="play-btn" onClick={() => props.handlePlayTrack(track)}>Play</button>
                  <button className="edit-btn" onClick={() => props.handleFormView(track)}>Edit</button>
                  <button className="delete-btn" onClick={() => props.handleRemoveTrack(track._id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  export default TrackList;