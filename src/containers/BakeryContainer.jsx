import CakeComponent from "../components/CakeComponent";
import { useState } from "react";

const BakeryContainer = () => {
    const [victoriaSpongePrice] = useState(5);
    const [victoriaSpongeRating] = useState(5);
    const [teaLoafPrice] = useState(2);
    const [teaLoafRating] = useState(3);
    const [carrotCakePrice] = useState(8);
    const [carrotCakeRating] = useState(1);
    const averageRating = ((victoriaSpongeRating + teaLoafRating + carrotCakeRating) / 3);

    return (
        <>
            <h2>Cakes:</h2>
            <hr />
            <CakeComponent name = {"Victoria Sponge"} ingredients = {["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"]} price = {victoriaSpongePrice} rating = {victoriaSpongeRating} />

            <CakeComponent name = {"Tea Loaf"} ingredients = {["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"]} price = {teaLoafPrice} rating = {teaLoafRating} />

            <CakeComponent name = {"Carrot Cake"} ingredients = {["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"]} price = {carrotCakePrice} rating = {carrotCakeRating} />

            <p>Average rating: {averageRating.toFixed(1)}</p>
        </>
    );
}

export default BakeryContainer;