
/*Creacion de objetos*/
var p1 = new person("John", 42, "green");
var p2 = new person ("Amy", 21, "red");

document.write(p1.age); //Output 42
document.write(p2.page);//Output 21

//metodo1
function person(name, age){
	this.name = name;
	this.age = age;
	this.yearOfBirth = bornYear
}



function bornYear(){
	return 2016 - this.age;
}

var p = new person("A",22);
document.write(p.yearOfBirth());
//Ootputs 1994

//####################################

//metodo2
function person(name, age){
	this.name = name;
	this.age = age;
	this.changeName = function(name){
		this.name = name;
	}
}

var p = new person("David", 21);
p.changeName("Jhon");
//Now p name equals to "Jhon"

#######################################

//Array

var courses = new Array("HTML", "CSS", "JS");
document.write(courses[10]);
//Outputs "undefined"

var courses = new Array("HTML", "CSS", "JS");
document.write(courses[0]);
//Outputs HTML

var courses = new Array("HTML", "CSS", "JS");
courses[1] = "C++" //Changes the second element

var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

var courses = ["HTML", "CSS", "JS"];
document.write(courses.length);
//Output 3 

//concat()
var c1 = ["HTML", "CSS", "JS"];
var c2 = ["HTML", "CSS", "JS"];
var courses = c1.concat(c2);
//The concat operation returns the resulting concatenation as a new array

//
var person = [] //empty array
person["name"] = "Jhon";
person["age"] = 46;
document.write(person["age"]);
//Outputs "46"
//Now, person is treated as an object, instead of being an array.
//The named indexes "name" and "age" become properties os the person object

//Note: As the person array is treated as an object, the standard array methods and properties will 
//produce incorrect results. For example, person.length will return 0.

//##################################################################################################

//Math object 
document.write(Math.PI);
//Ouputs 3.141592653589793
//Math has no constructor. There's no need to create a Math object first

//Square root: raiz cuadrada
var number = Math.sqrt(4);
document.write(number)
//Outputs 2

var n = prompt("Enter a number", "");;
var answer = Math.sqrt(n);
alert("The square root of" + n + "is" + answer);

//setInterval
//The setInterval() method calls a function or evaluates an expression at specified intervals (in miliseconds)
//It will continue calling the function until clearInterval() is called or the window is closed.

function myAlert(){
	alert("Hi");
}
setInterval(myAlert, 3000);

//This will call the myAlert funcion every 3 seconds (1000 ms = 1 second)

//###################################################################################################
//The Date Object

var d = new Date();
//d stores the current date and time

//specified date and time
new Date(miliseconds)
new Date(dateString)
new Date(year, month, dat, hours, minutes, seconds, miliseconds)

//JavaScript dates are calculated in miliseconds from 01 January, 1970 00:00:00
//Universal Time (UTC). One day contains 86,400,000 milisecond

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 1, 2005, 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);


//Date Methods 
//getFullYear()
//getMonth()
//getDate()
//getDay()
//getHours 
//getMinutes
//getSecondsa()
//getMiliseconds

var d = new Date();
var hours = d.getHours();
//hours is equal to the current hour

function printTime(){
	var d = new Date();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	document.body.innerHTML = hours + ":" + min + ":" + secs;
}

setInterval(printTime, 1000);

//#################################################################
//DOM & Events
//finds element by id 
document.getElementByID(id)

//finds elements by class name
document.getElementsByClassName(name)

//finds elements by the tag name
document.getElementsByTagName(name)

var elem = document.getElementById("demo");
elem.innerHTML = "Hello World";

//HTML: 
//<div id = demo>
//
//</div>

//Selecting Elements
//The getElementsByClassName() method finds all elements by class name and returns them as an array.

var arr = document.getElementsByClassName("demo");
//accesing the second element
arr[1].innerHTML = "Hi";

//<p>h1</p>
//<p>hello</p>
//<p>hi</p>

var arr = document.getElementsByTagName("p");
for (var x = 0; x<arr.length; x++){
	arr[x].innerHTML = "Hi there";
}

//The script will result in the following HTML:
//<p>Hi there</p>
//<p>Hi there</p>
//<p>Hi there</p>

//Working with DOM 
//
element.childNodes //returns an array of an element's child nodes.
element.firstChild //returns the first child node of an element.
element.lastChild //returns the last child node of an element.
element.hasChildNodes //returns true if an element has any child nodes, otherwise false.
element.nextSibling //returns the next node at the same tree level.
element.previousSibling //returns the previous node at the same tree level.
element.parentNode //returns the parent node of an element.

<html>
  <body>
    <div id ="demo">
      <p>some text</p>
      <p>some other text</p>
    </div>

    <script>
     var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }
    </script>

  </body>
</html>

//The code above changes the text of both paragraphs to "new text".

//Changing attributes
//Practically all attributes of an element can be changed using JavaScript.

<div id="demo" style="width:200px">some text</div>
<script>
  var x = document.getElementById("demo");
  x.style.color = "6600FF";
  x.style.width = "100px";
</script>

//Creating Elements
//element.cloneNode() clones an element and returns the resulting node.
//document.createElement(element) creates a new element node. 	
//document.createTextNode(text) creates a new text node

//Displaying an alert popup when the user clicks a specified button
<button onclick="show()">Click Me</button>
<script>
function show() {
  alert("Hi there");
}
</script>

//Event handlers can be assigned to elements
var x = document.getElementById("demo");
x.onclick = function () {
  document.body.innerHTML = Date();
}

//onload
<body onload="doSomething()">

window.onload = function() {
   //some code
}

//onchange
<input type="text" id="name" onchange="change()">
<script>
function change() {
 var x = document.getElementById("name");
 x.value= x.value.toUpperCase();
}
</script>
////////////

//Event listeners
<button id="demo">Start</button>

<script>
var btn = document.getElementById("demo");
btn.addEventListener("click", myFunction);

function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction);
}
</script>

////////////
//Event propagation
/*In bubbling, the innermost element's event is handled first and then the outer element's event is handled. The <p> element's click event is handled first, followed by the <div> element's click event.

In capturing, the outermost element's event is handled first and then the inner. The <div> element's click event is handled first, followed by the <p> element's click event.
Capturing goes down the DOM.
Bubbling goes up the DOM.*/
//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);

//Image slider
 var images = [
  "http://www.sololearn.com/uploads/slider/1.jpg", 
  "http://www.sololearn.com/uploads/slider/2.jpg", 
  "http://www.sololearn.com/uploads/slider/3.jpg"
  ];
  var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  }

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}


















































