import('node-fetch')
  .then(() => {
    fetch('http://localhost:3000/Kamil');
    fetch('http://localhost:3000/Agnieszka');
}).catch(error => console.error(error));