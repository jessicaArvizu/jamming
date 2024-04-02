/* eslint-disable react/prop-types */
import { useCallback } from 'react';

const Track = (props) => {
    const addTrack = useCallback(() => {
       props.onAdd(props.track);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onAdd, props.track, props]);

    const removeTrack = useCallback(() => {
        props.onRemove(props.track);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onRemove, props.track, props]);

    const renderAction = () => {
        if (props.isRemoval) {
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
                <p className="font-bold">{props.track.name}</p>
                <p className="font-light ml-2">{props.track.artist} -
                    <span className="font-thin"> {props.track.album}</span>
                </p>
            </div>
            <div className="w-1/4 p-2 flex justify-center items-center">
                {renderAction()}
            </div>
        </div>
    );
};

export default Track;
