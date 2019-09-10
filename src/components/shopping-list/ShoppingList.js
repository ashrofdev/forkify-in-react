import React from 'react'
import './shopping.css'

const ShoppingList = ({shoppingList}) => {
    const ing = shoppingList.map((e, i) => {
        return (
            <div className="shop-list">
                <p>{'* '+e}</p>
            </div>
        )
    });
    return (
        <div className="shopping">
            <div className="item">{ing}</div>
        </div>
    )
}
export default ShoppingList