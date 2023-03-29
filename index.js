// const currentDate = new Date();

// const today = currentDate.getDate();
// let day = currentDate.getDay();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();


// switch (day) {
//     case 1:
//         console.log('Mon');
//         break;
//     case 2:
//         console.log('Tue');
//         break;
//     case 3:
//         console.log('Wed');
//         break;
//     case 4:
//         console.log('Thu');
//         break;
//     case 5:
//         console.log('Fri');
//         break;
//     case 6:
//         console.log('Sat');
//         break;
//     default:
//         console.log('Sun');
// }

// console.log(today,month,year, day);

const monthEl = document.querySelector('.date h1');
const fullDateEl = document.querySelector('.date h2');
const timeEl = document.querySelector('.date p');
const daysEL = document.querySelector('.days');

const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(),monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(),monthIndex, 1).getDay() - 1;

console.log(firstDay);

const months = ["January",
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
"December",]
console.log(months[monthIndex]);

monthEl.innerText = months[monthIndex];
fullDateEl.innerText = new Date().toDateString();


let days = "";

for (let i = firstDay; i > 0; i--) {
    days += `<div class= "empty"></div>`;
    
}

for (let i = 1; i <= lastDay; i++){

    if (i=== new Date().getDate()) {
        days += `<div class= "today">${i}</div>`;
    } else{
        days += `<div>${i}</div>`;
    }

      
}

daysEL.innerHTML = days;

// Digital Clock

const hourEle = document.querySelector(".Dhour");
const minuteEle = document.querySelector(".Dminute");
const secondEle = document.querySelector(".Dsecond");
//const amPmEle = document.querySelector(".amPm");


function updateDClock() {
    const currentDate = new Date();
    setTimeout(updateDClock, 1000);

    const hourD = currentDate.getHours();
    const minuteD = currentDate.getMinutes();
    const secondD = currentDate.getSeconds();
    // const amPmD = currentDate.toTimeString();


    console.log(hourD, minuteD, secondD);

    // hourEle.textContent = hourD;
    // minuteEle.textContent = minuteD;
    // secondEle.textContent = secondD;
    hourEle.textContent = getRealNum(hourD);
    minuteEle.textContent = getRealNum(minuteD);
    secondEle.textContent = getRealNum(secondD);
    //amPmEle.textContent = getRealNum(amPmD);
}



// getRealNum = (Num) =>{
//     if (Num>9) {
//         return Num;
//     }
//     else {
//         return '0'+ Num;
//     }
// }




function getRealNum(Num) {
    if (Num>9) {
        return Num;
    }
    else {
        return '0' + Num;
    }
}
getRealNum();
updateDClock();

// function getTimeZone(Num) {
//     if (Num>=12) {
//         if (Num>=00) {
//             if (Num>=00) {
//                 amPmD = "PM";
//             } else{amPmD = "AM";}
            
//         } else{amPmD = "AM";}
        
//     }else{amPmD = "AM";}
// }

