import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getByCategory} from "../store/actions/productsActions";

const ByCategory = props => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getByCategory(props.match.params.categoryValue));
    }, [dispatch, props.match.params.categoryValue]);
    console.log(products);
    return (
        <>

        </>
    );
};

export default ByCategory;
