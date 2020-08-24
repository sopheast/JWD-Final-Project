class taskManager {
    constructor(parent){
        this.tasks=[];
        this.currentId = 1;
        this.parent = parent;
    }


    addTask(taskname,taskdescription,assignee,date,status) {
        const task = new Task(
            `task${this.currentId++}`,
            this.currentId++,
            taskname,
            taskdescription,
            assignee,
            date,
            status
        );
       this.tasks.push(task);   
    
    }
     updateTask(id,taskName,taskdescription,assignee,date,status) {
         for (let i=0; i< this.tasks.length; i++){
             if(this.tasks[i].id === id) {
                 this.tasks[i].name = name;
                 this.tasks[i].description = description;
                 this.tasks[i].assignee = assignee;
                 this.tasks[i].date = date;
                 this.tasks[i].time =time;
                 this.tasks[i].status = status;
                 break;
             }
         }
     }

     display() {
         this.parent.innerHtml = "";
     // add  each task to the page

         tasks.forEach((task) => {
             const taskElement = task.toHtmlElement();
             this.parent.append(taskElement);

         });
   }   
}
class Task {
    constructor(id, taskname,taskdesciption,assignee,date,status){
        this.id=id;
        this.taskname = taskname;
        this.taskdescription = taskdesciption;
        this.assignee = this.assignee;
        this.date = date;
        this.status = status;
    }
    

    toHtmlElement(){
        const html =this.toHtmlString();
        const element = document.createRange().createContextualFragment(html);
        element
             .querySelector("button.edit")
             .addEventListener("click", editTaskClicked);
        element
             .querySelector("button.delete")
             .addEventListener("click", deleteTaskClicked);
        return element;
    }

    toHtmlString() {
        const html = `
          <div id="${this.id}" class="task col-lg-4 col-md-6 mb-4">
            <div class ="card">
              <div class="card-header">
                ${this.date} -${this.time}
                </div>
                <div class ="card-body">
                    <h5 class = "card-title">${this.name}</h5>
                    <p class ="card-text">${this.description}</p>
                    </div>
                    <div class ="card-footer  text-muted">
                        ${this.assignee} - ${this.status}
                        <button class ="edit btn btn-primary btn-sm float-right ml-2"><i class= far fa-edit"></i></button>
                        <button class ="delete btn btn-danger btn-sm float-right"><i class="far fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>                          
        `;
        return html;
    }




}
const taskManager = new TaskManager();











// const taskManager = new taskManager();

const taskContainer =document.querySelector("#tasks");

const createButton =document.querySelector("#create-button");
createButton.addEventListener('click',createTaskClicked);

const taskForm = document.querySelector("task-form");
taskForm.addEventListener('submit',tasFormSubmitted);

const modalElement =document.querySelector("#exampleModal");

// Handle change events of Form Elements
const taskIdinput = document.querySelector("#task-id");

const tskassign = document.querySelector("#taskName");
tskassign.addEventListener("input",(event)=> {
    checkName(event.target);
});
const taskDescriptionInput = document.querySelector("#exampleFormControlTextarea1");
taskDescriptionInput.addEventListener("input", (event) =>{
    checkDescription(event.target);
});

const taskAssigneeInput = document.querySelector("assign")
taskAssigneeInput.addEventListener("input", (event) =>{
    checkAssignee(event.target);
});

const taskSatusInput = document.querySelector("#task-status");



function createTaskClicked(event){
    clearValidation();
    clearModalFormFields();
    $("#exampleModal").modal("show");
}


function clearModalFormFields(){
    taskIdinput.value = null;
    taskName.value = null;
    taskDescriptionInput.value=null;
    taskAssigneeInput.value=null;
    taskSatusInput.value ="Pending";
}

for(let i = 0; i < taskManager.tasks.length; i++){
    if(taskManager.tasks[i].id === id){
        taskManager.tasks[i].name = name;
        taskManager.tasks[i].description = description;
        taskManager.tasks[i].assignee = assignee;
        taskManager.tasks[i].status = status;
        break;
    }
}

if (shouldRefresh){
    refreshPage(taskManager.tasks);
}


function addTask(
    name,
    description,
    assignee,
    date,
    status,
    shouldRefresh = true

)



taskManager.tasks.push({
    id:`task${taskManager.currentId++}`,
    name,
    description,
    assignee,
    status,

})