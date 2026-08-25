import { EventEmitter } from "node:events";
const task= new EventEmitter();

//Register Listeners
task.on("greet", (name)=>{
    console.log(`Hello, ${name}! Welcome to the session.`);
});

task.on("exit", (reason)=>{
    console.log(`session ending reason: ${reason}`);
});

task.on("start", (subject)=>{
    console.log(`session ending reason: ${subject}`);
});

task.on("greet", ()=>{
    console.log("class started by chandrahas mishra");
});

task.on("exit", ()=>{
    console.log("class finished");
});

task.on("start", ()=>{
    console.log("class started");
});

task.emit("greet", "students");
task.emit("exit","class completed");
task.emit("start","class started");