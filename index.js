const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
const myName = "Dan";
newHeader.textContent = `${myName} is the champion`;
