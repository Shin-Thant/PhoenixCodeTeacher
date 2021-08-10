function show() {
    document.querySelector("#intro-plane").style.display = "inline";
}

setTimeout(function() {
    document.querySelector("#alert").style.display = "none";
    console.log("One Minute Success!");
}, 60000);

document.querySelector(".sign").addEventListener("click", () => {
    document.querySelector("#alert-text").textContent = "Welcome! You are one of us now.";
    document.querySelector("#alert-btn").textContent = "";

    setTimeout(function() {
        document.querySelector("#alert").style.display = "none";
        console.log("15s Success!")
    }, 15000);
});

// For Animated Humberger
const menu_btn = document.querySelector(".menu-btn");
let menu_open = false;
menu_btn.addEventListener("click", () => {
    if(!menu_open) {
        menu_btn.classList.add("open");
        menu_open = true;
    } else {
        menu_btn.classList.remove("open");
        menu_open = false;
    }
})