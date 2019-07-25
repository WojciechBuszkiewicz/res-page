import React from 'react'
import { Link } from 'react-router-dom'

const Dish = (props) => {
    const { name, url, img, price } = props.dish;

    return (
        <div className="dish-wrapper">
            <div className="img-dish-wrapper">
                <img src={img} alt={name} />
            </div>
            <h4>{name}</h4>
            <span className="price-top">{price}$</span>
            <button><Link to={`/menu/${url}`}>Check offer</Link></button>
        </div>
    );
}

export default Dish;