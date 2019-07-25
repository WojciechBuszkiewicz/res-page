import React, { Component } from 'react'
import { pageContext } from './context'


class SingleDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: this.props.match.params.path,
        }
    }

    static contextType = pageContext;

    ingredientsList(ingredient) {
        return ingredient.map(item => <li key={item}>{item}</li>)
    }

    render() {
        const dish = this.context.getDish(this.state.path);




        if (!dish)
            return (
                <div>
                    Not found
                </div>
            );


        const {
            name,
            price,
            ingredients,
            img,
            text,
        } = dish;

        return (
            <div className="single-dish-wrapper">
                <div className="single-dish-text">
                    <h3>{name}</h3>
                    <div></div>
                    <div className='price-wrapper'>
                        <h4>Price:<br />
                            {price}$</h4>
                    </div>
                    <h4>Ingredients:</h4>
                    <ul>
                        {this.ingredientsList(ingredients)}
                    </ul>
                    <p>{text}</p>
                </div>
                <div className="single-disc-img">
                    <img src={img} alt={name} />
                </div>
            </div>
        );
    }
}

export default SingleDish;