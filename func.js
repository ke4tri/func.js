

const sonnet = "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seemed to me But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And, thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the winter's near.";
const sonnet2 = sonnet.replace("winter", "yuletide");

console.log(sonnet.indexOf('orphans'));
console.log(sonnet.length);
console.log(sonnet2);
console.log();
console.log();



/*-----------------------------------------------------------------------------------------------------------------------------*/

// const printToDom = (stringToPrint, divId) => {
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML += stringToPrint;

// }


// let bandNumber = 1
// const takeNumber = (bandName) => {
//   let band = ((bandNumber++) + "." + bandName);
//   return printToDom(band , 'test3');
  
// }

// let bandArray = ['Galactic Scum', 'Underdogs']


// takeNumber("Galactic Scum");
// takeNumber("Underdogs");


/*-------------------------------------------------------------------------------------------------------*/ 


// const takeNumber =  (bandName) => {
//     const bandString = `<h3>${bandNumber}. ${bandName}</h3>`;
//     bandNumber++;
//     printToDom(bandString, 'bandz');  // you should already have this function written from the class lecture
//   };




// let firstName = "Jamal";
// let lastName = "Haynes";

// console.log(`${firstName}` + " " + lastName);
// console.log(`${firstName} ${lastName}`);

// printToDom(`${firstName} ${lastName}`, 'test4');
// printToDom(`${firstName}` + " " + lastName, 'test9');

// function get_text() {
//     let textpart1="This is ";
//     let textpart2="fun!";
//     let added_text=textpart1+textpart2;
//     return added_text;
// }

// get_text = () => { 
//     let textpart1="This is ";
//     let textpart2="fun!";
//     let added_text=textpart1+textpart2;
    // return added_text
//     printToDom(`${added_text}`, 'test3'); // Cannot seem to add this without it adding two strings 
// }
// get_text();
// let str = "Please locate where 'locate' occurs!";
// let pos = str.search("locate");
// let pos2 = str.lastIndexOf("locate");
// printToDom(`${str}`, 'test');

// printToDom(get_text(), 'test1');
// printToDom('-','test2');
// printToDom('-','test3');
// printToDom(get_text(), 'test4');
// printToDom(pos2,'test8');




