const inputBox = document.getElementById('input')
const containerList = document.getElementsByClassName('container-list')[0]

inputBox.onkeydown = function (e){
     if(e.key === 'Enter'){
        let li = document.createElement('LI');
        li.innerHTML = inputBox.value;
        containerList.appendChild(li);
        let span = document.createElement('SPAN');
        span.innerHTML = '&#x2715;';
        li.appendChild(span)
        saveData() 
        inputBox.value = ''
    }
    
}


function addTask(){
    if(inputBox.value == ""){
        alert("Write Down Your Task")
    }
    else{
        let li = document.createElement('LI');
        li.innerHTML = inputBox.value;
        containerList.appendChild(li);
        let span = document.createElement('SPAN');
        span.innerHTML = '&#x2715;';
        li.appendChild(span)
        saveData()        
    }
    inputBox.value = ''
}

containerList.addEventListener('click',function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})


function saveData(){
    localStorage.setItem('data',containerList.innerHTML)
}

function showData(){
    containerList.innerHTML = localStorage.getItem('data')
}
showData()






