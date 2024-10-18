// child 1 component
const myEvent = new CustomEvent("customEvent", {
    detail: { name: "rajendra" }
  });
  
  // child 2 component
  document.addEventListener("customEvent", (event) => {
    console.log("Custom event received");
    console.log("event: ", event?.detail);
  });
  
  document.dispatchEvent(myEvent);

// Custom event received
// event:  {name: 'rajendra'}
