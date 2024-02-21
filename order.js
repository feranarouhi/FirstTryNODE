//var list = document.getElementById("topnav");
//var listItem = list.children;
//var order = listItem[1];
//var ordercopy = order.cloneNode(true);
//topnav.appendChild(ordercopy);
//ordercopy.innerHTML = "location";


//var contact = document.createElement("li");  if you want to add a new list item just 
//                                             delete line 5and 6 and add this 3 lines.
//list.appendChild(contact);
//contact.innerHTML = "contact us";


// Path: node/order.js/ delete all line and start here
var list = document.getElementById("topnav");
var direction = document.createElement("li");
direction.innerHTML = "directions";
var about = document.querySelectorAll("#topnav li") [0];
list.insertBefore(direction, about);   //direction will be added before about (gonna be the first one in the list)