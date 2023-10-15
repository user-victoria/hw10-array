// Створити масив, довжину та елементи якого задає користувач. У міру змін виводити вміст масиву на сторінку.
let userWrite = prompt('Введіть від 5 чисел через пробіл');
console.log('Дані з prompt:', userWrite);
console.log(' ');

let userArr = userWrite.split(' ');
console.log('Масив від користувача', userArr);
console.log(' ');

// Відсортувати масив за зростанням.
let arrCopyToSort = [...userArr];
let arrToSort = arrCopyToSort.sort(function (a, b) {
    return a - b;
});
console.log('Відсортований масив', arrToSort);
console.log(' ');

// Видалити елементи з масиву з 2 по 4 (включно!).
let arrCopyToDelete = [...arrToSort];
let arrDeletedItems = arrCopyToDelete.splice(1, 3);
console.log('Видалені елементи', arrDeletedItems);
console.log(' ');

let arrAfterDelete = [...arrCopyToDelete];
console.log('Масив після видалених елементів', arrAfterDelete);