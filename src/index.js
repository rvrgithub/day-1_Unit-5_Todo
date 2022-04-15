import { appendTable } from "./todo.js";
import "./index.css";


let tbody = document.querySelector("tbody");
const todoData = (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  console.log(name);
  let age = document.getElementById("age").value;
  console.log(age);
  let gender = document.getElementById("gender").value;
  console.log(name, age,gender);
  appendTable(name, age, gender, tbody);
};

document.getElementById("todo").addEventListener("submit", todoData);