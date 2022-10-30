import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import {useSelector, useDispatch} from 'react-redux'
import {setCurrPage} from "../../redux/slices/paginationSlice";

export const Pagination = () => {
    const dispatch = useDispatch()
    const totalPage = useSelector(state => state.pagination.total)

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(page) => dispatch(setCurrPage(page.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={totalPage}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />);
};
