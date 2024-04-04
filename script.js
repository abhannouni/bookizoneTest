function generateCalendar(year, month) {
    const daysElement = document.getElementById("days");
    const monthYearElement = document.getElementById("monthYear");
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const currentDate = new Date(year, month - 1, 1);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    monthYearElement.textContent = `${months[currentMonth]} ${currentYear}`;
  
    daysElement.innerHTML = "";
  
    const lastDay = new Date(year, month, 0).getDate();
    const firstDayIndex = currentDate.getDay();
    const prevLastDay = new Date(year, month - 1, 0).getDate();
    const lastDayIndex = new Date(year, month, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    let days = "";
  
    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="day innactive">${prevLastDay - x + 1}</div>`;
    }
  
    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
      ) {
        days += `<div class="day selected highlight">${i}</div>`;
      } else {
        days += `<div class="day">${i}</div>`;
      }
    }
  
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="day innactive">${j}</div>`;
    }
  
    daysElement.innerHTML = days;
  }
  
  function prevMonth() {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1; // Corrected from 12 to 11
    generateCalendar(currentYear, currentMonth + 1);
  }
  
  function nextMonth() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    generateCalendar(currentYear, currentMonth + 1);
  }
  
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  generateCalendar(currentYear, currentMonth + 1);