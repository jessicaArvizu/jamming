import Track from "../Track/Track";

const SearchResults = () => {
    const trackList = [
        { title: 'Birds', artist: 'Imagine Dragons', album: 'Evolve' },
        { title: 'Hopeless Opus', artist: 'Image Dragons', album: 'Smoke + Mirrors' },
        { title: 'Demons', artist: 'Imagine Dragons', album: 'Night Visions' },
        { title: 'Thief', artist: 'Image Dragons', album: 'Smoke + Mirrors' },
    ];

    return (
        <div className="search-results p-4 h-fit w-full bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 shadow-lg">
            {trackList.map((track, index) => (
                <div key={index}>
                    <Track title={track.title} artist={track.artist} album={track.album} />
                    {index !== trackList.length - 1 && <hr className="my-2 border-snow" />}
                </div>
            ))}
        </div>
    )
}

export default SearchResults;
