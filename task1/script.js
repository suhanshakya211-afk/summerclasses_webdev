let tasks = [];

let editIndex = -1;



function addTask(){


    let title = document.getElementById("title").value;

    let date = document.getElementById("date").value;

    let description = document.getElementById("description").value;



    if(title == ""){

        alert("Please enter task title");

        return;

    }



    let task = {

        title:title,

        date:date,

        description:description,

        completed:false

    };



    // CREATE
    if(editIndex == -1){

        tasks.push(task);

    }


    // UPDATE
    else{

        task.completed = tasks[editIndex].completed;

        tasks[editIndex] = task;

        editIndex = -1;

    }



    clearInput();


    displayTasks();


}




function displayTasks(){


    let list = document.getElementById("taskList");


    list.innerHTML = "";



    for(let i=0; i<tasks.length; i++){


        let task = tasks[i];


        let status;


        if(task.completed){

            status = "Completed";

        }

        else{

            status = "Pending";

        }



        list.innerHTML += `

        <li class="${task.completed ? "completed" : ""}">


            <h3>${task.title}</h3>


            <p>
                <b>Date:</b> ${task.date}
            </p>


            <p>
                ${task.description}
            </p>


            <p>
                <b>Status:</b> ${status}
            </p>



            <button 
            class="complete"
            onclick="completeTask(${i})">

                Complete

            </button>



            <button 
            class="edit"
            onclick="editTask(${i})">

                Edit

            </button>



            <button 
            class="delete"
            onclick="deleteTask(${i})">

                Delete

            </button>


        </li>

        `;

    }


}




// COMPLETE

function completeTask(index){


    tasks[index].completed = true;


    displayTasks();


}





// EDIT

function editTask(index){


    document.getElementById("title").value =
    tasks[index].title;


    document.getElementById("date").value =
    tasks[index].date;


    document.getElementById("description").value =
    tasks[index].description;



    editIndex = index;


}





// DELETE

function deleteTask(index){


    tasks.splice(index,1);


    displayTasks();


}





function clearInput(){


    document.getElementById("title").value = "";

    document.getElementById("date").value = "";

    document.getElementById("description").value = "";


}