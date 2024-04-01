import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'

function App() {

  return (
    <div className='bg-very-dark-blue text-snow bg-hero-pattern h-screen p-10'>
      <header className='mb-6 flex justify-center'>
        <SearchBar />
      </header>
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-2 text-snow">
        <div>
        <SearchResults />
        </div>
        <div>
          <Playlist/>
        </div>
      </main>
    </div>
  )
}

export default App
