const CakeComponent = ({name, ingredients, price, rating}) => {
    const cakeId = name.toLowerCase().replace(" ", "-");
    return (
        <div id={cakeId}>
            <h3>{name}</h3>
            <p>Ingredients: {ingredients.join(", ")}</p>
            <p>Price: £{price.toFixed(2)}</p>
            <p>Rating: {rating.toFixed(1)}</p>
        </div>
    );
}

export default CakeComponent;