import mydata from "./symbols.json" assert { type: "json" };

const list = document.getElementById("chart-list1");
const arrData = Object.keys(mydata);
let index = 0;
function delClass() {
  const forRemove = document.getElementsByClassName("current_li");
  if (forRemove.length > 0) {
    for (let i of forRemove) {
      i.classList.remove("current_li");
    }
  }
}
function toggleData() {
  const el = document.getElementById("chart1");
  delClass();
  el.innerHTML = `<iframe
    title="advanced chart TradingView widget"
    lang="en"
    id="tradingview_d36f2"
    frameborder="0"
    allowtransparency="true"
    scrolling="no"
    allowfullscreen="true"
    src="${mydata[this.innerHTML]}"
    
  ></iframe>`;
  this.classList.add("current_li");
  index = arrData.indexOf(this.innerHTML);
}

function toggleDataByIndex() {
  const el = document.getElementById("chart1");
  delClass();
  el.innerHTML = `<iframe
    title="advanced chart TradingView widget"
    lang="en"
    id="tradingview_d36f2"
    frameborder="0"
    allowtransparency="true"
    scrolling="no"
    allowfullscreen="true"
    src="${mydata[arrData[index]]}"
    
  ></iframe>`;
  const list3 = document.getElementsByTagName("li");
  for (let el of list3) {
    if(el.innerHTML == arrData[index]){
        el.classList.add("current_li");
    }
  }
}

let listdata = "";

for (let x in mydata) {
  listdata += `<li>${x}</li>`;
}

list.innerHTML = listdata;

const list2 = document.getElementsByTagName("li");
list2[0].classList.add("current_li")
for (let el of list2) {
  el.onclick = toggleData;
}

document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowUp") {
    index--;
    if (index < 0) index = arrData.length - 1;
    toggleDataByIndex();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowDown") {
    index++;
    if (index > arrData.length - 1) index = 0;
    toggleDataByIndex();
  }
});
