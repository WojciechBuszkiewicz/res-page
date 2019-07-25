import React, { Component } from 'react'
import { pageContext } from './context'
import Dish from './Dish'


class FeaturedDish extends Component {

    static contextType = pageContext;



    render() {
        let featuredDishes = [...this.context.state.featuredDishes]
        featuredDishes = featuredDishes.map(item => <Dish key={item.id} dish={item} />)
        const ranNumber = Math.floor(Math.random() * featuredDishes.length);
        const mainItem = featuredDishes.splice(ranNumber, 1);

        if (!this.context.state.featuredDishes.length) {
            return (<div>item not found</div>)
        }
        return (
            <section className="featured-products">
                <h2>Featured products</h2>
                <h4>The most frequently ordered products</h4>
                <div className="featured-dishes">
                    <div className="select-item" id="scroll">
                        {featuredDishes}
                    </div>
                    <div className="main-item">
                        {mainItem}
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedDish;