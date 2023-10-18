const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const floatingProfile = document.getElementById("floatingProfile");

openButton.addEventListener("click", () => {
    floatingProfile.style.display = "block";
});

closeButton.addEventListener("click", () => {
    floatingProfile.style.display = "none";
});