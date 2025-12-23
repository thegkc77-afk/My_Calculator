const display = document.getElementById("display");

let enter = false;

// Append numbers or operators
function appendValue(value){
    if(enter && isNumber(value)){
        display.value = "";
    }

    display.value += value;
    enter = false;
}

function isNumber(val){
    return !isNaN(val);
}

// Clear all
function clearAll(){
    display.value = "";
    enter = false;
}

// Delete one
function ClearOne(){
    display.value = display.value.slice(0, -1);
}

// Calculate
function calResult(){
    try {
        if (display.value.trim() === "") return;

        let expression = display.value.replace(/%/g, "/100");
        let result = eval(expression);

        if(!isFinite(result)){
            display.value = "Cannot divide by zero";
            return;
        }

        display.value = result;
        enter = true;
    }catch{
        display.value = "Error";
        enter = false;
    }
}

document.addEventListener("keydown", function (e){
    if(e.key === "Enter"){
        e.preventDefault();
        calResult();
    }
});

// document.addEventListener("Keydown", function (e){
//     if(e.key === "Backspace"){
//     e.preventDefault();
//     ClearOne();
//     }
// });
