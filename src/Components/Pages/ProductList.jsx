import React from 'react';
import all_product from '../all_product';
import { Items } from '../Items/Items';

const ProductList = ({ category }) => {
    const filteredProducts = all_product.filter(product => product.category === category);

    return (
        <div className="collection">
            {filteredProducts.map((item, i) => (
                <Items
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ))}
        </div>
    );
};

export default ProductList;
