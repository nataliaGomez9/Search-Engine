const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul ');
const block = document.querySelector('.suggestions')


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// if the parameter in search function is not empty it will take the str and lowercase it 
// defines a variable call result and makes it equal to a function which filters through the array of fruit looking for a match for the str.
// in the function each item from the array is lower cased 
// once a match is found it is return
// if not found then the input is empty

// make a predictible outcome
function search(str) {
	if (str) {
		let strLower = str.toLowerCase();
		let result = fruit.filter(item => item.toLowerCase().includes(strLower));
		return result;
	}

}
// sets inputVal variable to be user input value 
// if the input is none then the suggestion block is not displayed
// else the sugggestion block will display if there is an input
// userInput variable passes user input(inputVal) as a parameter to the search function
// calls on showsuggestions and passes search result as a parameter

function searchHandler(e) {

	let inputVal = e.target.value;

	if (inputVal === '') {
		block.style.display = "none";
	}
	else { block.style.display = "block"; }

	const userInput = search(inputVal);


	showSuggestions(userInput);
}

// 
function showSuggestions(results) {
	const ulList = document.querySelector('#fruits')
	ulList.innerHTML = '';

	if (results) {
		results.forEach(result => {
			const listItem = document.createElement('li');  
			listItem.textContent = result
			// console.log(result)
			suggestions.appendChild(listItem)
		});
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	block.style.display = "none";
	// console.log(e.target)
}


input.addEventListener('keyup', searchHandler);// this happens when the user starts typing and call of searchhandler function

suggestions.addEventListener('click', useSuggestion);

