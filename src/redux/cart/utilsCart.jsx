export const agregarCarrito = (cart, product) => {
    const exists = cart.find(item => item.id == product.id);
    
    if (exists) {
        return cart.map(item =>
            item.id === exists.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
        );
    }

    return [...cart, { ...product, quantity: 1 }];
};

export const removerCarrito = (cart, product) => {
    console.log(product)
    const exists = cart.find(item => item.id === product.id);

    if (exists && exists.quantity > 1) {
        return cart.map(item =>
            item.id === exists.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                }
                : item
        );
    }
    return cart.filter(item => product.id !== item.id);
}