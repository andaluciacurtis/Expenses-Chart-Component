const response = await fetch('./data.json');
const data = await response.json();

const chart = document.querySelector(".chart");
const balance = document.querySelector(".balance");
const totalAmount = document.querySelector(".total");
const increase = document.querySelector(".increase");

calculateData();

function calculateData() {
  let totalSpendings = 0;
  let highestDay = data[0];

  data.forEach((currentDay)=> {
    let amount = currentDay.amount;
    let day = currentDay.day;

    totalSpendings += amount;
    if (amount > highestDay.amount) {
      highestDay = currentDay;
    }

    let newBar = ``
    
    chart.insertAdjacentHTML("beforeend", newBar);
    
  })
  
  totalAmount.innerHTML = `$${totalSpendings}`;
}