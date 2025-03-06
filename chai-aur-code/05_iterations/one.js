// for loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// console.log(i); // i is not defined

for (let i = 0; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and inner loop ${i}`);
    // console.log(i + "*" + j + "=" + i * j);
  }
}

// loop using array

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// Keywords
// break - break the loop
// continue - skip the current iteration

// Break
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("detected 5");
    break;
  }

  console.log(`value of i is: ${index}`);
}

// Continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
      console.log("detected 5");
      continue;
    }
  
    console.log(`value of i is: ${index}`);
  }
