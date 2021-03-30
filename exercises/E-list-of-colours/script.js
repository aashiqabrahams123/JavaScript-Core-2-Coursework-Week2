function listOfColours(colours) {
  // Write your code here...
  let content = document.getElementById("content");
  let select = document.createElement("select");
  let pGraph = document.createElement("p");

  content.appendChild(select);
  content.appendChild(pGraph);

  colours.forEach((colour) => {
    let option = document.createElement("option");
    option.innerText = colour;
    option.value = colour;
    select.appendChild(option);
  });

  pGraph.innerText = `You have selected: `;
  select.addEventListener("click", function () {
    pGraph.innerText = `You have selected: ${select.value}`;
    pGraph.style.color = select.value;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
