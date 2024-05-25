/* Calendar */

let monthsWrapper = document.querySelector(".months-wrapper");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let yearTxt = document.querySelector(".current-year");

let date = new Date();
let currentYear = date.getFullYear();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getCalendar() {
  monthsWrapper.innerHTML = "";

  yearTxt.textContent = currentYear;

  for (let i = 0; i < months.length; i++) {
    let monthWrap = document.createElement("div");
    monthWrap.className = "month-wrapper";

    monthWrap.innerHTML = `<div class="month-header">
    <h3 class="month">${months[i]}</h3>
  </div>
  <ul class="weeks"></ul>
  <ul class="days"></ul>`;

    monthsWrapper.insertAdjacentElement("beforeend", monthWrap);
    getWeeks(monthWrap.querySelector(".weeks"));
    getDates(monthWrap.querySelector(".days"), i);
  }
}

function getWeeks(weekWrapper) {
  let liTag = "";
  for (let i = 0; i < days.length; i++) {
    liTag += `<li>${days[i]}</li>`;
  }
  weekWrapper.innerHTML = liTag;
}

function getDates(daysWrapper, month) {
  //getting last date for this month
  let lastDateofMonth = new Date(currentYear, month + 1, 0).getDate();

  //getting first day of this month
  let firstDayofMoth = new Date(currentYear, month, 1).getDay();

  //getting last day of the month
  let lastDayofMonth = new Date(currentYear, month, lastDateofMonth).getDay();

  let liTag = "";

  //getting all last dates of lost month with value null
  for (let i = firstDayofMoth; i > 0; i--) {
    liTag += `<li></li>`;
  }

  //getting all dates of the month
  for (let i = 1; i <= lastDateofMonth; i++) {
    liTag += `<li>${i}</li>`;
  }

  //getting first dates of next month with value null
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li></li>`;
  }

  daysWrapper.innerHTML = liTag;
}

getCalendar();
prevBtn.addEventListener("click", () => {
  currentYear = currentYear - 1;
  getCalendar();
});

nextBtn.addEventListener("click", () => {
  currentYear = currentYear + 1;
  getCalendar();
});
