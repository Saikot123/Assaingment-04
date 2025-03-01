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