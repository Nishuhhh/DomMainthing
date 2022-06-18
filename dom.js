//PArentNOde
/*
var itemlist = document.querySelector('#items');
itemlist.parentNode.style.backgroundColor = "yellow" ;
console.log(itemlist.parentNode.parentNode.parentNode) ;
 */
//ParentElements
//var itemlist = document.querySelector('#items');
//itemlist.parentElement.style.backgroundColor = "yellow" ;
//console.log(itemlist.parentNode.parentNode.parentNode) ;


//children ELements,,,,,,,,,,,,,,,,,,
//itemlist.children[1].style.backgroundColor = "green" ;

//FirstChild 
/*
itemlist.firstChild ;
//
//Firstelementchild ;
itemlist.firstElementChild.textContent = "Hello 1" ; 
// lastElementChild
itemlist.lastElementChild.textContent = "Hello 5" ;
*/
//NextSibling
//console.log(itemlist.nextSibling) ;
//NextElementsibling
//console.log(itemlist.nextElementSibling) ;

//previoussibling
//console.log(itemlist.previousSibling) ;
// Previouselementsibling
//console.log(itemlist.previousElementSibling) ;
//itemlist.previousElementSibling.style.color = "yellow" ;

//create a Div
/*
var newDiv = document.createElement('div') ;

//Add claa
newDiv.className = "hello" ;

newDiv.setAttribute('title' ,'Hello Div');

//Create Text Node

var NewDivtext = document.createTextNode("Hello ") ;

newDiv.append(NewDivtext) ;

//var container = document.querySelector('header .container') ;
//var  h1 = document.querySelector('header h1') ;


var container = document.querySelector('header .list-group') ;
var  h1 = document.querySelector('header h1') ;

newDiv.style.fontSize  = '30px' ;
container.insertBefore(newDiv , h1) ;
*/
var parentNode = document.getElementById('items') ;
parentNode.innerHTML= '<li>hello World</li>' + parentNode.innerHTML ;