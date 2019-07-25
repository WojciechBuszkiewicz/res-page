import React from 'react'

const findUniqueValue = (items, type) => {
    return [...new Set(items.map(item => item[type]))]
}

const MenuForm = (props) => {
    const { dishes, type, price, minPrice, maxPrice, featured } = props.dishes;

    let types = findUniqueValue(dishes, 'type');
    types = ['all', ...types]
    types = types.map((item, index) => <option value={item} key={index}>{item}</option>)

    return (
        <form className="menu-form">
            <div className="input-wrapper">
                <label htmlFor='select'>Type</label> <br />

                <select name='select' id='select' value={type} onChange={props.handleChange}>
                    {types}
                </select>

            </div>
            <div className="input-wrapper">
                <label htmlFor='price'>Price: {price}$</label><br />
                <input onChange={props.handleChange} step="0.1" type='range' name='price' id='price' min={minPrice} max={maxPrice} value={price} />
            </div>
            <div className="input-wrapper">
                <label htmlFor='checkbox'>Featured</label><br />
                <input onChange={props.handleChange} type='checkbox' name='featured' id='checkbox' checked={featured} />
            </div>


        </form>
    );
}

export default MenuForm;