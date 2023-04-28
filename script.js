// Array of 5 promises that resolve with a random time between 1 and 5 seconds
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 4000 + 1000))
];

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then(result => {
    const output = document.getElementById('output');
    output.innerText = `The first promise to resolve has returned ${result.toFixed(2)} seconds.`;
  })
  .catch(error => console.error(error));
