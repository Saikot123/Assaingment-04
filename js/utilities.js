function creitdiv(id){
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.classList.add('text-sm');
    p.classList.add('font-normal');
    p.innerText = 'Your Have Completed the task';
    const deletedDiv = document.getElementById(id);
    
    div.classList.add('bg-[#F4F7FF]');
    div.classList.add('rounded-md');
    div.classList.add('p-2');
    div.classList.add('my-4');
    div.appendChild(p);
    return div;
}