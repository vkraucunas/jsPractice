//Generate a random number from 1000 to 9999 and output the sum of its digits.
//For example, if the number is 1049, then the output should be 14.

// var shoot = Math.floor(Math.random()*10000 + 1000);
// console.log(shoot);

function splitNumber (num) {
    return num.toString().split('');
}


//helper function1
function swagger (num) {
    var result = 0;
    var tackle = splitNumber(num);
    for (var i = 0; i < tackle.length; i++) {
        result += Number(tackle[i])
    }

    //console.log(result);
    return result
}

// swagger(shoot);

// Generate a random number from 1000 to 9999 and output the sum of its digits, repeatedly, dropping the left-most digit after each iteration, until there is only one digit only.
// For example, if the number is 1049, then the output should be 14, 13, 13, 9.

//helper function2
//will need to take result of helper function1
function prop (num) {
    var result = 0;
    var harlequin = splitNumber(num);
    var aspen = harlequin.slice(1);
    var fest = aspen.join('');
    
    if(fest === '') { return; }
    
    result = Number(fest);
    //console.log(fest);
    
    return result;
}



// **create a variable to run
var cap = Math.floor(Math.random()*10000 + 1000);
// ** console logging what my variable ends up being so i know it's working
console.log(cap);

// **declare major function
function scrum (num) {
    if(typeof num === "undefined") { return; }

    var sum = swagger(num); //swagger(3456)
    //sum = 18;
    
    console.log("sum of "+ num +" is " +sum);//print 18;
    var tmp = prop(num);


    scrum(tmp); //prop(3456) = 456
    //scrum(456);
}

scrum(cap); //3456


//solved with help from James
