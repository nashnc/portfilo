const amount = document.getElementById("inputText"); // gets the input text
const sheet = document.getElementById("ledger");
const totalSumDisplay = document.getElementById("totalSum");
let total = 0;

inCome = () => {
  const vlaue = parseInt(amount.value);
  /** */

  /** */
  let li = document.createElement("li"); // ceating elemnt list , li
  li.innerHTML = amount.value; //assigning ithe input you got to the , created elemnt
  sheet.appendChild(li); // appending the generated id
  let span = document.createElement("span");
  span.innerHTML = " \u2718";
  li.appendChild(span);
  /*** */
  amount.value = ""; //clear after input
  total += amount;
  console.log(amount);

  saveData();
};

sheet.addEventListener(
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
  localStorage.setItem("toDoList", sheet.innerHTML);
};
showTask = () => {
  sheet.innerHTML = localStorage.getItem("toDoList");
};

showTask();
document.getElementById("total").innerHTML;
