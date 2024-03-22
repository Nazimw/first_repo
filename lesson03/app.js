// let servicePriceSecond = 10000
// let titleProject = 'оценка стоимости'
// let screensValue = 'шаблонные,с анимациями, с уникальным дизайном'
// let screenPrice = 50000
// let percentage = 100
// let fullPrice = 40000
// let responsive = true


let screenPrice = 10000
let percentage = 10

let titleProject = prompt ('Название проекта?')
console.log(titleProject);

let screensValue = prompt ('Какой нужен?')
console.log(screensValue);

let responsive = prompt ('нужен ли респонсивный сайт?')
console.log(responsive);

let service = prompt ('Какой сервис нужен?')
console.log(service);

let servicePrice = +prompt ('Сколько это будет стоить?')
console.log(servicePrice);

let serviceSecond = prompt ('Какой дополнительный сервис нужен?')
console.log(serviceSecond);

let fullPrice = screenPrice + servicePriceSecond + serviceSecond  
console.log(fullPrice);

let percentageResult = +(fullPrice * (percentage / 100))
console.log(percentageResult, 'Процент подрядчику');

let servicePercentPrice = fullPrice - percentageResult
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма за вычетом % подрядчику');

if (fullPrice > 50000) {
    console.log('Делаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log('Делаем скидку 5 %');
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так');
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Проверка на сторогое равенство');
}
