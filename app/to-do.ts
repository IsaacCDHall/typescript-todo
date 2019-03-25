class Task {
  done: boolean = false;
  // descriptionParameter: string;
  // priorityParameter: string;

  constructor(public description: string, public priority: string){
    // this.done = false;
    // this.description = description;
    // this.priority = priority;
  }
  markDone(){
    this.done = true;
  }
}
var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Low'));
tasks.push(new Task('Buy chocolate.', 'High'));
tasks.push(new Task('Do laundry.', 'Medium'));
console.log(tasks);

tasks[0].markDone();

for(var task of tasks){
  console.log(task);
}
