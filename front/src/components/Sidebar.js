import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../store/actions/categoriesActions";

const Sidebar = ({className}) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    return (
        <aside className={className}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>All</NavLink>
                    </li>
                    {categories.map(category => {
                        const link = '/category/' + category._id;
                        return (
                            <li key={category._id}>
                                <NavLink to={link}>{category.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
