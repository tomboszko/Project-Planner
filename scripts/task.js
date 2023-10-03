import {ComputeRemainingDays} from "./remainingDays.js";

class task {
    constructor(title, status, dueDate, description, id) {
        this.title = title;
        this.status = status;
        this.dueDate = dueDate;
        this.description = description;
        this.id = id;
        this.remainingDays = ComputeRemainingDays(dueDate);
    }
}
let tasks = [];

export {tasks};