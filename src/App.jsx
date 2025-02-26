import { useState, useEffect } from 'react';
import * as trackService from './services/trackService';
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying';
import './App.css';

const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [playingTrack, setPlayingTrack] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const tracks = await trackService.index();
        if (tracks.error) throw new Error(tracks.error);
        setTrackList(tracks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTracks();
  }, []);



  const handleFormView = (track) =>{
    alert(track.artist)
    if (!track.artist) setSelected(null)
    else setSelected(track)
    setIsFormOpen(!isFormOpen)
  }
  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData)

      if(newTrack.error) throw new Error(newTrack.error)

      setTrackList([...trackList, newTrack])
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateTrack = async (id, formData) => {
    try {
      const updatedTrack = await trackService.update(id, formData)

      if(updatedTrack.error) throw new Error(updatedTrack.error)

      const updatedList = trackList.map( (track) => {
        if(track._id === updatedTrack._id){
          return updatedTrack
        }

        return track
      })

      setSelected(updatedTrack)
      setTrackList(updatedList)
      setIsFormOpen(false)

    } catch (error) {
      console.log(error)
    }
  }

const handleRemoveTrack = async (id) => {
  try {
    const response = await trackService.deleteTrack(id)
  if(response.error) throw new Error (response.error)
  const newTrackList = trackList.filter((track)=>track._id!==id)
  setTrackList(newTrackList)
  setSelected(false)
  } catch (error) {
    console.log(error);
  }}


  const handlePlayTrack = (track) => {
    setPlayingTrack(track)
  }
  return (
    <div className="app-container">
      <TrackList
        updateSelected={setSelected}
        trackList={trackList}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
        handleRemoveTrack={handleRemoveTrack}
       
        handleUpdateTrack={handleUpdateTrack}
        handlePlayTrack={handlePlayTrack}
        
      />
      {isFormOpen && <TrackForm  handleAddTrack={handleAddTrack} selected={selected} handleUpdateTrack={handleUpdateTrack}/>}
      <NowPlaying playingTrack={playingTrack} />
    </div>
  );
};
export default App;