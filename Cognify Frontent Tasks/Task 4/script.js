// Task 4: JavaScript to change background color

document.getElementById("colorChanger").addEventListener("click", function() {
    // Generate a random hex color
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});