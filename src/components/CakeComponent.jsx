const CakeComponent = ({name, ingredients, price, rating, quantity, countClick, totalValue, sellClick}) => {
    const cakeId = name.toLowerCase().replace(" ", "-");

    const handleAddCountClick = () => {
        countClick(quantity + 1);
    };

    const handleRemoveCountClick = () => {
        if (quantity <= 0) return;
        countClick(quantity - 1);
    }

    const handleSaleClick = () => {
        sellClick(totalValue + quantity * price);
        console.log("sell price :"+totalValue + quantity * price);
    }

    return (
        <div id={cakeId}>
            <h3>{name}</h3>
            <p>Ingredients: {ingredients.join(", ")}</p>
            <p>Price: £{price.toFixed(2)}</p>
            <p>Rating: {rating.toFixed(1)}</p>
            <div id="quantity">
                <p>Quantity:{"  "+quantity}</p>
                <button onClick={handleAddCountClick}>+</button>
                <button onClick={handleRemoveCountClick}>-</button>
            </div>

            <button onClick={handleSaleClick}>sell cake</button>
        </div>
    );
}

export default CakeComponent;