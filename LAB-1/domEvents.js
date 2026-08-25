import { EventEmitter } from "node:events";

function createDOMElement() {
    const emitter = new EventEmitter();

    return {
        addEventListener(eventName, callback) {
            emitter.on(eventName, callback);
        },

        removeEventListener(eventName, callback) {
            emitter.off(eventName, callback);
        },

        
        dispatchEvent(event) {
            emitter.emit(event.type, event);
        }
    };
}

function hand(event) {
    console.log("Handler function called");
    console.log("Event:", event.type);
}

const button = createDOMElement();

function handleclick(event){
    console.log(`Button clicker`);
    console.log('Event type: ${event.type});
    console.log(`Message: ${event.detail}`);
}

button.addEventListener("click", () => {
    console.log("Button clicked");
});

button.addEventListener("click", hand);

// Dispatch click event
button.dispatchEvent({
    type: "click"
});