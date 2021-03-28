function shoppingList(arrayOfItems) {
  // Write your code here...

   let h1Tag = document.createElement("h1");
  h1Tag.innerText = "My Shopping List"; // Creates h1 element inside content

  content.prepend(h1Tag); // Adds h1Tag as first child

  let ulTag = document.createElement("ul") //Creates a ul tag.;

  for (let item of arrayOfItems) { 
    let liTag = document.createElement("li");
    liTag.innerText = item;
    ulTag.appendChild(liTag);
};  // Creates a li tag, adds each item in shopping list as an li element, adds the li elements as children of ul.

  content.appendChild(ulTag);
}; // Adds ul element as a child of the div with id "content".

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
