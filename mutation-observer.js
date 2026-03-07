/**
 * Intersection observer
 * 
 * It is used to detect the visibility of element
 * It is used to check whether element is in viewport or not.
 * It can be used to trigger animation when element is in viewport
 * Ad view tracking.
 */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log("element is visible..");
    }
  })
});
observer.observe(document.querySelector("#box"));


/**
 * Mutation observer
 * 
 * It is used to track element changes
 * It is used to track text changes
 * Element is added or removed so that be tracked
 * Detect DOM update changes
 */
const observer = new MutationObserver((entries) => {
  entries.forEach(entry => {
    console.log("DOM changed: ", entry);
  })
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
})
