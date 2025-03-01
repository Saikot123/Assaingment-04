let total_removed = 0;
for(let i = 1; i <= 6; i++){
    document.getElementById(`complete-btn-${i}`).addEventListener('click',function(){
        // Main-Part-01
        total_removed++;
        const btn = document.getElementById(`complete-btn-${i}`);
        btn.setAttribute('disabled',true);

        const totalTask = document.getElementById('total-task').innerText;
        const remainingTask = document.getElementById('remaining-task').innerText;
        const newtotal = parseInt(totalTask) + 1;
        const newRemaining = parseInt(remainingTask) - 1;

        document.getElementById('total-task').innerText = newtotal;
        document.getElementById('remaining-task').innerText = newRemaining;
        if(total_removed === 6){
            alert('All Board Removed ');
        }else{
            alert('Board Updated Successfully');
        }
        // Main-Part-02

        const div = creitdiv(`complete-btn-${i}`);
        console.log(div.parentNode.parentNode);
        document.getElementById('activity-log').appendChild(div);
    });
}