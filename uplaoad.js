let submit = document.querySelector('#js-submit');
let thankDiv = document.querySelector(".thank-message");
let subjectName = document.querySelector('#js-sub-name');



submit.addEventListener("click", function () {
    // Show instantly
    thankDiv.innerHTML = `<p class="thankMess">Thanks for Your Contribution</p>`;
    subjectName=subjectName.value;
    console.log(subjectName);
    

    // Remove after 1 second
    setTimeout(function () {
        thankDiv.innerHTML = "";
    }, 2000);
});
