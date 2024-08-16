const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    const details = {
      url: window.location.href,
      timestamp: new Date().toISOString(),
      type: mutation.type,
    };
    fetch('http://localhost:3000/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    });
  });
});

observer.observe(document.body, {
  childList: true,
  attributes: true,
  subtree: true,
});
