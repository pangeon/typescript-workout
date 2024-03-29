const refresh = (message: any): void => {
    const webContainer = document.getElementById('data-container');
    if (webContainer) webContainer.innerText = `Yours last voice: ${message}`
}

fetch('http://127.0.0.1:8080/CHAP-12/12.0.4/data.json').then((response) => {
  response.json().then((body) => refresh(body.message));
});
