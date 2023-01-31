document.querySelectorAll(".modal__question-wrapper--question").forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.classList.toggle("dropped-down");
    })
})