/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import TrackList from '../Tracklist/Tracklist';

const Playlist = (props) => {
    const handleNameChange = useCallback((e) => {
        props.onNamechange(e.target.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onNamechange]);

    return (
        <div className="h-fit w-full bg-purple-400 
        rounded-md bg-clip-padding backdrop-filter 
        backdrop-blur-md bg-opacity-40 shadow-lg p-4 text-center">
            <input
                onChange={handleNameChange}
                className="bg-white/30 text-snow text-sm rounded-lg 
                    focus:ring-blue-grey focus:border-blue-grey block w-full 
                    p-2.5 placeholder:text-snow w-[300px] mb-10 shadow-xl mx-auto"
                placeholder='Playlist name'
                defaultValue={"New Playlist"}
            />

            <TrackList
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className="bg-dark-blue py-2 px-6 
            rounded-full ml-4 shadow-xl font-bold"
                onClick={props.onSave}>
                SAVE TO SPOTIFY
            </button>
        </div>
    );
};

export default Playlist;
