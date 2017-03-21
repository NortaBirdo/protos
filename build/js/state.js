"use strict"

function activeAll(id){
  console.log("dfdsf")
  var element = document.getElementById(id);
  if (element.claasName === "disable") {
      element.classList.remove("disable");
  }
}

function disableElement (id) {
  var element = document.getElementById(id);
  element.className = "disable";
}
