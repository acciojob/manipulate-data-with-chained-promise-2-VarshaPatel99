const output = document.getElementById("output");

const arr = [1, 2, 3, 4];

// Step 1: Initial promise (3 seconds delay)
function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
}

getArray()
  .then((data) => {
    // Step 2: Filter even numbers after 1 second delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = data.filter(num => num % 2 === 0);
        output.innerText = evens; // shows 2,4
        resolve(evens);
      }, 1000);
    });
  })
  .then((evens) => {
    // Step 3: Multiply by 2 after 2 seconds delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const multiplied = evens.map(num => num * 2);
        output.innerText = multiplied; // shows 4,8
        resolve(multiplied);
      }, 2000);
    });
  });