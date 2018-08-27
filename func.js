
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

}


let bandNumber = 1
const takeNumber = (bandName) => {
  let band = ((bandNumber++) + "." + bandName);
//   return console.log(band);
  return printToDom(band , 'test3');
  
}

let bandArray = ['Galactic Scum', 'Underdogs']


takeNumber("Galactic Scum");
takeNumber("Underdogs");

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




