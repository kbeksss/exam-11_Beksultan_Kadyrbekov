import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSingleProduct} from "../../store/actions/productsActions";
import ImageThumbnail from "../../components/ImageThumbnail/ImageThumbnail";

const SingleProduct = props => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.singleProduct);
    useEffect(() => {
        dispatch(getSingleProduct(props.match.params.productId));
    }, [dispatch, props.match.params.productId]);
    console.log(product);
    return (
        <>
            {product ? (
                <>
                    <h2>{product.title}</h2>
                    <ImageThumbnail image={product.image}/>
                    <h3>Price: {product.price} soms</h3>
                    <p>Description: {product.description}</p>
                    <p>Owner Phone number: {product.owner.phone}</p>
                </>
            ) : null}
        </>
    );
};

export default SingleProduct;
