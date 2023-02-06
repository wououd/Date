const clock = document.querySelector(".clock");
let day = document.querySelector("h1");
const myOclock = () => {
    

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
   day.innerText = dateFns.format(now,'YY / MM / DD');

    let html = ` 
        <span>${ hour } </span> :
        <span>${ minutes }</span> : 
        <span>${ seconds }</span>
    
    
    
    `
    clock.innerHTML=html;

}

setInterval(myOclock,1000) // it set the day

let now1 = new Date();

 console.log(dateFns.isToday(now1))// it give us the current day
console.log(dateFns.format(now1,'YY MM DD')) // it shows the day throught the format year / month / day 
