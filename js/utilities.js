function creitdiv(id,btn){
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.classList.add('text-sm');
    p.classList.add('font-normal');
    p.innerText = 'Your Have Completed the task ';
    const title = btn.parentNode.parentNode.parentNode.querySelector('h2').innerText;
    p.innerText += title;
    div.appendChild(p);
    const now = new Date();
    const hour = String(now.getHours() % 13 + 1);
    const minute = String(now.getMinutes());
    const second = String(now.getSeconds());
    const time = hour + ':' + minute + ':' + second;
    p.innerText += (' at ' + time);
    div.classList.add('bg-[#F4F7FF]');
    div.classList.add('rounded-md');
    div.classList.add('p-2');
    div.classList.add('my-2');
    div.appendChild(p);
    return div;
}

function date(id){
  console.log('ok');
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentDate = `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()} ${now.getFullYear()}`;
  const h2 = document.createElement('h2');
  h2.innerText = currentDate;
  h2.classList.add('text-2xl');
  h2.classList.add('font-bold');
  document.getElementById(id).appendChild(h2);
}

date("showDate");

function getRandomHexColor() {
  let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return hex;
}
