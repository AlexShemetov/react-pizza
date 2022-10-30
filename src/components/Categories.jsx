import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {setCategoryId} from "../redux/slices/filterSlice";

function Categories() {

    const dispatcher = useDispatch()
    const categoryId = useSelector(state => state.filter.categoryId)
    
    const categories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((value, i) => (
                    <li
                        key={i}
                        onClick={() => dispatcher(setCategoryId(i))}
                        className={categoryId === i ? "active" : ""}
                    >
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
