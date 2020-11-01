//web view cooking duration
let cookingHow = document.querySelector("#cooking-how");

//mobile view cooking duration
let mobilecookingHow = document.querySelector(".mobile.cooking-how");

//div to hold the ingredients
let displayIngredients = document.querySelector(".display-ingredients");

//div to hold the instructions
let recipeInstructions = document.querySelector(".recipe-instructions");

( insertIngredients = () =>{
    let ingredients =[
        //ingredients markup
        `<div class="ingredient-details">
            <p>Graham Cracker Crust</p>

            <div class="ingredient-group">
                <input type="checkbox" id="ingredient-one" name="ingredient-one" value="graham cracker crumbs">
                <label for="ingredient-one"> 1 and 1/2 cups (150g) <span style= "font-weight: 700;">graham cracker crumbs</span> (about 10 full sheet graham crackers)</label><br>
            </div>
            
            <div class="ingredient-group">
                    <input type="checkbox" id=" ingredient-two" name=" unsalted butter" value="Car">
                    <label for=" unsalted butter<"> 5 Tablespoons (70g) <span style= "font-weight: 700;"> unsalted butter</span>, melted</label><br>
            </div>
            
            <div class="ingredient-group">
                    <input type="checkbox" id="ingredient-three" name="granulated sugar" value="granulated sugar">
                    <label for="granulated sugar"> 1/4 cup (50g) <span style= "font-weight: 700;">  granulated sugar</span></label><br>
            </div>
        </div>`
    
    ,

        `<div class="ingredient-details">                
            <p>Chocolate</p>

            <div class="ingredient-group">
                <input type="checkbox" id="ingredient-four" name="cream cheese" value="cream cheese">
                <label for="cream cheese">four 8-ounce blocks (904g) full-fat <span style= "font-weight: 700;"> cream cheese</span>, softened to room temperature</label><br>
            </div>

            <div class="ingredient-group">
                <input type="checkbox" id=" ingredient-five" name="granulated sugar" value="granulated sugar">
                <label for=" unsalted butter">1 cup (200g) <span style= "font-weight: 700;"> granulated sugar</span></label><br>
            </div>

            <div class="ingredient-group">
                <input type="checkbox" id="ingredient-six" name="sour cream" value="sour cream">
            <label for="sour cream"> 1 cup (240g) full-fat <span style= "font-weight: 700;"> sour cream</span>, at room temperature</label><br>
            </div>

            <div class="ingredient-group">
                <input type="checkbox" id="ingredient-seven" name="pure vanilla extract" value="pure vanilla extract">
                <label for="pure vanilla extract"> 1 teaspoon <span style= "font-weight: 700;"> pure vanilla extract</span></label><br>
            </div>

            <div class="ingredient-group">
                <input type="checkbox" id="ingredient-eight" name="fresh lemon juice" value="fresh lemon juice">
                <label for="fresh lemon juice"> 2 teaspoons <span style= "font-weight: 700;">fresh lemon juice </span>(optional, but recommended)</span></label><br>
            </div>

            <div class="ingredient-group">
                <input type="checkbox" id="ingredient-nine" name="eggs" value="eggs">
                <label for="eggs"> 3 large <span style= "font-weight: 700;">eggs</span>, at room temperature</label><br>
            </div>
            
            <div class="ingredient-group">
                <input type="checkbox" id="ingredient-ten" name="suggestions" value="suggestions">
                <label for="suggestions">topping suggestions:  <span style= "font-style: italic; font-weight:500">salted caramel, lemon curd, strawberry topping, chocolate ganache, 
                red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</span> (recipe in notes)</label><br>
            </div>
        </div>`
    ];
    
    ingredients.forEach((ingredient)=>{
        //display ingredients
        displayIngredients.insertAdjacentHTML('beforeend', ingredient);
    })
})();

(   insertInstructions = ()=>{
    //instruction markup
    let instructions = [
        `<div class="instruction-details">
            <h4>1</h4>
            <p>Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).</p>
        </div>`
        
        ,

        `<div class="instruction-details">
            <h4>2</h4>
            <p><span style= "font-weight: 700;">Make the crust:</span> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. 
                (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch 
                springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven 
                and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.</p>
        </div>`
        
        ,

        `<div class="instruction-details">
            <h4>3</h4>
            <p><span style= "font-weight: 700;">Make the filling:</span>Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a 
                large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, 
                beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing 
                the batter as best you can.</p>
        </div>`
        
        ,

        `<div class="instruction-details">
            <h4>4</h4>
            <p><span style= "font-weight: 700;">Prepare the simple water bath (see note):</span> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use 
                an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into 
                an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water 
                in. Whichever is easier for you.)</p>
        </div>`
          
        ,

        `<div class="instruction-details">
            <h4>5</h4>
            <p>Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door 
                slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the 
                cheesecake for at least 4 hours or overnight.</p>
         </div>`

         ,

         `<div class="instruction-details">
            <h4>6</h4>
            <p>Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip 
                into warm water between each slice.</p>
        </div>`

        ,

        `<div class="instruction-details">
            <h4>7</h4>
            <p>Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.</p>
        </div>`
    ];

    instructions.forEach((instructionMarkup)=>{
        //display instructions
        recipeInstructions.insertAdjacentHTML('beforeend', instructionMarkup);
    });
})();


let resizeEvents = ()=>{
    if(window.innerWidth <= 811){
        //web cooking time hides and mobile cooking time displays
        mobilecookingHow.style.display="flex";
        cookingHow.style.display="none";
    }
    
    else if(window.innerWidth > 811){
        //web cooking time comes into view and mobile cooking time hides
        mobilecookingHow.style.display="none";
        cookingHow.style.display="initial";
    }
}

window.addEventListener('resize', resizeEvents);
window.onbeforeunload = resizeEvents();