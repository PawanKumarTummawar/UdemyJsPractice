let output;

// gives all HTMLAllCollection
output = document.all;
// we can also access by using index
output = document.all[10];
// gives us the length of all
output = document.all.length;

//
output = document.documentElement;
output = document.head;
output = document.body;
output = document.head.children;
output = document.body.children;

// doc type btata hai
output = document.doctype;
// Local domain batata hai
output = document.domain;
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
// by default form get method hota hai until spefically mentioned
output = document.forms[0].method;
output = document.forms[0].action;

// we can change the id of form by using javascript
// document.forms[0].id = 'new-id';

// this will return a collection of links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// // we can change and set the link as well using js
// output = document.links[0].href = 'https://www.google.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

output = document.images;
output = document.images[0];
output = document.images[0].src;

// using forEach
// html collection is array like but it is not actually an array
// to use use methods like forEach on it, we have to first convert it into array

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

 
console.log(output);


// DOM Selectors - Single Elements
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes
document.getElementById('app-title').title = 'Shopping List';




