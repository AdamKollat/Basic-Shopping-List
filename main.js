// Initialise an array for grocery items
let groceryList = []

let list = document.querySelector('ul'); // Identify unordered list and save it in a variable
let item = document.getElementById('input');    // Identify input field and save location in a variable

// "Create a function which will display each item in the array as list elements in the <ul> tag"
const addToList = () => {
    if (input.value == '') {    // If no entry display alert
        alert('Please enter an item');
    } else {
        let closeSpan = document.createElement('span'); // Create span element
        closeSpan.innerHTML = '\u00D7'; // Add HTML content to span element
        closeSpan.classList.add('close');   // Add 'close' class to span element
        let listItem = document.createElement('li');    // Create li element
        listItem.innerHTML = input.value; // Add input value as text content to li element 
        listItem.appendChild(closeSpan);    // Append span element to li element 
        list.appendChild(listItem); // Add li element to the targeted list element      
        groceryList.push(item.value); // Add input value to array
        input.value = ''; // Reset input value
        console.log(groceryList)   // Display updated arry in console 
    }
}

document.addEventListener('click', e => {   // Add clikc event listener to HTML document
    let itemClass = e.target.getAttribute('class'); // save the class of the event target in a variable
    let child = e.target;   // save event target in a variable
    let parent = e.target.parentNode;   // save event target's parent node in a variable
    if (itemClass == 'close') { // If event target's class equals 'close'
        parent.classList.add('hide');   // Add 'hide' class to parent element
        parent.removeChild(child);  // Remove span element from li element
        for (let i = 0; i < groceryList.length; i++) {  // Iterate through array
            if (groceryList[i] == parent.innerHTML) {   // If current array item matches parent node's innerHTML
                groceryList.splice(i, 1)    // Remove array item 
                console.log(groceryList)    // Log updated array in console
            }
        }     
    }
})

document.getElementById('itemList').addEventListener('click', e => {    // Add click event listener to element with ID of 'itemList'
    if(e.target.tagName == 'LI'){   // If the event target has 'li' tag
        e.target.classList.add('checked')   // Add 'checked' class to event target elemnt
    }
})

document.addEventListener('keyup', e => {   // Add keyup event listener to HTML document
    if (e.keyCode == 13) {  // If key code equals 13 (Enter key)
        addToList() // Call 'addToList' function
    }
})