const blueBtn = document.getElementById("blueBtn");
blueBtn.addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].getElementsByClassName.backgroundColor = "#588fbd";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].getElementsByClassName.backgroundColor = "#ffa500";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "black";
    document.getElementsByClassName("btn  btn-secondary btn-lrg")[0].style.color = "white";
});

const orangeBtn = document.getElementById('orangeBtn');

const orangeButton = document.getElementById("orangeBtn");
orangeButton.addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#f0ad4e";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "#5751fd";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#31b0d5";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "white";
});

const greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#87ca8a";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "black";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#8c9c08";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "black";
});



let submitButton = document.querySelector("form button"); // form button

function formButton(event) {
    event.preventDefault();
    let emailField = document.querySelector("#exampleInputEmail1");
    let nameField = document.querySelector("#example-text-input");
    let describeField = document.querySelector("#exampleTextarea");
    console.log(nameField.value.length);
  
      if (!emailField.value.length > 0 || !emailField.value.includes("@")){
      emailField.style.backgroundColor = "#ff0000";
      } else if (!nameField.value.length > 0) {
      nameField.style.backgroundColor = "#ff0000";
      } else if (!describeField.value.length > 0) {
       describeField.style.backgroundColor = "#ff0000";
    } else {
          alert("Thank you for filling out the form");
          nameField.value = "";
          emailField.value = "";
          describeField.value = "";
    }
  }
  
  submitButton.addEventListener("click", (event) => formButton(event));