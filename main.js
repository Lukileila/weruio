const textarea = document.querySelector("textarea");
textarea.value = localStorage.getItem("text");

const save = ()=>{
    localStorage.setItem("text",textarea.value)
}

document.addEventListener("keyup", save);