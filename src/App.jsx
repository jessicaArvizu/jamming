import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'
import Spotify from './utils/Spotify'
import { useCallback, useState } from 'react'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  return (
    <div className='bg-very-dark-blue text-snow bg-hero-pattern h-screen p-10'>
      <header className='mb-6 flex justify-center'>
        <SearchBar onSearch={search} />
      </header>
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-2 text-snow">
        <div>
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
        </div>
        <div>
          <Playlist />
        </div>
      </main>
    </div>
  )
}

export default App
