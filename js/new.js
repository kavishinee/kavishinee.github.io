document.addEventListener("DOMContentLoaded", function () {
    // Create a container div
    const foodSection = document.createElement("div");
    foodSection.setAttribute("id", "indian-food-section");
    foodSection.style.textAlign = "center";
    foodSection.style.marginTop = "40px";
    foodSection.style.padding = "20px";
    foodSection.style.borderBottom = "1px solid #ccc"; // Optional style change

    // Add content inside the div
    foodSection.innerHTML = `
        <p>🍛 What is your favorite Indian food?</p>
        <input type="text" id="foodInput" placeholder="Type your favorite dish..." style="width: 300px;">
        <button id="foodSubmit">Submit</button>
        <p id="foodResponse" style="margin-top: 15px; font-style: italic;"></p>
    `;

    // Append the section to the **top** of the body
    document.body.prepend(foodSection);

    // Add event listener for the button
    const button = foodSection.querySelector("#foodSubmit");
    const input = foodSection.querySelector("#foodInput");
    const response = foodSection.querySelector("#foodResponse");

    button.addEventListener("click", function () {
        const food = input.value.trim();
        if (food) {
            response.innerHTML = `😋 "${food}" sounds delicious!`;
        } else {
            response.innerHTML = `Please enter a food item first.`;
        }
    });
});
