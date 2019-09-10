import React from 'react'
import './shopping.css'

const onRemove = (e) => {
    e.target.parentElement.remove()
}

const ShoppingList = ({shoppingList}) => {
    const ing = shoppingList.map((e, i) => {
        return (
            <div className="shop-list">
                <p>{e}</p>
                <span onClick={onRemove}>X</span>
            </div>
        )
    });
    return (
        <div className="shopping">
            <h3>SHOPPING LIST</h3>
            <div className="item">{ing}</div>
        </div>
    )
}
export default ShoppingList