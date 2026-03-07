/* EventSource can be use for the realtime live data */

const es = new EventSource("https://sse.dev/test");

es.onmessage = (event) => {
  console.log("event: ", event);
} 
