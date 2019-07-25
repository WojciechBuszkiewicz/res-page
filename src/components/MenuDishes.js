import React from 'react'
import Dish from './Dish'

const MenuDishes = (props) => {
    const dishes = props.dishes.map(item => <Dish key={item.url} dish={item} />)

    if (!dishes) {
        return <div>Can't find</div>
    }
    return (

        <div className="menu-dishes">
            {dishes}
        </div>
    );
}

export default MenuDishes;