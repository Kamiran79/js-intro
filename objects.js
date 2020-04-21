



const expense = {
    id: 1,
    location: 'Baja Burrito',
    date: '11/11/20',
    price: 1324,
    purpose: 'Lunch back when that was a thing',
    code: '100AB',
}

console.log(expense);

expense.employeeNumber = 1001;

console.log(expense.price[0]);
const keyIWantToUse = 'price';

console.log(expense[keyIWantToUse]);



console.log(expense.location);

const checkPrice = (expObj) => {
    if (expObj.price > 1500) {
        expObj.approved = false;
    } else {
        expObj.aprroved = true;
    }
    return expObj;
}

console.log(checkPrice(expense));