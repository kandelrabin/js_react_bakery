const CakeComponent = ({cake, quantity, countClick, totalValue, sellClick}) => {
    const cakeId = cake.cakeName.toLowerCase().replace(" ", "-");

    const handleAddCountClick = () => {
        countClick(quantity + 1);
    };

    const handleRemoveCountClick = () => {
        if (quantity <= 0) return;
        countClick(quantity - 1);
    }

    const handleSaleClick = () => {
        sellClick(totalValue + quantity * cake.price);
        console.log("sell price :"+totalValue + quantity * cake.price);
    }

    return (
        <div id={cakeId}>
            <h3>{cake.cakeName}</h3>
            <p>Ingredients: {cake.ingredients.join(", ")}</p>
            <p>Price: £{cake.price.toFixed(2)}</p>
            <p>Rating: {cake.rating.toFixed(1)}</p>
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