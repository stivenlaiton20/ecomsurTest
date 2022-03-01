import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'


import { useDispatch } from 'react-redux'


import Button from '../button/Button'
import './product-view.scss'

const ProductView = props => {
    const baseUrl = "http://localhost:5000"

    const dispatch = useDispatch()
    
    let product = props.product


    if (product === undefined) product = {
        _id: null,
        name: "",
        price: '',
        image: null,
        category: "",
        brand: "",
        description: ""
    }

 

    const [previewImg, setPreviewImg] = useState(product.image)

    const [descriptionExpand, setDescriptionExpand] = useState(false)


    const [countInStock, setcountInStock] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setcountInStock(countInStock + 1)
        } else {
            setcountInStock(countInStock - 1 < 1 ? 1 : countInStock - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image)
        setcountInStock(1)

    }, [product])
    const check = () => {

    }


    const addToCart = () => {
        if (check()) {
            let newItem = {
                _id: product._id,

                price: product.price,
                countInStock: product.countInStock
            }
            if (dispatch(addItem(newItem))) {
                alert('Success')
            } else {
                alert('Fail')
            }
        }
    }

    const goToCart = () => {
        if (check()) {
            let newItem = {
                _id: product._id,
                price: product.price,
                countInStock: product.countInStock
            }
            if (dispatch(addItem(newItem))) {
                dispatch(remove())
                props.history.push('/cart')
            } else {
                alert()
            }
        }
    }

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image)}>
                        <img src={`${baseUrl}${product.image}`} alt="" />
                    </div>

                </div>
                <div className="product__images__main">
                    <img src={`${baseUrl}${product.image}`} alt="" />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                    product.name
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>

                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.name}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {product.price}
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                    {product.description}
                    </div>
                    <div className="product__info__item__list">
                        
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur assumenda harum voluptatibus ex quis necessitatibus laudantium impedit quidem itaque, vero dignissimos, provident qui eligendi! Amet nesciunt mollitia eveniet aperiam culpa!
                    </div>
                    <div className="product__info__item__list">

                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Cantidad Actual en el Stock ({product.countInStock})
                    </div>
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {product.countInStock}
                        </div>
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button onClick={() => addToCart()}>Añadir al carrito</Button>
                    <Button onClick={() => goToCart()}>Ver carrito</Button>
                </div>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                {product.name}
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>

            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)
