// for each loop

const coding = ["js", "cpp", "py", "rb", "java"];

// for each call back leta h isliye kabhi function ka naam ni dete, generally arrow fun sahi h lagana

// coding.forEach( function (value, index) {
//     // console.log(value);

// })

coding.forEach(( element, index) => {
    // console.log(element);
    // console.log(index);
    console.log(`${index} shortcut is for ${element}`);
})

// intresting ex

function printMe(item){
    console.log(item);
}
coding.forEach(printMe); //  refrence dena h bus aise

// three parameters
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})


// mostly used in db data
const myCoding = [
    {
        languageName: "javascript",
        langauageFileName: "js"
    },
    {
        languageName: "c++",
        langauageFileName: "cpp"
    },
    {
        languageName: "python",
        langauageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})