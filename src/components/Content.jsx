import PizzaBlock from "./PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";
import React from "react";
import {useSelector} from 'react-redux'

function Content() {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const filter = useSelector(state => state.filter)
    const category = filter.categoryId
    const typeSort = filter.sort.type
    const search = filter.search

    const page = useSelector(state => state.pagination.curr)

    React.useEffect(() => {
        const items_link = `https://6353c2ebe64783fa82783d44.mockapi.io/items?${
            category > 0 ? `category=${category}` : ""
        }&sortBy=${typeSort}&${
            search.length > 0 ? `search=${search}` : ""
        }&page=${page}&limit=8`;
        setIsLoading(true);
        fetch(items_link)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setIsLoading(false);
                setItems(json);
            });
    }, [category, typeSort, search, page]);

    return (
        <div className="content__items">
            {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
    );
}

export default Content;
