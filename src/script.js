//select the image that was hidden
let picture = document.querySelector("#image");
let button = document.querySelector(".button");
let closebutton = document.querySelector("#close-button");
let close_div = document.querySelector("#close-button");

// created a function that makes the image display
function displayImage(){
    // style the image that was hidden by css to display it when the button i
    picture.style.display = "block";
    button.innerHTML = "beach view";
}
button.addEventListener("click", displayImage);
// created a functio that hides the close button when it is clicked on
function closeImage() {
    picture.style.display = "none";
    button.innerHTML = "view"
}
closebutton.addEventListener("click", closeImage);

