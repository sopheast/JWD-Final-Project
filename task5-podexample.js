const Task = {
  id: 0,
  name: "",
  desciption: "",
  assignedTo: "",
  dueDate: "",
  status: "",

};

class TaskManager {
 constructor(task) {
   this.task = task; //represents the model as a single object

   //prepopulate the task list with some mocked data
   this.taskList = [
     //represents a list of task objects
     {
       id:1,
       name: 'My first task',
       desciptions: 'sdsadsadsa',
       assignedTo: 'JB',
       dueDate: ' 15-08-2020',
       status: TODO,
     },
     {
      id:2,
      name: 'My second task',
      desciptions: 'sdsadsadsa',
      assignedTo: 'JB',
      dueDate: ' 15-08-2020',
      status: TODO,
    },
   ];
 }
 getAllTasks() {
   //let tasks = JSON.parsel(this.taskList || '[]');
   return this.taskList;
 }

 getTasksWithStatus() { }
 
 addTask(task) { }
 
 deleteTask(task) { }
 
 updateTask(id, status) { }
  
 assignTask(id, assignedTo) { }


}




const task1 = new Task(
  1,
  'a new task',
  'a new task what I just made',
  '03-08-2020',
  'TODO'
);



task1.addTask();

const taskList = [
  { id: 1, name: 'a name', description: 'blah blah blah' },
  { id: 2, name: 'a name', description: 'blah blah blah' },
];
