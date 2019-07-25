import React, { Component } from 'react'
import items from './menuItems'
import gallery from './galleryimgs'

const pageContext = React.createContext();

class PageProvider extends Component {

    state = {
        dishes: [],
        sortedDishes: [],
        featuredDishes: [],
        loading: true,
        select: 'all',
        featured: false,
        minPrice: 0,
        maxPrice: 1,
        price: 0,
        galleryImgs: [],

    }

    componentDidMount() {
        const dishes = items
        const featuredDishes = dishes.filter(item => item.featured === true);
        const maxPrice = Math.ceil(Math.max(...dishes.map(item => item.price)))
        const galleryImgs = gallery;

        this.setState({
            sortedDishes: dishes,
            featuredDishes,
            dishes: dishes,
            loading: false,
            price: maxPrice,
            maxPrice,
            galleryImgs,

        })
    }

    getDish(path) {
        let dishes = [...this.state.dishes];
        return dishes.find(item => item.url === path)
    }

    filterDishes() {
        let sortedDishes = [...this.state.dishes]
        if (this.state.select !== 'all') {
            sortedDishes = sortedDishes.filter(item => item.type === this.state.select)
        }

        sortedDishes = sortedDishes.filter(item => this.state.price >= item.price)
        if (this.state.featured) sortedDishes = sortedDishes.filter(item => this.state.featured === item.featured);
        this.setState({
            sortedDishes
        })
    }

    handleChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [`${event.target.name}`]: value,
        }, this.filterDishes)
    }

    render() {

        return (
            <pageContext.Provider value={{
                state: this.state,
                getDish: this.getDish,
                handleChange: this.handleChange
            }} >
                {this.props.children}
            </ pageContext.Provider >
        );
    }
}

const PageConsumer = pageContext.Consumer;

export { pageContext, PageProvider, PageConsumer };