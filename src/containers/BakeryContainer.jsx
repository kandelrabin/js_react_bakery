import CakeComponent from "../components/CakeComponent";
import { useState } from "react";

const BakeryContainer = () => {
    
    const [cakes, setCakes] = useState(
        [
            // Victora Sponge
            {
                cakeName: "Victoria Sponge",
                   ingredients: [
                       "eggs",
                      "butter",
                      "sugar",
                          "self-raising flour",
                      "baking powder",
                      "milk"
                  ],
                  price: 5,
                    rating: 5
            },
        
            // Tea Loaf
            {
                 cakeName: "Tea Loaf",
                   ingredients: [
                       "eggs",
                      "oil",
                      "dried fruit",
                          "sugar",
                      "self-raising flour",
                      "strong tea",
                  ],
                  price: 2,
                  rating: 3
            },
        
            // Carrot Cake
            {
                 cakeName: "Carrot Cake",
                   ingredients: [
                        "carrots",
                          "walnuts",
                      "oil",
                          "cream cheese",
                          "flour",
                      "sugar",
                   ],
                   price: 8,
                   rating: 5
            }
        ] 
    );
    
    const averageRating = ((cakes[0].rating + cakes[1].rating + cakes[2].rating) / 3);

    const [victoriaSpongeCounter, setvictoriaSpongeCounter] = useState(0);
    const [teaLoafCounter, setTeaLoafCounter] = useState(0);
    const [carrotCakeCounter, setCarrotCakeCounter] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    return (
        <>
            <h2>Cakes:</h2>
            <hr />
            <section className="cake">
                <CakeComponent cake = {cakes[0]} quantity = {victoriaSpongeCounter} countClick = {setvictoriaSpongeCounter} totalValue = {totalValue} sellClick = {setTotalValue}/>

                <CakeComponent cake = {cakes[1]} quantity = {teaLoafCounter} countClick={setTeaLoafCounter} totalValue = {totalValue} sellClick = {setTotalValue}/>

                <CakeComponent cake = {cakes[2]} quantity={carrotCakeCounter} countClick={setCarrotCakeCounter} totalValue = {totalValue} sellClick = {setTotalValue}/>
            </section>
            <hr />
            

            <p>Average rating: {averageRating.toFixed(1)}</p>
            <hr />
            <p id="total">Total value: £{totalValue.toFixed(2)}</p>
        </>
    );
}

export default BakeryContainer;