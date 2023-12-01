let inputName = document.getElementById("input-fruit");
let fruitRadio = document.querySelector('input[name="fruit-legume"][value="fruit"]');
let legumeRadio = document.querySelector('input[name="fruit-legume"][value="legume"]');

//add to specific list
document.getElementById("btn-add-specific").addEventListener("click", function() {
    let name = inputName.value;
    if(name != ""){
        // Check if the banana radio button is checked
  if (fruitRadio && fruitRadio.checked) {
    let alert = ' <div class="alert alert-success" role="alert">Fruits! - '+name+'</div>';
    document.getElementById("first-list").innerHTML += alert;
  } else if( legumeRadio && legumeRadio.checked) {
    let alert = ' <div class="alert alert-warning" role="alert">Legumes! - '+name+'</div>';
    document.getElementById("third-list").innerHTML += alert;
  }
  else{
    alert("please check radio button");
  }

    }
    else{
        alert(" please enter a name")
    }
    
    
});

//add to generale list
document.getElementById("btn-add-general").addEventListener("click", function() {
    let name = inputName.value;
    if(name != ""){
         // Check if the banana radio button is checked
  if (fruitRadio && fruitRadio.checked) {
    let alert = ' <div class="alert alert-primary" role="alert">Fruits! - '+name+'</div>';
    document.getElementById("second-list").innerHTML += alert;
  } else if( legumeRadio && legumeRadio.checked) {
    let alert = ' <div class="alert alert-primary" role="alert">Legumes! - '+name+'</div>';
    document.getElementById("second-list").innerHTML += alert;
  }
  else{
    alert("please check radio button");
  }

    }
    else{
        alert("please enter a name")
    }
   
    
});

//search for an item using search text
const searchItems = () => {
    // Get the search input value
    const searchText = document.getElementById('search-text').value.toLowerCase();

    // Get all list items in the three lists
    const allItems = document.querySelectorAll('.list .alert');

    // Loop through each item and check if it matches the search input
    allItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchText)) {
            // Highlight or manipulate the matching item as needed
            item.style.backgroundColor = 'red';
        } else if(itemText == "") {
            // Reset styles for non-matching items
            ialert("Enter an item in the search text")
        }
        else{
           // Reset styles for non-matching items
           item.style.backgroundColor = ''; 
        }
    });
}

//document.getElementById("search-text").addEventListener('input', function() {
    //searchItems();
//});
document.getElementById("btn-search").addEventListener("click", function() {
    searchItems();
});

//delete item
document.getElementById("btn-delete").addEventListener("click", function() {
   // Get all list items in the three lists
   const allItems = document.querySelectorAll('.list .alert');

   let foundRedItem = false;

   // Loop through each item and check if it has a red background
   allItems.forEach(item => {
       // Check if the background color is red
       if (item.style.backgroundColor === 'red') {
           item.remove();
           foundRedItem = true;
       }
   });

   // If no item with red background is found
   if (!foundRedItem) {
       alert("No item with red background to delete.");
   }


});