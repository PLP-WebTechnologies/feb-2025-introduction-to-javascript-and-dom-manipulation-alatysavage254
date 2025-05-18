function changeText() {
  document.getElementById("main-title").textContent = "Text Changed with JavaScript!";
}

function changeStyle() {
  const desc = document.getElementById("description");
  desc.style.color = "white";
  desc.style.backgroundColor = "#0077cc";
  desc.style.padding = "10px";
  desc.style.borderRadius = "8px";
}

function addElement() {
  const container = document.getElementById("dynamic-container");
  if (!document.getElementById("new-paragraph")) {
    const newPara = document.createElement("p");
    newPara.id = "new-paragraph";
    newPara.textContent = "This paragraph was added dynamically.";
    container.appendChild(newPara);
  }
}

function removeElement() {
  const para = document.getElementById("new-paragraph");
  if (para) {
    para.remove();
  }
}
