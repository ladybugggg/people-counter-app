let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(saveEl);

function increment() {
  count += 1;
  countEl.textContent = count;
}


function save() {
  let countStr = count + "  +  ";
  saveEl.textContent  += countStr;
  countEl.textContent = 0
  count = 0
  console.log(count);
}

// let username = "Peter";
// let message = "You have 3 new notifications";

// console.log(username + ", " + message + "!");

// messageToUser = username + ", " + message + "!";
// console.log(messageToUser);

// let name = "ladybug";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;

// console.log(myGreeting);
// let welcomeEl = document.getElementById("welcome-el");
// let name = "ladybug";
// let greeting = "Welcome back";
// let myGreeting = greeting + ", " + name;
// welcomeEl.innerText = myGreeting;
