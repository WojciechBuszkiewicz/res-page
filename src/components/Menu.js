import React from 'react'
import MenuForm from './MenuFrom'
import MenuDishes from './MenuDishes'
import { PageConsumer } from './context'

const Menu = () => {

    return (
        <PageConsumer>
            {
                (context) => {
                    return (
                        <div className='menu-wrapper'>
                            <MenuForm dishes={context.state} handleChange={context.handleChange} />
                            <MenuDishes dishes={context.state.sortedDishes} />
                        </div>
                    );
                }
            }

        </PageConsumer>




    );
}

export default Menu;