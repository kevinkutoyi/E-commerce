import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';

import {useDispatch} from 'react-redux';
import {addCart} from '../redux/action';
// import { NavLink } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import "react-loading-skeleton/dist/skeleton.css";
// import Skeleton from 'react-loading-skeleton';

const Product =() => {

    const {id} = useParams();
    const [product, setProduct] = useState([0]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    useEffect(() => {
        const getProduct = async() => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [id]);
    
   

    const Loading = () => {
        return(
            <>
            Loading....
            </>
        )
    }
    
    const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt = {product.title} 
                height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star"></i>
                </p>
                <h3 className='display-6 fw-bold my-5'>
                    ${product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" 
                onClick={()=>addProduct(product)}>
                    Add to Cart
                </button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                    Go to Cart
                </NavLink>
            </div>

            </>
        )
    }

    return ( 
        <div>
        <div className="container">
            <div className="row">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
            {/* <div className="row">
                 {<ShowProduct/>}
            </div> */}
        </div>

        </div>
     );
}


export default Product;