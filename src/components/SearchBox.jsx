import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../redux/filtersSlice';
import css from './SearchBox.module.css';
const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value.toLowerCase()));
    };
    return (
        <input
            type="text"
            value={filter}
            onChange={handleChange}
            placeholder="Ara..."
            className={css.input}
        />
    )
}

export default SearchBox
