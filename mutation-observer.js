const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    console.log("DOM is changed: ", mutation);
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
