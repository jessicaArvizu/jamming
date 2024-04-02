import PropTypes from 'prop-types';
import TrackList from "../Tracklist/Tracklist";

const SearchResults = ({searchResults, onAdd}) => {

    return (
        <div className="search-results p-4 h-fit w-full bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 shadow-lg">
            <TrackList tracks={searchResults} onAdd={onAdd}/>
        </div>
    )
}

SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
  };
  

export default SearchResults;
