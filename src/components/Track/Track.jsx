import PropTypes from 'prop-types';
import { useCallback } from 'react';

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
    const addTrack = useCallback(() => {
        onAdd(track);
    }, [onAdd, track]);

    const removeTrack = useCallback(() => {
        onRemove(track);
    }, [onRemove, track]);

    const renderAction = () => {
        if (isRemoval) {
            return (
                <button
                    className="rounded-full py-2 px-4 text-snow font-bold hover:bg-white/20"
                    onClick={removeTrack}>
                    -
                </button>
            );
        }
        return (
            <button
                className="rounded-full py-2 px-4 text-snow font-bold hover:bg-white/20"
                onClick={addTrack}>
                +
            </button>
        );
    };

    return (
        <div className="flex justify-between ">
            <div className="w-3/4 p-2">
                <p className="font-bold">{track.name}</p>
                <p className="font-light ml-2">{track.artist} -
                    <span className="font-thin"> {track.album}</span>
                </p>
            </div>
            <div className="w-1/4 p-2 flex justify-center items-center">
                {renderAction()}
            </div>
        </div>
    );
};

Track.propTypes = {
    track: PropTypes.shape({
        name: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired
    }).isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    isRemoval: PropTypes.bool.isRequired
};

export default Track;
