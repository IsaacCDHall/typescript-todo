var Task = /** @class */ (function () {
    // descriptionParameter: string;
    // priorityParameter: string;
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
        // this.done = false;
        // this.description = description;
        // this.priority = priority;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Low'));
tasks.push(new Task('Buy chocolate.', 'High'));
tasks.push(new Task('Do laundry.', 'Medium'));
console.log(tasks);
tasks[0].markDone();
for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
    var task = tasks_1[_i];
    console.log(task);
}
