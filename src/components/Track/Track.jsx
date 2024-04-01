import PropTypes from 'prop-types';

const Track = ({ title, artist, album }) => {
    return (
        <div className="flex justify-between">
            <div className="w-3/4 p-2">
                <p className="font-bold">{title}</p>
                <p className="font-light ml-2">{artist} -
                    <span className="font-thin"> {album}</span>
                </p>
            </div>
            <div className="w-1/4 p-2 flex justify-center items-center">
                <button className="rounded-full py-2 px-4 bg-snow text-mauveine font-bold">
                    +
                </button>
            </div>
        </div>
    )
}


Track.propTypes = {
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired
};

export default Track;
