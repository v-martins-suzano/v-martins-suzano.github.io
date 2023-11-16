// Image Switcher code
let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/suprija.png") {
    myImage.setAttribute("src", "images/suprija-animado.gif");
  } else {
    myImage.setAttribute("src", "images/suprija.png");
  }
};

//personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Digite seu nome');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'SupriJá é o melhor que há, ' + myName;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, storedName`;
  }

myButton.onclick = () => {
    setUserName();
  }