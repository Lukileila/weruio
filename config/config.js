const fontFamily = document.querySelector("#font-family");
const form = document.querySelector("form");
const configBody = document.querySelector("#configbody");

if (!localStorage.getItem("font-family")) {localStorage.setItem("font-family","monospace")}

configBody.style.fontFamily = localStorage.getItem("font-family");

fontFamily.value = "okkkk";
fontFamily.value = localStorage.getItem("font-family");

console.log("anything");

form.addEventListener("submit", () => {
    console.log("formsubmit called");
    localStorage.setItem("font-family",fontFamily.value);
    configBody.style.fontFamily = localStorage.getItem("font-family");
    document
    });