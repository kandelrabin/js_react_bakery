import CakeComponent from "../components/CakeComponent";
import { useState } from "react";

const BakeryContainer = () => {
    const victoriaSpongePrice = 5;
    const victoriaSpongeRating = 5;
    const teaLoafPrice = 2;
    const teaLoafRating = 3;
    const carrotCakePrice = 8;
    const carrotCakeRating = 1;
    const averageRating = ((victoriaSpongeRating + teaLoafRating + carrotCakeRating) / 3);

    const [victoriaSpongeCounter, setvictoriaSpongeCounter] = useState(0);
    const [teaLoafCounter, setTeaLoafCounter] = useState(0);
    const [carrotCakeCounter, setCarrotCakeCounter] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    return (
        <>
            <h2>Cakes:</h2>
            <hr />
            <section className="cake">
                <CakeComponent name = {"Victoria Sponge"} ingredients = {["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"]} price = {victoriaSpongePrice} rating = {victoriaSpongeRating} quantity = {victoriaSpongeCounter} countClick = {setvictoriaSpongeCounter} totalValue = {totalValue} sellClick = {setTotalValue}/>

                <CakeComponent name = {"Tea Loaf"} ingredients = {["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"]} price = {teaLoafPrice} rating = {teaLoafRating} quantity = {teaLoafCounter} countClick={setTeaLoafCounter} totalValue = {totalValue} sellClick = {setTotalValue}/>

                <CakeComponent name = {"Carrot Cake"} ingredients = {["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"]} price = {carrotCakePrice} rating = {carrotCakeRating} quantity={carrotCakeCounter} countClick={setCarrotCakeCounter} totalValue = {totalValue} sellClick = {setTotalValue}/>
            </section>
            <hr />
            

            <p>Average rating: {averageRating.toFixed(1)}</p>
            <hr />
            <p id="total">Total value: £{totalValue.toFixed(2)}</p>
        </>
    );
}

export default BakeryContainer;