//alert('hello!');


// 1st step:
// the creation of variable for the lists


var form, todoList, button;
// 1.1 form DOM
form = document.querySelector('form');
// 1.2 to do list
todoList = document.querySelector('ul');
// 1.3 button for to do list in DOM
button = document.getElementById('clear');

// 2nd creating an input form element using  DOM
var input = document.getElementById('user-todo');
// 2.1 adding an event Listener to the form field
form.addEventListener('submit', function(event) {
	event.preventDefault();

	// 2.2 adding function todoMaker : this is to carry out the inputted value
	todoMaker(input.value);
	input.value = '';

})



// 3rd creating a function for the list item
var todoMaker = function(text) {
	// 3.1 this is the creation of a ne list item inside ul
	var todo = document.createElement('li');
	// 3.2 this is the inputted value inside the li
	todo.textContent = text;

// 3.3 append to add a sample inputted list
todoList.appendChild(todo);

//3.4 removing the bulleted format
todo.style.listStyleType = "none";

}




// 4th creation of a clear button
// 4.1 creation of an event listener
button.addEventListener('click', function() {
	while (todoList.firstChild){
		todoList.removeChild(todoList.firstChild);
	}
});




// 5th disabled clear button when nothing on the to-do-list

button.disabled = true;

form.addEventListener("change", myButton);
 

function myButton() {
	if (document.querySelector("form").todoList === "") {
		//button.disabled = true;
} else {
		button.disabled = false;
		}
}
