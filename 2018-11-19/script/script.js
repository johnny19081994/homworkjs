'use stict'

// 1: Найдите и исправьте ошибки в коде:

var x = +prompt('Введите x', '1')
var y = +prompt('Введите y', '1')
alert(` Сумма: ${x + y}`);



// 2: Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Распечатайте все три.

var numberFirst = 5
var numberSecond = +numberFirst * 3
var numberThird = +numberFirst * 3 + 5
alert(numberSecond)
alert(numberThird)


// 3:Создайте переменные firstName и lastName для хранение имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие (“What’s up John Doe”), используя конкатенацию и экранирование символов.

var firstName = prompt('Введите имя', 'Игорь')
var lastName = prompt('Введите фамилию', 'Шульгин')
alert('What’s up ' +firstName + ' ' + lastName)

// 4:Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне. (Процесс вычисления посмотрите в debugger.)

var x = prompt('Введите число', '6')
var y = prompt('Введите число', '3')
alert(`Выводим произвидение: ${x*y}`)
alert(`Выводим частное: ${x/y}`)
alert(`Выводим разность: ${x-y}`)
alert(`Выводим сумму: ${+x+ +y}`)

// 5:Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным (true/false). Результат отобразите в alert.

var number = +prompt('Введите число')

if ( number % 2 == 0 ) {
    alert("True!")
} else {
    alert("False!")
}

// 6:Напишите программу, которая проверяет (true/false), является ли значение, введенное пользователем, числом.

var myNumber = +prompt('ВВедите число')
if(isNaN(myNumber)) {
alert('false!')
} else {
alert('true!')
}

// 7:Напишите калькулятор для конвертации единиц измерения количества информации (байт, килобайт, мегабайт, гигабайт). Значения считаются из prompt, результаты отображаются в alert. Используйте константы (ES5) там, где это логически оправдано.

var byte = 8
var kilobyte = 1024
var megabyte = 1024 * 1024
var gigabyte = 1024 * 1024 * 1024
var result = prompt('Введите число ')
var resultBytes = result *  byte
var resultKilobytes = result *  kilobyte
var resultMegabytes = result *  megabyte
var resultGigabytess = result *  gigabyte
alert(result + ' это '+ resultBytes + ' byte')
alert(result + ' это '+ resultKilobytes + ' kilobyte')
alert(result + ' это '+resultMegabytes + ' megabyte')
alert(result + ' это '+ resultGigabytess + ' gigabyte')

// 8:У Чжуан-цзы было N яблок, Цзэн-Цзы съел несколько. Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает. Запишите повествование в переменных и выражениях, читая значения из prompt. Не используя операторы сравнения, покажите, правду говорит Цзэн-Цзы или ложь.

var apple = +prompt('сколько яблок у Чжуан-цзы?')
var eatApple = +prompt('сколько яблок съел Цзэн-Цзы?')
var totalApple = apple - eatApple
alert('Осталось яблок ' + totalApple)
alert ('Цзэн-Цзы утверждает, что он не все яблоки съел')

// 9:На сайте есть три колонки разной высоты, заданной в единицах измерения веб (значения вводятся в prompt в формате “50px”, “20px”...). Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его. Учтите, что Math.max не работает со строками.
