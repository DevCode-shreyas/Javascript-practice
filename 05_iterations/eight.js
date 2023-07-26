// reduce

// const muNums = [1, 2, 3];

// const sum = muNums.reduce((acc, num) => {
//     // console.log(acc, num);
//   return acc + num;
// }, 0);

// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 199
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "Rust course",
        price: 500
    },
    {
        itemName: "php course",
        price: 399
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>{
    return acc + item.price 
}, 0);

console.log(priceToPay);