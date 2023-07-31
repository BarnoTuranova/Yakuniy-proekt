let toDoList = [];
let tr = 1;
let allTask = 0;
let completeTask = 0;

function addTask(){
    let taskName = document.getElementById("taskInput").value;
    if (taskName !=""){
        let obj = {
            tartib: tr++,
            name: taskName,
            complete: false
        };
        toDoList.push(obj);
        chizish();
        allTask = toDoList.length;
        document.getElementById("allTask").innerText = allTask;
    }
}

function chizish(){
    let list = "";
    toDoList.forEach(function (item){
        list +=  
        '<li class="list-group-item">' +
                    '<input '+ (item.complete ? "submit" : "") +'" type="submit" id="'+ item.tartib +'" value="OFF" class="on btn"><input '+ (item.complete ? "text" : "") +' onchange="completed(this)" type="submit" id="'+ item.tartib +'" value="ON" class="og btn"><label for="'+ item.tartib +'" class="ml-3">'+ item.name +'</label>' +
                '</li>'
    });
    document.getElementById("list").innerHTML = list;
    document.getElementById("completeTask").innerText = completeTask;
    let progressW = (completeTask * 100) / allTask;
    document.getElementById("progress").style.width = progressW + "%";
}

function completed(input){
    let searchId = input.getAttribute("id");
    let submit = input.getAttribute("submit");
    toDoList.forEach(function (item,i){
        if (item.tartib == searchId){
            toDoList[i].complete = item.complete ? false : true;
        }
    });
    console.log(text);
    if (submit == null){
        completeTask++
    }
    else{
        completeTask--
    }
    chizish();
}
