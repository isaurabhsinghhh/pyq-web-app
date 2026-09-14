const form = document.querySelector(".feedback-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const option = document.getElementById("drop-down").value;
    const feedback = document.getElementById("feedback-space").value;

    if (name === "" || email === "" || feedback === "") {

        console.log("Please fill all required fields.");

    } else {

        console.log("Feedback submitted successfully!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Feedback About:", option);
        console.log("Feedback:", feedback);

    }

});