
'use strict';

// html page with CSS and JS
// short biography <done>

// use .toUpperCase() or .toLowerCase()
/* console.log() for if the answer is correct or not
replace with alerts at the end */

// ask user for name via prompt()
var user = prompt('What is your name?');
// custom greeting for coming to site
alert('Hi ' + user + '! Welcome to the Morgan Quiz! I\'ve gota  few questions for you:');


// 5 yes/no questions <done>
var dogName = prompt('Morgan\'s dog was named Ramen: Y/N?');
var schoolCount = prompt('Morgan only attended 4 schools in Bellingham: Y/N');
var japanTime = prompt('Morgan lived in Japan: Y/N');
var previousWork = prompt('Morgan has worked in software before: Y/N');
var tabletop = prompt('Morgan hates all things related to dragons and the dungeons they inhabit: Y/N');

if(dogName.toLowerCase() === 'n'){
  console.log('Correct! It was \'Noodles\'');
}else{
  console.log('oooo, that is not correct.');
}

if(schoolCount.toUpperCase() === 'N'){
  console.log('Correct! Morgan attended a silly amount of schools.');
}else{
  console.log('That is incorrect.');
}

if(japanTime.toLowerCase() === 'y'){
  console.log('それは正しいです - That is correct!');
}else{
  console.log('違う - NOPE! He spent nearly 2 years there.');
}

if(previousWork.toLowerCase() === 'y'){
  console.log('True! He has worked in softare for nearly 8 years');
}else{
  console.log('That is incorrect. He has spent several years as a software tester.');
}

if(tabletop.toLowerCase() === 'n'){
  console.log('Correct! Morgan obsessses about D&D to an unhealthy degree!');
}else{
  console.log('That is tremendous insult and Morgan will fight you over it!');
}


// display back in final message
