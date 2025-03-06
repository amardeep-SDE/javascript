// Reduce method
const myNums = [1,2,3];

const myTotal = myNums.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)
console.log(myTotal);

// another example

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999        
    },
    {
        itemName: "cpp course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    }
]

// add all prices

const totalAmount = shoppingCart.reduce((acc, currval) => {
    return acc + currval.price;
}, 0)
console.log(totalAmount);