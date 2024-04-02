/* eslint-disable react/prop-types */
import TrackList from "../Tracklist/Tracklist";

const SearchResults = (props) => {

    return (
        <div className="search-results p-4 h-fit w-full bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 shadow-lg">
            <TrackList
                tracks={props.searchResults}
                onAdd={props.onAdd} 
                isRemoval={false}/>
        </div>
    )
}

export default SearchResults;
