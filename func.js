

// const printToDom = (stringToPrint, divId) => {
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML += stringToPrint;
// };



// let cow = 'moo';
// let cat = 'mewo';

// printToDom(cow, 'taco');
// printToDom(cat, 'pie')

// console.log(cow + ' ' + cat);
// console.log(`${cow} ${cat}`);

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    // alert("Current time: " + theHr + ":" + theMin);
    let strip = "Current time: " + theHr + ":" + theMin ;
    return strip;
}

const current_tim = tellTime();
printToDom(current_tim, 'test');
printToDom(current_time, 'test3')

// Give you a number and you state if it is prime 
// Write as standard function and then an arrow function
