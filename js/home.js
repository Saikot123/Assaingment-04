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
        alert('Board Updated Successfully');
        if(total_removed === 6){
            alert('Congrats!!! You Have completed all the current tasks');
        }
        // Main-Part-02

        const div = creitdiv(`complete-btn-${i}`,btn);
        document.getElementById('activities').appendChild(div);
    });
}

document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('activities').innerHTML="";
  });

  document.getElementById("discover").addEventListener("click", function() {
    window.location.href = "./blog.html";
  });

  document.getElementById('change-bg').addEventListener('click',function(){
    document.body.style.backgroundColor = getRandomHexColor();
  });

 