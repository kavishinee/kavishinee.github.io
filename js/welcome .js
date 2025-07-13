document.addEventListener("DOMContentLoaded", function () {
    // Create the welcome message element
    const messageBar = document.createElement("div");
    messageBar.innerHTML = `
        <h2 style="text-align:center; margin: 0; padding: 20px; background-color: #f4f4f4;">
            Glad to have you here, Professor Ozaydin
        </h2>
    `;
    
    // Insert it at the very top of the body
    document.body.prepend(messageBar);
});
