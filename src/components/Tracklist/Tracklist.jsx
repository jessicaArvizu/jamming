import PropTypes from 'prop-types';
import Track from '../Track/Track';

const TrackList = (props) => {
  return (
    <div className="TrackList">
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  isRemoval: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default TrackList;
