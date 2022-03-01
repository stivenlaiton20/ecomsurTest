import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import convertSpacesWithSimbol from '../../utils/convertSpacesWithSimbol'
import { useDispatch } from 'react-redux'

import { set } from '../../redux/product-modal/productModalSlice'
import './product-card.scss'
const ProductCard = props => {
    const dispatch = useDispatch()

    const baselink = 'http://127.0.0.1:5000/'

    
    
    return (
        <div className="product-card">
            <Link to={`/producto/${props.category}/${props.brand}/${props._id}`}>
                <div className="product-card__image">
                    <img src={`${baselink}${props.image}`} alt="" />
                    
                </div>
                <h3 className="product-card__name">{props.name}</h3>
                <strong>
                         Stock({props.countInStock})
                </strong>
                <p className="product-card__description">{props.description}</p>
                <div className="product-card__price">
                    {props.price}
                    <span className="product-card__price__old">
                        <del>{props.price + props.price * 0.07 } </del>
                    </span>

                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    stockValidation={props.countInStock}
                    size="sm" 
                    onClick={() => dispatch(set(props.countInStock))}
                >
                    Añadir al Carrito
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    _id: PropTypes.number,
    countInStock: PropTypes.number,
    description: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default ProductCard
