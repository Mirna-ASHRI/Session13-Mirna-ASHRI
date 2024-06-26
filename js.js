let createBtn = document.getElementById("create-btn");
let styleBtn = document.getElementById("style-btn");
let changeAttrBtn = document.getElementById("change-attr-btn");
let dynamicContent = document.getElementById("dynamic-content");
let header = document.getElementById("header");

createBtn.addEventListener("click", function() {
    let newP = document.createElement("p");
    newP.textContent = "This is a dynamically created paragraph.";
    dynamicContent.appendChild(newP);
    console.log(newP)
});

styleBtn.addEventListener("click", function() {
    let ps = dynamicContent.querySelectorAll("p");
    ps.forEach(paragraph => {
      paragraph.classList.toggle("css");
    });
});

changeAttrBtn.addEventListener("click", function() {
    if (header.hasAttribute("data-custom")) {
      header.removeAttribute("data-custom");
      alert("Data-custom Attribute is removed");
    } else {
      header.setAttribute("data-custom", "value");
      alert("Data-custom Attribute is added");
    }
});

// let myElement = document.createElement("CreateElement")
// let myAttr = document.createAttribute("data") 
// let myText = document.createTextNode("Product1")

// myElement.setAttributeNode(myAttr)
// myElement.appendChild(myText)
// console.log(myElement)
// document.body.appendChild(myElement)

// let myBtn = document.getElementById("create-btn")
// myBtn.onclick = () => {
//     console.log("This is a dynamically created paragraph.")
// }
// let myDiv = document.getElementById("dynamic-content")
// document.body.appendChild(myDiv)
// console.log(myBtn)





