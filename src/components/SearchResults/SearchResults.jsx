/* eslint-disable react/prop-types */
import TrackList from "../Tracklist/Tracklist";

const SearchResults = (props) => {
    return (
        <div className="search-results p-6 h-fit w-full bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 shadow-lg">
            {props.searchResults.length === 0 ? (
                <p className="text-center">Search for new songs!</p>
            ) : (
                <TrackList
                    tracks={props.searchResults}
                    onAdd={props.onAdd} 
                    isRemoval={false}
                />
            )}
        </div>
    );
}

export default SearchResults;
