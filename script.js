
// Show the popup page when clicking on the button

const submitButton = document.getElementsByClassName("button")[0]
let popup = document.getElementsByClassName("popup-container")[0]

submitButton.addEventListener("click", function () {
    const nameContent = document.getElementById("name").value
    let userName = document.getElementsByClassName("user-name")[0]

    popup.classList.add("open")
    userName.innerHTML = nameContent
})

// Hide the popup

const closeBtn = document.getElementsByClassName("unpop-card")[0]

closeBtn.addEventListener("click", function () {
    popup.classList.remove("open");
})


