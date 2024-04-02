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
        backdrop-blur-md bg-opacity-40 shadow-lg p-4">
            <div className='flex flex-row justify-between'>
                <input
                    onChange={handleNameChange}
                    className="bg-white/30 text-snow text-sm rounded-lg 
                    focus:ring-blue-grey focus:border-blue-grey block
                    p-2.5 placeholder:text-snow shadow-xl"
                    style={{ width: '75%' }} // 3/4 width
                    placeholder='Playlist name'
                    defaultValue={"New Playlist name..."}
                />
                <button className="bg-dark-blue py-2 px-6 
            rounded-full ml-4 shadow-xl font-bold"
                    style={{ width: '25%' }} // 1/4 width
                    onClick={props.onSave}>
                    SAVE TO SPOTIFY
                </button>
            </div>

            <TrackList
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />

        </div>
    );
};

export default Playlist;
