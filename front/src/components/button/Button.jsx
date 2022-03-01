import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './button.scss'
import numberStock from '../../utils/numberStock'



const Button = props => {

    

    let stockValidate = numberStock(props.stockValidation)
    
    let classStockValidate = stockValidate ? 'btn' + stockValidate  : ''

    const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main'

    const size = props.size ? 'btn-' + props.size : ''

    const animate = props.animate ? 'btn-animate' : ''



    return (
        <button
            className={`btn ${bg} ${size} ${animate} ${classStockValidate}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            <span className="btn__txt">{props.children}</span>

        </button>
    )
}

Button.propTypes = {
    brand: PropTypes.string,
    stockValidation: PropTypes.number,
    backgroundColor: PropTypes.string,
    size: PropTypes.string,
    animate: PropTypes.bool,
    onclick: PropTypes.func
}

export default Button
