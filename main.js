const textarea = document.querySelector("textarea");

textarea.value = localStorage.getItem("text");
textarea.style.fontFamily = localStorage.getItem("font-family");

const save = ()=>{
    localStorage.setItem("text",textarea.value)
}

document.addEventListener("keyup", save);
