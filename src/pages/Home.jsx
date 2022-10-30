import React from "react";
import Filter from "../components/Filter";
import Content from "../components/Content";
import {Pagination} from "../components/Pagination";

const Home = () => {
    window.scrollTo(0, 0);

    return (
        <div className="container">
            <Filter/>
            <h2 className="content__title">Все пиццы</h2>
            <Content />
            <Pagination />
        </div>
    );
};

export default Home;
