import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {setSearch} from "../../redux/slices/filterSlice";

import styles from "./Search.module.scss";

const Search = () => {

    const dispatcher = useDispatch()
    const search = useSelector(state => state.filter.search)

    return (
        <div className={styles.root}>
            <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <defs>
                    <style>{".cls-1{fill:#232323;}"}</style>
                </defs>
                <path
                    className="cls-1"
                    d="M18.856,14.624a10.022,10.022,0,1,0-4.234,4.234l4.254,4.255a2.994,2.994,0,1,0,4.239-4.23ZM2,10a8,8,0,1,1,8,8A8.009,8.009,0,0,1,2,10ZM21.7,21.708a1,1,0,0,1-1.4,0l-3.967-3.968a10.092,10.092,0,0,0,1.4-1.406L21.705,20.3a.976.976,0,0,1-.009,1.407Z"
                />
                <path
                    className="cls-1"
                    d="M10,4a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0,4,4,0,0,1,4-4,1,1,0,0,0,0-2Z"
                />
            </svg>
            <input
                value={search}
                onChange={(event) => dispatcher(setSearch(event.target.value))}
                className={styles.search}
                placeholder="Поиск пиццы ... "
            />
            {search && (
                <svg
                    className={styles.cross}
                    onClick={() => dispatcher(setSearch(''))}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 48 48"
                    width="48"
                >
                    <path
                        d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/>
                    <path d="M0 0h48v48H0z" fill="none"/>
                </svg>
            )}
        </div>
    );
};

export default Search;
