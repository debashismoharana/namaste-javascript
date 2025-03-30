console.log("Hello from promise.js");

const p1 = new Promise((resolve, reject) => {
  resolve("P1: Success");
  setTimeout(() => {
    reject("Error p1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  resolve("P2: Success");
});

const p3 = new Promise((resolve, reject) => {
  resolve("P3: Success");
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("All", res);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("Race won by: ", res);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log("allSettled: ", res);
});

Promise.any([p1, p2, p3]).then((res) => {
  console.log("Any (1st success): ", res);
});
