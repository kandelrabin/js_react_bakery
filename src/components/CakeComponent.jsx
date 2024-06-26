const CakeComponent = ({name, ingredients, price, rating}) => {
    return (
        <>
            <h3>{name}</h3>
            <p>Ingredients: {ingredients.join(", ")}</p>
            <p>Price: £{price.toFixed(2)}</p>
            <p>Rating: {rating.toFixed(1)}</p>
            <hr />
        </>
    );
}

export default CakeComponent;