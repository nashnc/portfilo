const inputList = document.getElementById("input_list"); // gets the input text
const inputTask = document.getElementById("listOfTask"); // to apppend the text into html

addTask = () => {
  if (inputList.value === "") {
    alert(`Please write something ...`); // chcking if   its empty or not
  } else {
    let li = document.createElement("li"); // ceating elemnt list , li
    li.innerHTML = inputList.value; //assigning ithe input you got to the , created elemnt
    inputTask.appendChild(li); // appending the generated id
    let span = document.createElement("span");
    span.innerHTML = " \u2718";
    li.appendChild(span);
  }
  inputList.value = ""; //clear after input
  saveData();
};
inputTask.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
saveData = () => {
  localStorage.setItem("toDoList", inputTask.innerHTML);
};
showTask = () => {
  inputTask.innerHTML = localStorage.getItem("toDoList");
};

showTask();
