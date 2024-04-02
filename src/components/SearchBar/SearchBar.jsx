import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
      setTerm(event.target.value);
    }, []);
  
    const search = useCallback(() => {
      onSearch(term);
    }, [onSearch, term]);

    return (
        <div className="search-bar h-fit w-fit p-4 px-10 flex">
            <input
                type="text"
                id="song_name"
                className="bg-white/30 text-snow text-sm rounded-lg 
                focus:ring-blue-grey focus:border-blue-grey block w-full 
                p-2.5 placeholder:text-snow w-[400px] shadow-xl"
                placeholder="Enter a song title"
                required
                onChange={handleTermChange} />
            <button
                className="bg-dark-blue py-2 px-6 
            rounded-full ml-4 shadow-xl font-bold"
                onClick={search}>
                SEARCH
            </button>
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBar;
