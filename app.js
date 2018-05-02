const newArray1 = [];
let i1;
for (let i1 = 0; i1 <= 1354; i1++) {
    newArray1.push(i1);
}
let k1 = 0;

function setProjects() {
    document.querySelector('.one1').innerHTML = newArray1[k1++];
    if (k1 == newArray1.length) { k1 = 1354 };
}
setInterval(setProjects, 1)

const newArray2 = [];
let i2;
for (let i2 = 0; i2 <= 1214; i2++) {
    newArray2.push(i2);
}
let k2 = 0;

function happyClients() {
    document.querySelector('.one2').innerHTML = newArray2[k2++];
    if (k2 == newArray2.length) { k2 = 1214 };
}
setInterval(happyClients, 10)

const newArray3 = [];
let i3;
for (let i3 = 0; i3 <= 1454; i3++) {
    newArray3.push(i3);
}
let k3 = 0;

function answeredTickets() {
    document.querySelector('.one3').innerHTML = newArray3[k3++];
    if (k3 == newArray3.length) { k3 = 1454 };
}
setInterval(answeredTickets, 20)

const newArray4 = [];
let i4;
for (let i4 = 0; i4 <= 2147; i4++) {
    newArray4.push(i4);
}
let k4 = 0;

function developmentHours() {
    document.querySelector('.one4').innerHTML = newArray4[k4++];
    if (k4 == newArray4.length) { k4 = 2147 };
}
setInterval(developmentHours, 10)