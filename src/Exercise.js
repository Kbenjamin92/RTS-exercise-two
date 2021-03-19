import React, { useState } from 'react'

const Exercise = () => {
    const [cart, setCart] = useState([])
    const [inventory, setInventory] = useState(['shoes', 'shirt', 'pants'])
    
    const addToCart = (inventoryItem) => {
        const removeItemFromInventory = inventory.filter(item => item !== inventoryItem)
        setInventory([...removeItemFromInventory])

        const addItem = inventory.filter(item => item === inventoryItem)
        setCart([...cart, addItem])
    }

    const removeFromCart = (cartItem) => {
        const removeItemFromCart = cart.filter(item => item !== cartItem)
        setCart([...removeItemFromCart])

        const addItemToInventory = cart.filter(item => item === cartItem)
        setInventory([...inventory, addItemToInventory])
    }
    // map over inventory to render data on the page
    const mapInventory = inventory.map((item, key) => {
        return (
            <div key={key}>
                <li style={{listStyle: 'none'}}>{item}<span><button onClick={() => addToCart(item)}>Add to cart</button></span></li>
            </div>
        )
    })
    // map over cart to render data on the page
    const mapCart = cart.map((item, key) => {
        return (
            <div key={key}>
                <li style={{listStyle: 'none'}}>{item}<span><button onClick={() => removeFromCart(item)}>Remove</button></span></li>
            </div>
        )
    })

    return (
        <div>
            <h1>Inventory</h1>
           {mapInventory}
           <h1>Cart</h1>
           {mapCart}
        </div>
    )
}

export default Exercise