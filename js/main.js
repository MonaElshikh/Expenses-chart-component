//#region Declaration
let url = "https://monaelshikh.github.io/data/data.json";
let chartDiv = document.querySelector(".chart");
let weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const dayOfWeek = weekDays[new Date().getDay()];
//#endregion

//#region  Functions
// function to get data from json file
async function getData() {
    let result = await fetch(url);
    let data = await result.json();
    createChart(data);
}
// function creates the charts from returned api data
function createChart(list) {
    list.forEach(item => {
        // create the day chart item
        let dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.setAttribute("data-day", item.day);

        // create the content span
        let contentSpan = document.createElement("span");
        contentSpan.className = "content";
        contentSpan.style.height = item.amount.toString() + "px";
        if (item.day === dayOfWeek) {
            contentSpan.classList.add("active");
        }
        // create the amount span
        let amountSpan = document.createElement("span");
        amountSpan.className = "amount";
        amountSpan.innerHTML = `$ ${item.amount}`;

        // add amount to day and day to chart contaainer
        dayDiv.appendChild(contentSpan);
        dayDiv.appendChild(amountSpan);
        chartDiv.appendChild(dayDiv);
    });
}
//#endregion

//#region calling
getData();
//#endregion