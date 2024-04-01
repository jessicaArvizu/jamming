import Track from "../Track/Track";

const SearchResults = () => {
    return (
        <div className="search-results p-4 h-fit w-full bg-purple-400 rounded-md bg-clip-padding
         backdrop-filter backdrop-blur-md bg-opacity-20 shadow-lg">
            <h1>Search Result component</h1>
            <p>Here, the tracklist component populated with tracks will show</p>
            <Track title={'Birds'} artist={'Imagine Dragons'} album={'Evolve'}/>
        </div>
    )
}

export default SearchResults;