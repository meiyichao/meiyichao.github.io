let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.jpg") {
    myImage.setAttribute("src", "images/2.jpg");
  } else {
    myImage.setAttribute("src", "images/1.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "我爱" + myName;
}

  
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "我爱" + storedName;
  }
  

myButton.onclick = function () {
    setUserName();
  };
    