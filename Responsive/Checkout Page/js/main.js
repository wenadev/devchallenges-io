let addButtons = Array.from(document.querySelectorAll(".add"));
let removeButtons = Array.from(document.querySelectorAll(".remove"));

//get amount of item witihin span element
let span = Array.from(document.querySelectorAll(".span-amount"));

let submitButton = document.querySelector("button");

addButtons.forEach((addButton)=>{
    //listen for click to increase amount
    addButton.addEventListener("click", ()=>{
        span.forEach((itemQuantity)=>{
            //check that amount to be increased in html body must match the attributes of button group
            if (itemQuantity.dataset.name === addButton.dataset.name){
                if (Number(itemQuantity.innerHTML) >= 0 && itemQuantity.innerHTML <= 50){
                    
                    let increaseButton = Number(itemQuantity.innerHTML) + 1;
                    if(increaseButton <= 50){
                        itemQuantity.innerHTML = increaseButton;
                    }
                }
                else if(Number(itemQuantity.innerHTML) === 50){
                    alert("Number of items on a product cannot exceed 50")
                }
            }
        })
    });
});

removeButtons.forEach((removeButton)=>{
    removeButton.addEventListener("click", ()=>{
            span.forEach((itemQuantity)=>{
                //check that amount to be decreased in html body must match the attributes of button group
               if (itemQuantity.dataset.name === removeButton.dataset.name){
                if (Number(itemQuantity.innerHTML) ==  1){
                    alert("Your items must count at least 1!")
                }

                else{
                    if (Number(itemQuantity.innerHTML) <= 50 && Number(itemQuantity.innerHTML > 0)){
                        let decreaseButton = Number(itemQuantity.innerHTML) - 1;
    
                        if(decreaseButton >= 1){
                            itemQuantity.innerHTML = decreaseButton;
                        }
                    }
                }
               }
           })
    });
});

function checkform(form) {
    // get all the inputs within the submitted form
    var inputs = Array.from(document.querySelectorAll('input'));

    //get input[select] for countries within the submitted form
    var select = document.querySelector('select');

    console.log(inputs)
    for (var i = 0; i < inputs.length; i++) 
        {
            // only validate the inputs that have the required attribute
            if(inputs[i].value === "" || select.value == "")
            {
                // found an empty field that is required
                return false;
            }
        }
    return true;
}

submitButton.addEventListener("click", ()=>{
    if(checkform() == true){
        alert("Form successfully completed")
    }
    else{
        alert("Please fill all required fields");
    }
    
})