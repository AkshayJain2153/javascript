// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// test commit delete after
// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023,0,23, 5, 10)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
let myNewCreatedDate = new Date("01-14-2013")
// console.log(myCreatedDate.toLocaleString());
// console.log(myNewCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myNewCreatedDate.getTime());


// console.log(Math.floor(Date.now()/1000));

// console.log(myDate)
// console.log(myDate.getMonth() + 1)
// console.log(myDate.getDate())
// console.log(myDate.getDay())


// let newCurrentDate = myDate.toLocaleString('default', {
//     weekday: 'long',
//     year: 'numeric',
// })

// console.log(newCurrentDate);



/////////////////////////


// const newArr = [0,1,2,3,4,5]

// console.log(newArr);


// console.log("A", newArr);

// const newArr1 = newArr.slice(1,3)
// console.log(newArr1);


// console.log("B", newArr);


// const newArr2 = newArr.splice(1,3)

// console.log(newArr);

// console.log(newArr2);


const marvels_heros = ["thor", "Ironman" ,"spiderman"]
const dc_heros = ["superman", "flash" ,"batman"]

// marvels_heros.push(dc_heros)

// console.log(marvels_heros);
// console.log(marvels_heros[3][1]);

// const allHeros = marvels_heros.concat(dc_heros)
// console.log(allHeros);


// const all_new_heros = [...marvels_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);