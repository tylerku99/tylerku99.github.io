const currentDate = Date.now();
const collegeDate = new Date(2021, 6, 14, 12, 0, 0, 0).getTime();

document.getElementById('seconds').innerHTML = Math.floor((currentDate / 1000) - (collegeDate / 1000));