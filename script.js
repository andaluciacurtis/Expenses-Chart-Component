const response = await fetch('./data.json');
const data = await response.json();

const chart = document.querySelector(".chart");
const totalAmount = document.querySelector(".total");

calculateData();

function calculateData() {
  let totalSpendings = 0;
  let highestDay;
  let highestBar;

  data.forEach((currentDay)=> {
    let amount = currentDay.amount;
    let day = currentDay.day;
    
    let barContainer = document.createElement("div");
    barContainer.classList.add("bar-container")
    
    let hoverBar = document.createElement("div");
    hoverBar.innerHTML = `<p>$${amount}</p>`;
    hoverBar.classList.add("hover-bar");

    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${amount * 2}px`;

    barContainer.appendChild(hoverBar);
    barContainer.appendChild(bar);
    barContainer.insertAdjacentHTML("beforeend",`<p>${day}</p>`);

    totalSpendings += amount;

    if (highestDay === undefined || highestDay.amount < amount) {
      highestDay = currentDay;
      highestBar = bar;
    }
    
    chart.appendChild(barContainer);
  })

  highestBar.classList.add("highest-bar");
  totalAmount.innerHTML = `$${totalSpendings}`;
}

// 