import { useState } from "react";
import '../css/SearchBar.css';

// eslint-disable-next-line react/prop-types
function SearchBar( {onSubmit} ) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label >Enter Serach</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;