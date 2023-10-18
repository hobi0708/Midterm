import React, { useState } from 'react';

function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        alert(JSON.stringify(product, null, 2));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={product.name}
                    onChange={e => setProduct({ ...product, name: e.target.value })}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    type="text"
                    value={product.description}
                    onChange={e => setProduct({ ...product, description: e.target.value })}
                />
            </div>
            <div>
                <label>Category</label>
                <input
                    type="text"
                    value={product.category}
                    onChange={e => setProduct({ ...product, category: e.target.value })}
                />
            </div>
            <div>
                <label>Quantity</label>
                <input
                    type="number"
                    value={product.quantity}
                    onChange={e => setProduct({ ...product, quantity: e.target.value })}
                />
            </div>
            <div>
                <label>Price</label>
                <input
                    type="number"
                    value={product.price}
                    onChange={e => setProduct({ ...product, price: e.target.value })}
                />
            </div>
            <button type="submit">SUBMIT</button>
            <button type="button" onClick={() => setProduct({ name: '', description: '', category: '', quantity: '', price: '' })}>
                CANCEL
            </button>
        </form>
    );
}

export default AddProduct;
